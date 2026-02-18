/* empty css                                */
import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_KOnLKeiO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CLQR0Fxm.mjs';
export { renderers } from '../renderers.mjs';

const $$Test = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ravintola K\xE4skynkk\xE4" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center"> <div class="text-center"> <h1 class="text-4xl font-serif text-accent mb-4">
Tailwind Test
</h1> <p class="text-muted font-sans">
If you see this with gold accent color and dark background, Tailwind is working!
</p> <div class="mt-8 p-4 bg-surface rounded-lg"> <p class="text-light">Surface color test</p> </div> </div> </div> ` })}`;
}, "C:/Users/WinPc/Desktop/AG/kaskynkka/src/pages/test.astro", void 0);

const $$file = "C:/Users/WinPc/Desktop/AG/kaskynkka/src/pages/test.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
