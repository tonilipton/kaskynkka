import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, d as createAstro } from './astro/server_KOnLKeiO.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = "RAVINTOLA K\xC4SKYNKK\xC4",
    subtitle = "Maukkaasta ruoasta tunnettu ruoka- ja seurusteluravintola",
    backgroundImage = "/images/IMG_3046-1024x682.jpg"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden" data-astro-cid-bbe6dxrz> <!-- Background Image with Overlay --> <div class="absolute inset-0 z-0" data-astro-cid-bbe6dxrz> <img${addAttribute(backgroundImage, "src")} alt="Restaurant ambiance" class="w-full h-full object-cover" onerror="this.style.display='none'" data-astro-cid-bbe6dxrz> <div class="absolute inset-0 bg-black/60" data-astro-cid-bbe6dxrz></div> </div> <!-- Content --> <div class="relative z-10 text-center px-4 max-w-4xl mx-auto" data-astro-cid-bbe6dxrz> <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl text-light tracking-ultra uppercase mb-6" data-astro-cid-bbe6dxrz> ${title} </h1> <p class="font-sans text-lg md:text-xl text-muted tracking-widest uppercase mb-12" data-astro-cid-bbe6dxrz> ${subtitle} </p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-astro-cid-bbe6dxrz> <a href="#menu" class="inline-block px-8 py-4 bg-accent text-dark font-sans font-medium tracking-wider uppercase text-sm hover:bg-accent/90 transition-colors duration-300" data-astro-cid-bbe6dxrz>
View Menu
</a> <a href="#about" class="inline-block px-8 py-4 border border-accent text-accent font-sans font-medium tracking-wider uppercase text-sm hover:bg-accent hover:text-dark transition-colors duration-300" data-astro-cid-bbe6dxrz>
Our Story
</a> </div> </div> <!-- Scroll Indicator --> <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" data-astro-cid-bbe6dxrz> <a href="#menu" class="flex flex-col items-center text-muted hover:text-accent transition-colors duration-300" data-astro-cid-bbe6dxrz> <span class="text-xs uppercase tracking-widest mb-2" data-astro-cid-bbe6dxrz>Scroll</span> <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-bbe6dxrz></path> </svg> </a> </div> </section> `;
}, "C:/Users/WinPc/Desktop/AG/kaskynkka/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$MenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MenuItem;
  const { item } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col mb-8 ${!item.in_stock ? "opacity-40" : ""}`, "class")}${addAttribute(item.id, "data-item-id")}> <!-- Menu Item Header: Title and Price --> <div class="flex justify-between items-baseline border-b border-surface pb-3 mb-3"> <h3 class="font-serif text-2xl text-accent">${item.title}</h3> <span class="font-sans font-light tracking-widest text-light">${item.price.toFixed(2)}€</span> </div> <!-- Description --> ${item.description && renderTemplate`<p class="font-sans text-muted mt-2 italic text-sm">${item.description}</p>`} <!-- Action Row --> <div class="flex justify-between items-center mt-4"> ${!item.in_stock ? renderTemplate`<span class="text-xs uppercase tracking-tighter text-muted">Sold Out</span>` : renderTemplate`<button class="add-to-cart-btn text-xs uppercase tracking-widest text-accent border border-accent px-4 py-2 hover:bg-accent hover:text-dark transition-colors duration-300"${addAttribute(item.id, "data-item-id")}${addAttribute(item.title, "data-item-title")}${addAttribute(item.price, "data-item-price")}>
Add to Order
</button>`} </div> </div> `;
}, "C:/Users/WinPc/Desktop/AG/kaskynkka/src/components/MenuItem.astro", void 0);

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cart-container" class="bg-surface p-6"> <div class="flex justify-between items-center mb-6 pb-4 border-b border-dark"> <h2 class="font-serif text-2xl text-accent">Tilauksesi</h2> <span id="cart-count" class="text-muted text-sm uppercase tracking-wider">0 tuotetta</span> </div> <div id="cart-items" class="min-h-[100px] mb-6"></div> <div class="border-t border-dark pt-6"> <div class="text-right mb-6"> <span class="text-muted text-sm uppercase tracking-wider mr-2">Yhteensä</span> <span id="cart-total" class="font-serif text-3xl text-accent">€0.00</span> </div> <button id="checkout-btn" class="w-full py-4 bg-accent text-dark font-sans font-medium uppercase tracking-widest text-sm hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed mb-3" disabled>
Siirry Kassalle
</button> <button id="clear-cart-btn" class="w-full py-3 border border-muted text-muted font-sans uppercase tracking-widest text-xs hover:border-accent hover:text-accent transition-colors duration-300">
Tyhjennä Kori
</button> </div> </div> `;
}, "C:/Users/WinPc/Desktop/AG/kaskynkka/src/components/Cart.astro", void 0);

export { $$Hero as $, $$MenuItem as a, $$Cart as b };
