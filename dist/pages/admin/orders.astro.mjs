/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderComponent, b as renderHead, F as Fragment } from '../../chunks/astro/server_KOnLKeiO.mjs';
import 'kleur/colors';
import { g as getSupabaseClient } from '../../chunks/supabaseClient_D-1yiB8H.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Orders = createComponent(async ($$result, $$props, $$slots) => {
  let orders = [];
  let error = null;
  try {
    const supabase = getSupabaseClient();
    const { data, error: fetchError } = await supabase.from("orders").select("*").order("created_at", { ascending: false }).limit(50);
    if (fetchError) {
      error = fetchError.message;
    } else {
      orders = data || [];
      for (const order of orders) {
        const { data: items } = await supabase.from("order_items").select("*, menu_items(*)").eq("order_id", order.id);
        order.items = items || [];
      }
    }
  } catch (e) {
    error = e.message || "Failed to load orders";
  }
  return renderTemplate(_a || (_a = __template([`<html lang="fi" class="bg-dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin - Orders - Ravintola K\xE4skynkk\xE4</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Inter:wght@400;500&display=swap" rel="stylesheet"><script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              dark: '#121212',
              surface: '#1E1E1E',
              accent: '#C4A484',
              light: '#F5F5F5',
              muted: '#A3A3A3',
            },
            fontFamily: {
              serif: ['"Cormorant Garamond"', 'serif'],
              sans: ['Inter', 'sans-serif'],
            }
          }
        }
      }
    <\/script>`, '</head> <body class="bg-dark text-light font-sans min-h-screen"> <div class="max-w-7xl mx-auto px-4 py-8"> <!-- Header --> <header class="flex justify-between items-center mb-8 pb-6 border-b border-dark"> <div> <h1 class="font-serif text-3xl text-accent uppercase tracking-ultra">Order Management</h1> <p class="text-muted mt-1">Manage incoming orders and update status</p> </div> <div class="flex gap-4"> <a href="/admin/menu" class="px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-dark transition-colors font-sans uppercase tracking-wider text-sm">\nMenu Management\n</a> <a href="/" class="px-4 py-2 bg-accent text-dark hover:bg-accent/90 transition-colors font-sans uppercase tracking-wider text-sm">\nBack to Site\n</a> </div> </header> ', " </div> </body></html>"])), renderHead(), error ? renderTemplate`<div class="bg-red-900/30 border border-red-500/50 text-red-200 p-4 mb-6"> <p>Error loading orders: ${error}</p> </div>` : orders.length === 0 ? renderTemplate`<div class="text-center py-16 bg-surface border border-dark"> <p class="text-muted text-lg">No orders yet</p> <p class="text-muted/60 text-sm mt-2">New orders will appear here when customers place them</p> </div>` : renderTemplate`<div class="space-y-6"> ${orders.map((order) => renderTemplate`<div class="bg-surface border border-dark p-6"${addAttribute(order.order_id, "data-order-id")}> <!-- Order Header --> <div class="flex justify-between items-start mb-4 pb-4 border-b border-dark"> <div> <h3 class="font-serif text-xl text-accent">Order #${order.order_id}</h3> <p class="text-muted text-sm mt-1"> ${order.customer_name || "Guest"} • ${new Date(order.created_at).toLocaleString("fi-FI")} </p> </div> <div${addAttribute(`
                  px-4 py-2 font-sans uppercase tracking-wider text-xs font-bold
                  ${order.status === "Pending" ? "bg-yellow-900/30 text-yellow-400 border border-yellow-500/30" : ""}
                  ${order.status === "Confirmed" ? "bg-blue-900/30 text-blue-400 border border-blue-500/30" : ""}
                  ${order.status === "Ready" ? "bg-green-900/30 text-green-400 border border-green-500/30" : ""}
                `, "class")}> ${order.status} </div> </div> <!-- Order Items --> <div class="mb-4"> <h4 class="font-sans uppercase tracking-wider text-xs text-muted mb-3">Items</h4> <ul class="space-y-2"> ${order.items && order.items.length > 0 ? order.items.map((item) => renderTemplate`<li class="flex justify-between text-light"> <span> <span class="font-medium">${item.menu_items?.title || "Unknown"}</span> <span class="text-muted text-sm ml-2">× ${item.quantity}</span> </span> <span class="text-accent">€${(item.price * item.quantity).toFixed(2)}</span> </li>`) : renderTemplate`<li class="text-muted italic">No items found</li>`} </ul> </div> <!-- Order Footer --> <div class="flex justify-between items-center pt-4 border-t border-dark"> <div> <p class="text-accent font-serif text-xl">€${order.total.toFixed(2)}</p> ${order.estimated_time && renderTemplate`<p class="text-muted text-sm mt-1">Est. ready in ${order.estimated_time} minutes</p>`} </div> <div class="flex gap-3"> ${order.status === "Pending" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <button class="px-4 py-2 bg-blue-900/50 border border-blue-500/50 text-blue-200 hover:bg-blue-800/50 transition-colors font-sans uppercase tracking-wider text-xs" data-action="accept" data-time="20"${addAttribute(order.order_id, "data-order-id")}>
20 min
</button> <button class="px-4 py-2 bg-blue-900/50 border border-blue-500/50 text-blue-200 hover:bg-blue-800/50 transition-colors font-sans uppercase tracking-wider text-xs" data-action="accept" data-time="30"${addAttribute(order.order_id, "data-order-id")}>
30 min
</button> <button class="px-4 py-2 bg-blue-900/50 border border-blue-500/50 text-blue-200 hover:bg-blue-800/50 transition-colors font-sans uppercase tracking-wider text-xs" data-action="accept" data-time="40"${addAttribute(order.order_id, "data-order-id")}>
40 min
</button> ` })}`} ${order.status === "Confirmed" && renderTemplate`<button class="px-4 py-2 bg-green-900/50 border border-green-500/50 text-green-200 hover:bg-green-800/50 transition-colors font-sans uppercase tracking-wider text-xs" data-action="ready"${addAttribute(order.order_id, "data-order-id")}>
Mark Ready
</button>`} ${order.status === "Ready" && renderTemplate`<span class="text-green-400 font-sans uppercase tracking-wider text-sm flex items-center gap-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>
Ready for Pickup
</span>`} </div> </div> </div>`)} </div>`);
}, "C:/Users/WinPc/Desktop/AG/kaskynkka/src/pages/admin/orders.astro", void 0);

const $$file = "C:/Users/WinPc/Desktop/AG/kaskynkka/src/pages/admin/orders.astro";
const $$url = "/admin/orders";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Orders,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
