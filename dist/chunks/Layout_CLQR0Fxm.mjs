import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, d as createAstro, e as renderComponent, f as renderSlot, b as renderHead, u as unescapeHTML } from './astro/server_KOnLKeiO.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro$2 = createAstro();
const $$LanguageToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguageToggle;
  const { currentLocale } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const fiPath = currentPath.replace(/^\/en/, "") || "/";
  const enPath = "/en" + currentPath.replace(/^\/en/, "");
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-2 text-sm"> <a${addAttribute(fiPath, "href")}${addAttribute(
    currentLocale === "fi" ? "text-accent font-medium" : "text-muted hover:text-accent transition-colors duration-300",
    "class"
  )} aria-label="Suomi">
FI
</a> <span class="text-muted">|</span> <a${addAttribute(enPath, "href")}${addAttribute(
    currentLocale === "en" ? "text-accent font-medium" : "text-muted hover:text-accent transition-colors duration-300",
    "class"
  )} aria-label="English">
EN
</a> </div>`;
}, "C:/Users/WinPc/Desktop/AG/kaskynkka/src/components/LanguageToggle.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { currentLocale = "fi" } = Astro2.props;
  const navItems = [
    { href: "#services", labelFi: "Palvelut", labelEn: "Services" },
    { href: "#menu", labelFi: "Menu", labelEn: "Menu" },
    { href: "#about", labelFi: "Tarinamme", labelEn: "Our Story" },
    { href: "#hours", labelFi: "Aukioloajat", labelEn: "Hours" },
    { href: "#contact", labelFi: "Yhteystiedot", labelEn: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm border-b border-surface"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-20"> <!-- Logo --> <a href="/" class="flex items-center"> <span class="font-serif text-2xl text-accent tracking-wider">KÄSKYNKKÄ</span> </a> <!-- Desktop Navigation --> <nav class="hidden md:flex items-center gap-8"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-light/80 hover:text-accent transition-colors duration-300 text-sm uppercase tracking-wider"> ${currentLocale === "fi" ? item.labelFi : item.labelEn} </a>`)} ${renderComponent($$result, "LanguageToggle", $$LanguageToggle, { "currentLocale": currentLocale })} </nav> <!-- Mobile Menu Button --> <div class="flex items-center gap-4 md:hidden"> ${renderComponent($$result, "LanguageToggle", $$LanguageToggle, { "currentLocale": currentLocale })} <button id="mobile-menu-btn" class="text-light hover:text-accent transition-colors p-2" aria-label="Toggle menu"> <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden md:hidden bg-dark border-t border-surface"> <div class="px-4 py-6 space-y-4"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block text-light/80 hover:text-accent transition-colors duration-300 text-lg uppercase tracking-wider py-2"> ${currentLocale === "fi" ? item.labelFi : item.labelEn} </a>`)} </div> </div> </header> `;
}, "C:/Users/WinPc/Desktop/AG/kaskynkka/src/components/Navigation.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Ravintola Käskynkkä",
    description = "Ravintola Käskynkkä - Fine dining in Kuopio",
    ogImage = "/images/og-image.jpg",
    canonicalUrl
  } = Astro2.props;
  const currentLocale = Astro2.url.pathname.startsWith("/en") ? "en" : "fi";
  const htmlLang = currentLocale;
  const siteUrl = "https://kaskynkka.net";
  const canonical = canonicalUrl || `${siteUrl}${Astro2.url.pathname}`;
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Ravintola Käskynkkä",
    "description": description,
    "url": siteUrl,
    "telephone": "+358 50 123 4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Soikkokuja 12",
      "addressLocality": "Kuopio",
      "postalCode": "70780",
      "addressCountry": "FI"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 62.8924,
      "longitude": 27.6782
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "11:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "12:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "12:00",
        "closes": "21:00"
      }
    ],
    "servesCuisine": ["Finnish", "Nordic", "European"],
    "priceRange": "€€",
    "image": `${siteUrl}${ogImage}`,
    "acceptsReservations": "True"
  };
  return renderTemplate(_a || (_a = __template(["<html", '> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="keywords" content="ravintola, restaurant, kuopio, finnish cuisine, nordic food, fine dining, käskynkkä"><meta name="author" content="Ravintola Käskynkkä"><meta name="robots" content="index, follow"><title>', '</title><!-- Canonical URL --><link rel="canonical"', '><!-- Alternate Languages --><link rel="alternate" hreflang="fi"', '><link rel="alternate" hreflang="en"', '><link rel="alternate" hreflang="x-default"', '><!-- Open Graph / Facebook --><meta property="og:type" content="restaurant"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale"', '><meta property="og:site_name" content="Ravintola Käskynkkä"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- JSON-LD Structured Data --><script type="application/ld+json">', '</script><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Inter:wght@400;500&display=swap" rel="stylesheet"><!-- Preconnect to Supabase --><link rel="preconnect" href="https://your-supabase-project.supabase.co"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/apple-touch-icon.png">', '</head> <body class="bg-dark text-light font-sans min-h-screen pt-20"> ', " ", " </body></html>"])), addAttribute(htmlLang, "lang"), addAttribute(description, "content"), title, addAttribute(canonical, "href"), addAttribute(`${siteUrl}${Astro2.url.pathname.replace("/en", "")}`, "href"), addAttribute(`${siteUrl}/en${Astro2.url.pathname.replace("/en", "")}`, "href"), addAttribute(siteUrl, "href"), addAttribute(canonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${siteUrl}${ogImage}`, "content"), addAttribute(currentLocale === "fi" ? "fi_FI" : "en_US", "content"), addAttribute(canonical, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${siteUrl}${ogImage}`, "content"), unescapeHTML(JSON.stringify(restaurantSchema)), renderHead(), renderComponent($$result, "Navigation", $$Navigation, { "currentLocale": currentLocale }), renderSlot($$result, $$slots["default"]));
}, "C:/Users/WinPc/Desktop/AG/kaskynkka/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
