import { s as stripe } from '../../chunks/stripe_DaTXug8U.mjs';
import { g as getSupabaseClient } from '../../chunks/supabaseClient_D-1yiB8H.mjs';
import { Telegraf, Markup } from 'telegraf';
export { renderers } from '../../renderers.mjs';

const createOrder = async (client, order, items) => {
  const { data: orderData, error: orderError } = await client.from("orders").insert([order]).select("*").single();
  if (orderError) throw orderError;
  const orderId = orderData.id;
  const itemRows = items.map((i) => ({ ...i, order_id: orderId }));
  const { error: itemsError } = await client.from("order_items").insert(itemRows);
  if (itemsError) throw itemsError;
  return orderData;
};

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const bot = token ? new Telegraf(token) : null;
const awaitingCustomTime = /* @__PURE__ */ new Map();
if (bot) {
  bot.action(/set_time_(\d+)_(.+)/, async (ctx) => {
    const minutes = ctx.match[1];
    const orderId = ctx.match[2];
    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.from("orders").update({
        estimated_time: parseInt(minutes),
        status: "Confirmed"
      }).eq("order_id", orderId);
      if (error) {
        console.error("Error updating order:", error);
        await ctx.answerCbQuery("❌ Error updating order");
        return;
      }
      await ctx.answerCbQuery(`✅ Pickup time set to ${minutes} minutes`);
      const newText = ctx.callbackQuery?.message?.text?.replace("⏳ Pending", `✅ Confirmed (${minutes} min)`) || "";
      await ctx.editMessageText(
        newText + "\n\n✅ *Order confirmed!* Pickup in " + minutes + " minutes.",
        {
          parse_mode: "Markdown",
          reply_markup: Markup.inlineKeyboard([
            [Markup.button.callback("✅ Ready for Pickup!", `ready_${orderId}`)]
          ]).reply_markup
        }
      );
    } catch (error) {
      console.error("Error setting pickup time:", error);
      await ctx.answerCbQuery("❌ Error processing request");
    }
  });
  bot.action(/custom_time_(.+)/, async (ctx) => {
    const orderId = ctx.match[1];
    const userId = ctx.from?.id.toString();
    if (userId) {
      awaitingCustomTime.set(userId, orderId);
    }
    await ctx.answerCbQuery("⌨️ Enter custom time");
    await ctx.reply(
      `⌛ *Custom Pickup Time*

Order: ${orderId}

Please reply with the number of minutes (e.g., "25"):`,
      { parse_mode: "Markdown" }
    );
  });
  bot.on("text", async (ctx) => {
    const userId = ctx.from?.id.toString();
    if (!userId) return;
    const orderId = awaitingCustomTime.get(userId);
    if (!orderId) return;
    const text = ctx.message.text.trim();
    const minutes = parseInt(text);
    if (isNaN(minutes) || minutes <= 0 || minutes > 120) {
      await ctx.reply("❌ Please enter a valid number between 1 and 120 minutes.");
      return;
    }
    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.from("orders").update({
        estimated_time: minutes,
        status: "Confirmed"
      }).eq("order_id", orderId);
      if (error) {
        console.error("Error updating order:", error);
        await ctx.reply("❌ Error updating order. Please try again.");
        return;
      }
      awaitingCustomTime.delete(userId);
      await ctx.reply(
        `✅ *Order ${orderId} confirmed!*

Pickup time set to ${minutes} minutes.`,
        { parse_mode: "Markdown" }
      );
    } catch (error) {
      console.error("Error setting custom time:", error);
      await ctx.reply("❌ Error processing request. Please try again.");
    }
  });
  bot.action(/ready_(.+)/, async (ctx) => {
    const orderId = ctx.match[1];
    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.from("orders").update({ status: "Ready" }).eq("order_id", orderId);
      if (error) {
        console.error("Error marking order ready:", error);
        await ctx.answerCbQuery("❌ Error updating order");
        return;
      }
      await ctx.answerCbQuery("✅ Order marked as ready!");
      const newText = ctx.callbackQuery?.message?.text || "";
      await ctx.editMessageText(
        newText.replace("✅ Confirmed", "✅✅ READY FOR PICKUP") + "\n\n🎉 *Order is READY!* Customer has been notified.",
        { parse_mode: "Markdown" }
      );
    } catch (error) {
      console.error("Error marking order ready:", error);
      await ctx.answerCbQuery("❌ Error processing request");
    }
  });
  bot.launch();
  console.log("Telegram bot started");
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
}
const notifyOrder = async (orderId) => {
  if (!bot || !chatId) {
    console.log("Telegram bot not configured, skipping notification");
    return;
  }
  try {
    const supabase = getSupabaseClient();
    const { data: order, error: orderError } = await supabase.from("orders").select("*").eq("order_id", orderId).single();
    if (orderError || !order) {
      console.error("Error fetching order for Telegram:", orderError);
      return;
    }
    const { data: orderItems } = await supabase.from("order_items").select("*, menu_items(*)").eq("order_id", order.id);
    const itemsSummary = orderItems?.map(
      (item) => `  • ${item.menu_items?.title || "Unknown"} × ${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`
    ).join("\n") || "  No items found";
    const baseUrl = process.env.PUBLIC_SITE_URL || "http://localhost:4321";
    const adminUrl = `${baseUrl}/admin/orders`;
    const msg = `🔔 *NEW ORDER - PICKUP ONLY*

🆔 *Order ID:* ${order.order_id}
👤 *Customer:* ${order.customer_name || "Guest"}
💶 *Total:* €${order.total.toFixed(2)}
⏳ *Status:* Pending

📦 *Items:*
${itemsSummary}

📍 *Pickup Location:* Soikkokuja 12, Kuopio

*Select pickup time:*`;
    const keyboard = Markup.inlineKeyboard([
      [
        Markup.button.callback("⏱ 20 min", `set_time_20_${order.order_id}`),
        Markup.button.callback("⏱ 30 min", `set_time_30_${order.order_id}`),
        Markup.button.callback("⏱ 40 min", `set_time_40_${order.order_id}`)
      ],
      [
        Markup.button.callback("⌨️ Custom Time", `custom_time_${order.order_id}`)
      ],
      [
        Markup.button.url("📋 View in Admin", adminUrl)
      ]
    ]);
    await bot.telegram.sendMessage(chatId, msg, {
      parse_mode: "Markdown",
      disable_web_page_preview: true,
      ...keyboard
    });
    console.log(`Telegram notification sent for order ${orderId}`);
  } catch (error) {
    console.error("Telegram notification error:", error);
  }
};

function generateUniqueId() {
  const now = /* @__PURE__ */ new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
  const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, "");
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORD-${dateStr}-${timeStr}-${random}`;
}

const POST = async ({ request }) => {
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
      process.env.STRIPE_WEBHOOK_SECRET
    );
    if (event.type === "checkout.session.completed") {
      const supabase = getSupabaseClient();
      const session = event.data.object;
      const customerName = session.metadata?.customer_name || "Guest";
      const itemsJson = session.metadata?.items || "[]";
      const totalStr = session.metadata?.total || "0";
      const items = JSON.parse(itemsJson);
      const total = parseFloat(totalStr);
      const order = {
        id: "",
        order_id: generateUniqueId(),
        customer_name: customerName,
        total,
        status: "Pending"
      };
      const orderItems = items.map((item) => ({
        menu_item_id: item.menu_item_id,
        quantity: item.quantity,
        price: item.price
      }));
      const createdOrder = await createOrder(supabase, order, orderItems);
      await supabase.from("orders").update({
        stripe_session_id: session.id
      }).eq("id", createdOrder.id);
      try {
        await notifyOrder(createdOrder.order_id);
      } catch (telegramError) {
        console.error("Telegram notification failed:", telegramError);
      }
      return new Response(
        JSON.stringify({ received: true, orderId: createdOrder.order_id }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ received: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
