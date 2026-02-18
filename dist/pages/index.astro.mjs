/* empty css                                */
import { c as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_KOnLKeiO.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CLQR0Fxm.mjs';
import { $ as $$Hero, a as $$MenuItem, b as $$Cart } from '../chunks/Cart_BkpHwCfH.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const signatureDishes = [
    {
      id: "1",
      title: "Three-Pepper Steak",
      description: "Beef tenderloin with a signature pepper sauce. Our most popular dish, renowned for generous portions and exceptional flavor.",
      price: 32,
      in_stock: true,
      category_id: "steaks"
    },
    {
      id: "2",
      title: "Hunter's Steak",
      description: "Served with a rich chanterelle mushroom sauce. A Finnish classic with deep, earthy flavors.",
      price: 30,
      in_stock: true,
      category_id: "steaks"
    },
    {
      id: "3",
      title: "Grilled Liver",
      description: "Served with crispy bacon - a local favorite. Traditional Finnish comfort food at its finest.",
      price: 24,
      in_stock: true,
      category_id: "classics"
    },
    {
      id: "4",
      title: "Smoked Salmon",
      description: "Served with remoulade sauce. Fresh, delicate flavors from the Nordic waters.",
      price: 26,
      in_stock: true,
      category_id: "seafood"
    }
  ];
  const lunchInfo = {
    price: 13,
    time: "Mon-Fri 10:00 - 15:00",
    includes: ["Rich salad bar", "Starters", "Drinks", "Bread", "Main course", "Coffee & dessert"]
  };
  const testimonials = [
    {
      text: "Outstanding as a steakhouse. The meat is tender and flavorful. Multiple side options and a massive salad bar are included in the meal price.",
      rating: 5
    },
    {
      text: "The salad selection in the lunch buffet is excellent, and the portion sizes are surprisingly large. You definitely won't leave hungry.",
      rating: 5
    },
    {
      text: "Delicious food and a calm atmosphere even during the busy lunch hours. Highly recommended for meat lovers.",
      rating: 5
    }
  ];
  const openingHours = [
    { day: "Monday - Thursday", hours: "10:00 - 20:00", note: "Kitchen closes at 19:00" },
    { day: "Friday", hours: "10:00 - 20:00", note: "Extended hours for events" },
    { day: "Saturday", hours: "12:00 - 21:00", note: "Kitchen closes at 20:00" },
    { day: "Sunday", hours: "Closed", note: "Private events available" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ravintola K\xE4skynkk\xE4 | Lounas, \xC1 La Carte ja Pitopalvelu Kuopiossa" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})}  ${maybeRenderHead()}<section id="services" class="py-32 px-4 bg-surface"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <h2 class="font-serif text-4xl md:text-5xl text-accent mb-4">Palvelumme</h2> <p class="text-muted font-sans tracking-wider uppercase text-sm">Lounas, Á La Carte ja Pitopalvelu</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Lunch --> <div class="text-center p-8 border border-dark hover:border-accent transition-colors duration-300"> <div class="text-5xl mb-6">🍽️</div> <h3 class="font-serif text-2xl text-light mb-4">Lounasbuffet</h3> <p class="text-muted text-sm mb-4">Arkisin 10:00 - 15:00</p> <p class="text-accent font-serif text-3xl mb-4">€${lunchInfo.price.toFixed(2)}</p> <p class="text-muted/80 text-sm">Sisältää runsaan salaattipöydän, alkuruuan, juomat, leivän, pääruuan, kahvin ja jälkiruuan</p> </div> <!-- A La Carte --> <div class="text-center p-8 border border-dark hover:border-accent transition-colors duration-300"> <div class="text-5xl mb-6">🥩</div> <h3 class="font-serif text-2xl text-light mb-4">Á La Carte</h3> <p class="text-muted text-sm mb-4">Tunnettu runsaista pihviaterioista</p> <p class="text-accent font-serif text-3xl mb-4">Laatu</p> <p class="text-muted/80 text-sm">Korkealaatuiset lihatuotteet ja reilut annoskoot ovat intohimomme</p> </div> <!-- Catering --> <div class="text-center p-8 border border-dark hover:border-accent transition-colors duration-300"> <div class="text-5xl mb-6">🎉</div> <h3 class="font-serif text-2xl text-light mb-4">Pitopalvelu</h3> <p class="text-muted text-sm mb-4">Yksityistilaisuudet & Yritystapahtumat</p> <p class="text-accent font-serif text-3xl mb-4">Täysi</p> <p class="text-muted/80 text-sm">Räätälöidyt menut juhliin ja tilaisuuksiin - anna meidän huolehtia onnistuneesta päivästäsi</p> </div> <!-- Sauna --> <div class="text-center p-8 border border-dark hover:border-accent transition-colors duration-300"> <div class="text-5xl mb-6">🧖</div> <h3 class="font-serif text-2xl text-light mb-4">Sauna & Kabinetti</h3> <p class="text-muted text-sm mb-4">Yksityistilat ryhmille</p> <p class="text-accent font-serif text-3xl mb-4">Varaa</p> <p class="text-muted/80 text-sm">Saunatilat ja kabinetit saatavilla ryhmävarauksiin - täydellinen illanviettoon</p> </div> </div> </div> </section>  <section id="menu" class="py-32 px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <h2 class="font-serif text-4xl md:text-5xl text-accent mb-4">Á La Carte - Suosikkiannoksemme</h2> <p class="text-muted font-sans tracking-wider uppercase text-sm">Tunnettu runsaista pihviaterioista ja korkealaatuisesta lihasta</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Menu Items --> <div class="lg:col-span-2"> <div class="mb-8"> <p class="text-muted text-center mb-8">
Valitse suosikkiannoksesi ja tee tilaus suoraan verkossa. 
              Nouto ravintolasta tai nauti paikan päällä.
</p> </div> <div class="space-y-0"> ${signatureDishes.map((item) => renderTemplate`${renderComponent($$result2, "MenuItem", $$MenuItem, { "item": item })}`)} </div> <div class="mt-12 text-center"> <p class="text-muted text-sm italic">
* Kysy lisää vaihtoehdoista henkilökunnaltamme. Saatavuus voi vaihdella.
</p> </div> </div> <!-- Cart Sidebar --> <aside class="lg:col-span-1"> <div class="sticky top-8"> ${renderComponent($$result2, "Cart", $$Cart, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/WinPc/Desktop/AG/kaskynkka/src/components/Cart.astro", "client:component-export": "default" })} </div> </aside> </div> </div> </section>  <section id="lunch" class="py-32 px-4 bg-surface"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-16"> <h2 class="font-serif text-4xl md:text-5xl text-accent mb-4">Lounasbuffet</h2> <p class="text-muted font-sans tracking-wider uppercase text-sm">Arkisin ${lunchInfo.time}</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div> <div class="text-6xl font-serif text-accent mb-6">€${lunchInfo.price.toFixed(2)}</div> <p class="text-light text-lg mb-6">
Runsas lounasbuffet, joka sisältää kaiken tarvitsemasi täydelliseen lounashetkeen.
</p> <ul class="space-y-3"> ${lunchInfo.includes.map((item) => renderTemplate`<li class="flex items-center text-muted"> <span class="text-accent mr-3">✓</span> ${item} </li>`)} </ul> </div> <div class="text-center"> <div class="bg-dark p-8 inline-block"> <p class="text-muted uppercase tracking-wider text-sm mb-2">Aukioloajat</p> <p class="text-light text-2xl font-serif">Ma-Pe</p> <p class="text-accent text-4xl font-serif my-4">10:00 - 15:00</p> <p class="text-muted text-sm">Keittiö sulkeutuu klo 14:00</p> </div> </div> </div> </div> </section>  <section id="testimonials" class="py-32 px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <h2 class="font-serif text-4xl md:text-5xl text-accent mb-4">Asiakaspalautteet</h2> <p class="text-muted font-sans tracking-wider uppercase text-sm">Mitä asiakkaamme sanovat</p> <div class="flex justify-center items-center mt-4"> <span class="text-accent text-2xl mr-2">★★★★★</span> <span class="text-light font-serif text-xl">4.5 / 5</span> </div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${testimonials.map((testimonial, index) => renderTemplate`<div class="bg-surface p-8 border border-dark"> <div class="text-accent text-xl mb-4"> ${"\u2605".repeat(testimonial.rating)} </div> <p class="text-light/80 italic mb-6 leading-relaxed">
"${testimonial.text}"
</p> <div class="text-muted text-sm uppercase tracking-wider">
Asiakas ${index + 1} </div> </div>`)} </div> </div> </section>  <section id="about" class="py-32 px-4 bg-surface"> <div class="max-w-4xl mx-auto text-center"> <h2 class="font-serif text-4xl md:text-5xl text-accent mb-8">Tarinamme</h2> <p class="text-light/80 font-sans text-lg leading-relaxed mb-8">
Käskynkkä – yhtä aikaa moderni ja perinteinen, rento ja tyylikäs. 
        Maukkaasta ruoasta tunnettu ruoka- ja seurusteluravintola Kuopion Jynkän kaupunginosassa.
</p> <p class="text-light/80 font-sans text-lg leading-relaxed mb-8">
Hyvä ruoka rakentuu kokemuksesta ja laadukkaista raaka-aineista. 
        Maistuvaa ruokaa meiltä saikin niin lounasaikaan kuin Á la Carte -listaltamme reiluina annoksina. 
        Pitopalvelumme sitä vastoin pitää huolen onnistuneesta juhlastasi tai muusta tilaisuudestasi.
</p> <p class="text-light/80 font-sans text-lg leading-relaxed mb-12">
Mutta mitä olisikaan hyvä ruoka ilman oikeanlaista tunnelmaa? 
        Viihtyisän fiiliksen meille luo modernit tilamme ja ammattitaitoinen, palveleva henkilökuntamme.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"> <div class="text-center"> <div class="text-4xl font-serif text-accent mb-2">4.5★</div> <div class="text-muted text-sm uppercase tracking-wider">Google Arvostelu</div> </div> <div class="text-center"> <div class="text-4xl font-serif text-accent mb-2">Jynkkä</div> <div class="text-muted text-sm uppercase tracking-wider">Kuopio</div> </div> <div class="text-center"> <div class="text-4xl font-serif text-accent mb-2">Perinteet</div> <div class="text-muted text-sm uppercase tracking-wider">& Moderni Tyyli</div> </div> </div> </div> </section>  <section id="hours" class="py-32 px-4"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-16"> <h2 class="font-serif text-4xl md:text-5xl text-accent mb-4">Aukioloajat</h2> <p class="text-muted font-sans tracking-wider uppercase text-sm">Tervetuloa!</p> </div> <div class="bg-surface p-8 md:p-12"> <div class="space-y-6"> ${openingHours.map((schedule) => renderTemplate`<div class="flex flex-col md:flex-row md:justify-between md:items-center py-4 border-b border-dark last:border-0"> <div class="mb-2 md:mb-0"> <span class="text-light font-serif text-xl">${schedule.day}</span> </div> <div class="text-right"> <span class="text-accent font-sans text-lg block">${schedule.hours}</span> <span class="text-muted text-sm">${schedule.note}</span> </div> </div>`)} </div> <div class="mt-8 pt-8 border-t border-dark text-center"> <p class="text-muted text-sm">
Yritys: Ravintola Käskynkkä | Y-tunnus: 0648221-5 | Omistaja: Veli Markkanen
</p> </div> </div> </div> </section>  <section id="catering" class="py-32 px-4 bg-surface"> <div class="max-w-4xl mx-auto text-center"> <h2 class="font-serif text-4xl md:text-5xl text-accent mb-6">Järjestätkö Juhlat?</h2> <p class="text-light/80 font-sans text-lg leading-relaxed mb-8">
Pitopalvelumme pitää huolen onnistuneesta juhlastasi tai muusta tilaisuudestasi. 
        Räätälöidyt menut, ammattitaitoinen palvelu ja viihtyisät tilat – 
        anna meidän tehdä päivästäsi ikimuistoinen.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="tel:+358173613411" class="inline-block px-8 py-4 bg-accent text-dark font-sans font-medium tracking-wider uppercase text-sm hover:bg-accent/90 transition-colors duration-300">
Soita: 017 361 3411
</a> <a href="mailto:palaute@kaskynkka.net" class="inline-block px-8 py-4 border border-accent text-accent font-sans font-medium tracking-wider uppercase text-sm hover:bg-accent hover:text-dark transition-colors duration-300">
Sähköposti
</a> </div> </div> </section>  <footer class="py-16 px-4 border-t border-surface"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left"> <div class="md:col-span-2"> <h3 class="font-serif text-2xl text-accent mb-4">Ravintola Käskynkkä</h3> <p class="text-muted text-sm mb-4">
Maukkaasta ruoasta tunnettu ruoka- ja seurusteluravintola Kuopion Jynkässä. 
            Lounas, Á La Carte ja pitopalvelu.
</p> <p class="text-muted/60 text-xs">
Y-tunnus: 0648221-5 | Omistaja: Veli Markkanen
</p> </div> <div> <h4 class="font-sans text-light uppercase tracking-wider text-sm mb-4">Yhteystiedot</h4> <p class="text-muted text-sm">Soikkokuja 12</p> <p class="text-muted text-sm">70780 Kuopio</p> <p class="text-muted text-sm mt-2">📞 017 361 3411</p> <p class="text-muted text-sm">✉️ palaute@kaskynkka.net</p> </div> <div> <h4 class="font-sans text-light uppercase tracking-wider text-sm mb-4">Aukioloajat</h4> <p class="text-muted text-sm">Ma-To: 10-20</p> <p class="text-muted text-sm">Pe: 10-20</p> <p class="text-muted text-sm">La: 12-21</p> <p class="text-muted text-sm">Su: Suljettu</p> </div> <div> <h4 class="font-sans text-light uppercase tracking-wider text-sm mb-4">Seuraa meitä</h4> <a href="https://www.facebook.com/ravintolakaskynkka" target="_blank" rel="noopener noreferrer" class="text-muted hover:text-accent transition-colors duration-300 flex items-center gap-2"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path> </svg>
Facebook
</a> </div> </div> <div class="mt-12 pt-8 border-t border-surface text-center"> <p class="text-muted/60 text-sm">
© 2026 Ravintola Käskynkkä. Kaikki oikeudet pidätetään. |
<a href="https://kaskynkka.net" class="hover:text-accent transition-colors">kaskynkka.net</a> </p> </div> </div> </footer> ` })} `;
}, "C:/Users/WinPc/Desktop/AG/kaskynkka/src/pages/index.astro", void 0);

const $$file = "C:/Users/WinPc/Desktop/AG/kaskynkka/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
