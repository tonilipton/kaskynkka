import { S as STRIPE_CURRENCY, s as stripe } from '../../chunks/stripe_DaTXug8U.mjs';
import { c as csrfProtection, a as addSecurityHeaders } from '../../chunks/csrf_C_rd12dh.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async (context) => {
  const csrfError = csrfProtection(context);
  if (csrfError) {
    return csrfError;
  }
  try {
    const { items, customerName } = await context.request.json();
    if (!items || !Array.isArray(items) || items.length === 0) {
      const headers2 = addSecurityHeaders(new Headers());
      headers2.set("Content-Type", "application/json");
      return new Response(JSON.stringify({ error: "Cart is empty" }), {
        status: 400,
        headers: headers2
      });
    }
    const total = items.reduce((sum, item) => {
      return sum + item.menuItem.price * item.quantity;
    }, 0);
    const lineItems = items.map((item) => ({
      price_data: {
        currency: STRIPE_CURRENCY,
        product_data: {
          name: item.menuItem.title,
          description: item.menuItem.description || void 0
        },
        unit_amount: Math.round(item.menuItem.price * 100)
        // Convert to cents
      },
      quantity: item.quantity
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${new URL(context.request.url).origin}/order/{CHECKOUT_SESSION_ID}`,
      cancel_url: `${new URL(context.request.url).origin}/checkout?canceled=true`,
      metadata: {
        customer_name: customerName || "Guest",
        items: JSON.stringify(
          items.map((item) => ({
            menu_item_id: item.menuItem.id,
            quantity: item.quantity,
            price: item.menuItem.price,
            title: item.menuItem.title
          }))
        ),
        total: total.toString()
      }
    });
    const headers = addSecurityHeaders(new Headers());
    headers.set("Content-Type", "application/json");
    return new Response(
      JSON.stringify({ sessionId: session.id, url: session.url }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Error creating checkout session:", error);
    const headers = addSecurityHeaders(new Headers());
    headers.set("Content-Type", "application/json");
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to create checkout session"
      }),
      { status: 500, headers }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
