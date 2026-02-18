import type { APIRoute } from "astro";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { createOrder } from "../../api/orders";
import { getSupabaseClient } from "../../lib/supabaseClient";
import type { Order, OrderItem } from "../../lib/types";
import { notifyOrder } from "../../tools/telegramBot";
import { generateUniqueId } from "../../utils/uniqueId";

export const POST: APIRoute = async ({ request }) => {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return new Response("No signature", { status: 400 });
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    return new Response("Webhook secret not configured", { status: 500 });
  }

  try {
    const body = await request.text();
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );

    if (event.type === "checkout.session.completed") {
      const supabase = getSupabaseClient();
      const session = event.data.object as Stripe.Checkout.Session;

      // Extract order data from metadata
      const customerName = session.metadata?.customer_name || "Guest";
      const itemsJson = session.metadata?.items || "[]";
      const totalStr = session.metadata?.total || "0";

      const items = JSON.parse(itemsJson);
      const total = parseFloat(totalStr);

      // Create order in database
      const order: Order = {
        id: "",
        order_id: generateUniqueId(),
        customer_name: customerName,
        total: total,
        status: "Pending",
      };

      // Convert items to OrderItem format
      const orderItems: OrderItem[] = items.map((item: any) => ({
        menu_item_id: item.menu_item_id,
        quantity: item.quantity,
        price: item.price,
      }));

      const createdOrder = await createOrder(supabase, order, orderItems);

      // Store Stripe session ID mapping for redirect
      await supabase
        .from("orders")
        .update({
          stripe_session_id: session.id,
        })
        .eq("id", createdOrder.id);

      // Send Telegram notification
      try {
        await notifyOrder(createdOrder.order_id);
      } catch (telegramError) {
        console.error("Telegram notification failed:", telegramError);
        // Don't fail the webhook if Telegram fails
      }

      return new Response(
        JSON.stringify({ received: true, orderId: createdOrder.order_id }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Webhook error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
};
