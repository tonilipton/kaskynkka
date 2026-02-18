/* empty css                                   */
import { c as createComponent, e as renderComponent, r as renderTemplate, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_KOnLKeiO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CLQR0Fxm.mjs';
import { g as getSupabaseClient } from '../../chunks/supabaseClient_D-1yiB8H.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let order = null;
  let orderItems = [];
  let error = null;
  if (id) {
    try {
      const supabase = getSupabaseClient();
      const { data: orderData, error: orderError } = await supabase.from("orders").select("*").eq("order_id", id).single();
      if (!orderError && orderData) {
        order = orderData;
        const { data: items } = await supabase.from("order_items").select("*, menu_items(*)").eq("order_id", order.id);
        orderItems = items || [];
      } else {
        const { data: sessionOrder } = await supabase.from("orders").select("*").eq("stripe_session_id", id).single();
        if (sessionOrder) {
          order = sessionOrder;
          const { data: items } = await supabase.from("order_items").select("*, menu_items(*)").eq("order_id", order.id);
          orderItems = items || [];
        } else {
          error = "Order not found";
        }
      }
    } catch (e) {
      error = e.message || "Failed to load order";
    }
  } else {
    error = "Order ID is required";
  }
  const title = order ? "Order " + order.order_id + " - Ravintola Kaskynkka" : "Order Not Found";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen py-32 px-4 bg-dark"> <div class="max-w-2xl mx-auto"> ${error ? renderTemplate`<div class="bg-surface p-8 text-center border border-dark"> <h1 class="font-serif text-3xl text-accent mb-4">Order Not Found</h1> <p class="text-muted mb-6">${error}</p> <a href="/" class="inline-block px-6 py-3 bg-accent text-dark font-sans uppercase tracking-wider text-sm hover:bg-accent/90 transition-colors">
Back to Menu
</a> </div>` : order ? renderTemplate`<div class="space-y-8"> <div class="text-center"> <h1 class="font-serif text-4xl text-accent mb-2">Order Tracking</h1> <p class="text-muted font-sans tracking-wider uppercase text-sm">Order #${order.order_id}</p> </div> <div id="status-card" class="bg-surface p-8 border border-dark"${addAttribute(order.order_id, "data-order-id")}${addAttribute(order.status, "data-initial-status")}${addAttribute(order.estimated_time || "", "data-initial-time")}> <div id="status-content" class="text-center"> <div id="status-icon" class="text-6xl mb-4">⏳</div> <h2 id="status-title" class="font-serif text-2xl text-light mb-2">Loading...</h2> <p id="status-message" class="text-muted">Checking order status...</p> <div id="pickup-info" class="mt-6 pt-6 border-t border-dark hidden"> <div class="flex items-center justify-center gap-2 text-accent mb-2"> <span class="text-2xl">📍</span> <span class="font-sans uppercase tracking-wider text-sm">Pickup Location</span> </div> <p class="text-light">Soikkokuja 12, 70780 Kuopio</p> </div> </div> </div> <div class="bg-surface p-8 border border-dark"> <h3 class="font-serif text-xl text-accent mb-6 pb-4 border-b border-dark">Order Details</h3> <div class="space-y-4"> <div class="flex justify-between"> <span class="text-muted">Customer</span> <span class="text-light font-medium">${order.customer_name || "Guest"}</span> </div> <div class="flex justify-between"> <span class="text-muted">Total</span> <span class="text-accent font-serif text-xl">€${order.total.toFixed(2)}</span> </div> <div id="estimated-time-row" class="flex justify-between hidden"> <span class="text-muted">Estimated Pickup</span> <span id="estimated-time-value" class="text-light font-medium">-</span> </div> </div> </div> <div class="bg-surface p-8 border border-dark"> <h3 class="font-serif text-xl text-accent mb-6 pb-4 border-b border-dark">Items</h3> ${orderItems.length > 0 ? renderTemplate`<div class="space-y-4"> ${orderItems.map((item) => renderTemplate`<div class="flex justify-between items-center py-2 border-b border-dark/50 last:border-0"> <div> <span class="text-light font-medium">${item.menu_items?.title || "Unknown Item"}</span> <span class="text-muted text-sm ml-2">× ${item.quantity}</span> </div> <span class="text-accent">€${(item.price * item.quantity).toFixed(2)}</span> </div>`)} </div>` : renderTemplate`<p class="text-muted italic">No items found</p>`} </div> <div class="bg-surface/50 border border-accent/30 p-6"> <div class="flex items-start gap-4"> <span class="text-2xl">📍</span> <div> <h4 class="font-serif text-lg text-accent mb-1">Pickup Only</h4> <p class="text-light/80 text-sm">
Please pick up your order from our restaurant location.<br> <strong>Address:</strong> Soikkokuja 12, 70780 Kuopio
</p> </div> </div> </div> <div class="text-center"> <a href="/" class="inline-block px-6 py-3 border border-accent text-accent font-sans uppercase tracking-wider text-sm hover:bg-accent hover:text-dark transition-colors">
Back to Menu
</a> </div> </div>` : null} </div> </div> ` })} `;
}, "C:/Users/WinPc/Desktop/AG/kaskynkka/src/pages/order/[id].astro", void 0);

const $$file = "C:/Users/WinPc/Desktop/AG/kaskynkka/src/pages/order/[id].astro";
const $$url = "/order/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
