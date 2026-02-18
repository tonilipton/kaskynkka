/* empty css                                */
import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_KOnLKeiO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CLQR0Fxm.mjs';
export { renderers } from '../renderers.mjs';

const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Checkout | Ravintola K\xE4skynkk\xE4" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen py-32 px-4"> <div class="max-w-2xl mx-auto"> <!-- Header --> <div class="text-center mb-16"> <h1 class="font-serif text-4xl md:text-5xl text-accent mb-4">Complete Your Order</h1> <p class="text-muted font-sans tracking-wider uppercase text-sm">Secure checkout powered by Stripe</p> </div> <!-- Order Summary --> <div id="order-summary" class="bg-surface p-8 mb-8"> <h2 class="font-serif text-2xl text-accent mb-6 pb-4 border-b border-dark">Order Summary</h2> <div id="summary-items" class="space-y-4 mb-6"> <!-- Items will be populated by JavaScript --> </div> <div class="flex justify-between items-center pt-6 border-t border-dark"> <span class="text-muted uppercase tracking-wider text-sm">Total</span> <span id="summary-total" class="font-serif text-3xl text-accent">€0.00</span> </div> </div> <!-- Customer Information --> <div class="bg-surface p-8 mb-8"> <h2 class="font-serif text-2xl text-accent mb-6">Customer Information</h2> <form id="checkout-form" class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label class="block text-muted text-sm uppercase tracking-wider mb-2">Your Name (Optional)</label> <input type="text" id="customer-name" placeholder="Enter your name" class="w-full bg-dark border border-dark text-light p-4 focus:border-accent focus:outline-none transition-colors"> </div> </div> </form> <div id="checkout-error" class="hidden mt-6 p-4 bg-red-900/30 border border-red-500/50 text-red-200"></div> </div> <!-- Pickup Information --> <div class="bg-surface/50 border border-accent/30 p-6 mb-8"> <div class="flex items-start gap-4"> <div class="text-2xl">📍</div> <div> <h3 class="font-serif text-xl text-accent mb-2">Pickup Only</h3> <p class="text-light/80 text-sm mb-2">
Orders are for pickup only from our restaurant location.
</p> <p class="text-muted text-sm"> <strong>Address:</strong> Soikkokuja 12, 70780 Kuopio<br> <strong>Preparation time:</strong> Typically 20-30 minutes<br>
You'll receive a notification when your order is ready!
</p> </div> </div> </div> <!-- Checkout Button --> <button id="proceed-checkout" class="w-full py-6 bg-accent text-dark font-sans font-medium uppercase tracking-widest text-lg hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed mb-4">
Proceed to Payment
</button> <!-- Back to Menu --> <div class="text-center"> <a href="/" class="text-muted hover:text-accent transition-colors uppercase tracking-wider text-sm">
← Back to Menu
</a> </div> </div> </div> ` })} `;
}, "C:/Users/WinPc/Desktop/AG/kaskynkka/src/pages/checkout.astro", void 0);

const $$file = "C:/Users/WinPc/Desktop/AG/kaskynkka/src/pages/checkout.astro";
const $$url = "/checkout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
