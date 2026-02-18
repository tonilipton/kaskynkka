import type { APIRoute } from "astro";
import { stripe, STRIPE_CURRENCY } from "../../lib/stripe";
import type { CartItem } from "../../stores/cart";
import { csrfProtection, addSecurityHeaders } from "../../lib/csrf";

export const POST: APIRoute = async (context) => {
  // Apply CSRF protection
  const csrfError = csrfProtection(context);
  if (csrfError) {
    return csrfError;
  }

  try {
    const { items, customerName } = await context.request.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      const headers = addSecurityHeaders(new Headers());
      headers.set("Content-Type", "application/json");
      return new Response(JSON.stringify({ error: "Cart is empty" }), {
        status: 400,
        headers,
      });
    }

    // Calculate total
    const total = items.reduce((sum: number, item: CartItem) => {
      return sum + item.menuItem.price * item.quantity;
    }, 0);

    // Create line items for Stripe
    const lineItems = items.map((item: CartItem) => ({
      price_data: {
        currency: STRIPE_CURRENCY,
        product_data: {
          name: item.menuItem.title,
          description: item.menuItem.description || undefined,
        },
        unit_amount: Math.round(item.menuItem.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${new URL(context.request.url).origin}/order/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${new URL(context.request.url).origin}/checkout?canceled=true`,
      metadata: {
        customer_name: customerName || "Guest",
        items: JSON.stringify(
          items.map((item: CartItem) => ({
            menu_item_id: item.menuItem.id,
            quantity: item.quantity,
            price: item.menuItem.price,
            title: item.menuItem.title,
          })),
        ),
        total: total.toString(),
      },
    });

    const headers = addSecurityHeaders(new Headers());
    headers.set("Content-Type", "application/json");
    return new Response(
      JSON.stringify({ sessionId: session.id, url: session.url }),
      { status: 200, headers },
    );
  } catch (error: any) {
    console.error("Error creating checkout session:", error);
    const headers = addSecurityHeaders(new Headers());
    headers.set("Content-Type", "application/json");
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to create checkout session",
      }),
      { status: 500, headers },
    );
  }
};
