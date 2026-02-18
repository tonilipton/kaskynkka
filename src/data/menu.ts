// Menu data for Restaurant Käskynkkä
// Contains all menu items with Finnish and English translations

export type Locale = "fi" | "en";

export interface MenuItem {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  price: number;
  in_stock: boolean;
  category_id: string;
}

export interface Category {
  id: string;
  label: Record<Locale, string>;
}

// Fantasia pizza toppings
export const FANTASIA_TOPPINGS: Record<
  Locale,
  { value: string; label: string }[]
> = {
  fi: [
    { value: "ananas", label: "Ananas" },
    { value: "anjovis", label: "Anjovis" },
    { value: "aurajuusto", label: "Aurajuusto" },
    { value: "bearnaisekastike", label: "Bearnaisekastike" },
    { value: "broileri", label: "Broileri" },
    { value: "salaattijuusto", label: "Salaattijuusto" },
    { value: "herkkusieni", label: "Herkkusieni" },
    { value: "hillosipuli", label: "Hillosipuli" },
    { value: "jauheliha", label: "Jauheliha" },
    { value: "jalopeno", label: "Jalopeño" },
    { value: "kananmuna", label: "Kananmuna" },
    { value: "kapris", label: "Kapris" },
    { value: "katkarapu", label: "Katkarapu" },
    { value: "kebab", label: "Kebab" },
    { value: "kinkku", label: "Kinkku" },
    { value: "kylmäsavulohi", label: "Kylmäsavulohi" },
    { value: "majoneesi", label: "Majoneesi" },
    { value: "maustekurkku", label: "Maustekurkku" },
    { value: "oliivi", label: "Oliivi" },
    { value: "paholaisen_hillo", label: "Paholaisen hillo" },
    { value: "paprika", label: "Paprika" },
    { value: "pekoni", label: "Pekoni" },
    { value: "pepperoni", label: "Pepperoni" },
    { value: "persikka", label: "Persikka" },
    { value: "savupororouhe", label: "Savupororouhe" },
    { value: "meetvursti", label: "Meetvursti" },
    { value: "sipuli", label: "Sipuli" },
    { value: "parsa", label: "Parsa" },
    { value: "tomaatti", label: "Tomaatti" },
    { value: "tonnikala", label: "Tonnikala" },
    { value: "valkosipuli", label: "Valkosipuli" },
  ],
  en: [
    { value: "ananas", label: "Pineapple" },
    { value: "anjovis", label: "Anchovy" },
    { value: "aurajuusto", label: "Blue cheese" },
    { value: "bearnaisekastike", label: "Béarnaise sauce" },
    { value: "broileri", label: "Chicken" },
    { value: "salaattijuusto", label: "Feta cheese" },
    { value: "herkkusieni", label: "Mushroom" },
    { value: "hillosipuli", label: "Pickled onion" },
    { value: "jauheliha", label: "Ground beef" },
    { value: "jalopeno", label: "Jalapeño" },
    { value: "kananmuna", label: "Boiled egg" },
    { value: "kapris", label: "Capers" },
    { value: "katkarapu", label: "Shrimp" },
    { value: "kebab", label: "Kebab" },
    { value: "kinkku", label: "Ham" },
    { value: "kylmäsavulohi", label: "Cold-smoked salmon" },
    { value: "majoneesi", label: "Mayonnaise" },
    { value: "maustekurkku", label: "Pickled cucumber" },
    { value: "oliivi", label: "Olive" },
    { value: "paholaisen_hillo", label: "Devil's jam" },
    { value: "paprika", label: "Bell pepper" },
    { value: "pekoni", label: "Bacon" },
    { value: "pepperoni", label: "Pepperoni" },
    { value: "persikka", label: "Peach" },
    { value: "savupororouhe", label: "Smoked reindeer" },
    { value: "meetvursti", label: "Salami" },
    { value: "sipuli", label: "Onion" },
    { value: "parsa", label: "Asparagus" },
    { value: "tomaatti", label: "Tomato" },
    { value: "tonnikala", label: "Tuna" },
    { value: "valkosipuli", label: "Garlic" },
  ],
};

export const CATEGORIES: Category[] = [
  { id: "salaatit", label: { fi: "Salaatit", en: "Salads" } },
  { id: "lampimat", label: { fi: "Lämpimät Ruoat", en: "Warm Meals" } },
  { id: "hampurilaiset", label: { fi: "Hampurilaiset", en: "Burgers" } },
  { id: "pizzat", label: { fi: "Pizzat", en: "Pizzas" } },
  { id: "jalkiruoat", label: { fi: "Jälkiruoat", en: "Desserts" } },
  { id: "lapsille", label: { fi: "Lapsille", en: "For Children" } },
];

export const MENU_ITEMS: MenuItem[] = [
  // Salaatit (Salads)
  {
    id: "salaatti-1",
    title: { fi: "Hedelmäinen Broilerisalaatti", en: "Fruit Chicken Salad" },
    description: {
      fi: "Raikas broilerisalaatti hedelmillä. Sopii erinomaisesti kevyeksi ateriaksi tai alkuruoaksi.",
      en: "Fresh chicken salad with fruits. Perfect as a light meal or starter.",
    },
    price: 19.0,
    in_stock: true,
    category_id: "salaatit",
  },
  {
    id: "salaatti-2",
    title: { fi: "Lohi-Caesar-Salaatti", en: "Salmon Caesar Salad" },
    description: {
      fi: "Vihreää salaattia, tomaattia, punasipulia, lämminsavulohta ja Caesar-kastiketta.",
      en: "Green salad, tomato, red onion, warm-smoked salmon and Caesar dressing.",
    },
    price: 20.0,
    in_stock: true,
    category_id: "salaatit",
  },

  // Lämpimät Ruoat (Warm Meals)
  {
    id: "lampima-1",
    title: { fi: "Kolmen Pippurin Pihvi", en: "Three-Pepper Steak" },
    description: {
      fi: "160g naudan sisäfileepihvi kermaisella viherpippurikastikkeella. Talon suosikki!",
      en: "160g beef tenderloin steak with creamy green pepper sauce. House favorite!",
    },
    price: 36.0,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-2",
    title: { fi: "Metsästäjänpihvi", en: "Hunter's Steak" },
    description: {
      fi: "160g viipaloitua naudan sisäfileetä täyteläisellä kanttarellikastikkeella. Suomalainen klassikko!",
      en: "160g sliced beef tenderloin with rich chanterelle mushroom sauce. Finnish classic!",
    },
    price: 33.0,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-3",
    title: { fi: "Black & White -Pihvi", en: "Black & White Steak" },
    description: {
      fi: "200g naudan ulkofileepihvi madeira- ja bearnaisekastikkeella.",
      en: "200g beef sirloin steak with madeira and béarnaise sauces.",
    },
    price: 31.0,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-4",
    title: { fi: "Talon Pihvi", en: "House Steak" },
    description: {
      fi: "200g naudan ulkofileepihvi kanttarellikastikkeella.",
      en: "200g beef sirloin steak with chanterelle mushroom sauce.",
    },
    price: 31.0,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-5",
    title: { fi: "Grillipihvi", en: "Grill Steak" },
    description: {
      fi: "200g naudan ulkofileepihvi valkosipuliyrttivoilla.",
      en: "200g beef sirloin steak with garlic herb butter.",
    },
    price: 30.5,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-6",
    title: { fi: "Jättilehtipihvi", en: "Big Leaf Steak" },
    description: {
      fi: "160g ohut naudan ulkofileepihvi grillimaustevoilla.",
      en: "160g thin beef sirloin steak with grill spice butter.",
    },
    price: 29.0,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-7",
    title: { fi: "Bearnaisepihvi", en: "Béarnaise Steak" },
    description: {
      fi: "160g porsaan ulkofileepihvi bearnaisekastikkeella.",
      en: "160g pork sirloin steak with béarnaise sauce.",
    },
    price: 25.0,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-8",
    title: { fi: "Porsaanselykset Dijonkastike", en: "Pork Medallions Dijon" },
    description: {
      fi: "2x80g porsaan ulkofileepihvit dijon-sinappikastikkeella.",
      en: "2x80g pork sirloin medallions with Dijon mustard sauce.",
    },
    price: 25.0,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-9",
    title: { fi: "Pariloitua Maksaa", en: "Grilled Liver" },
    description: {
      fi: "Pariloitua maksaa, rapeaa pekonia, puolukoita ja kermakastiketta.",
      en: "Grilled liver, crispy bacon, lingonberries and cream sauce.",
    },
    price: 25.0,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-10",
    title: {
      fi: "Aurajuusto-Persikkakuorrutettua Broilerinfileetä",
      en: "Blue Cheese Peach Chicken",
    },
    description: {
      fi: "Broilerin rintafileetä aurajuusto-persikkakuorrutteella.",
      en: "Chicken breast with blue cheese and peach crust.",
    },
    price: 25.5,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-11",
    title: {
      fi: "Broileria ja Mustaherukka-Portviinikastiketta",
      en: "Chicken Blackcurrant Port Sauce",
    },
    description: {
      fi: "Broilerin rintafileetä mustaherukka-portviinikastikkeella.",
      en: "Chicken breast with blackcurrant port wine sauce.",
    },
    price: 25.5,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-12",
    title: { fi: "Paistetut Muikut", en: "Fried Vendace" },
    description: {
      fi: "Paistettuja muikkuja – tuoretta järvikalaa kotimaan vesiltä.",
      en: "Fried vendace - fresh lake fish from Finnish waters.",
    },
    price: 25.0,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-13",
    title: { fi: "Savustettua Lohta", en: "Smoked Salmon" },
    description: {
      fi: "160g savulohifilee remoulade-kastikkeella.",
      en: "160g smoked salmon fillet with remoulade sauce.",
    },
    price: 29.5,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-14",
    title: {
      fi: "Gratinoitu Espanjalainen Kasvispaistos",
      en: "Gratinated Spanish Vegetable Bake",
    },
    description: {
      fi: "Espanjalainen kasvispaistos, jossa grillattuja vihanneksia, fetajuustokuutioita ja bearnaisekastiketta.",
      en: "Spanish vegetable bake with grilled vegetables, feta cheese cubes and béarnaise sauce.",
    },
    price: 21.5,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-15",
    title: { fi: "Välimeren Kanaleipä", en: "Mediterranean Chicken Sandwich" },
    description: {
      fi: "Valkoista leipää broilerin rintafileellä ja välimerellisellä majoneesilla.",
      en: "White bread with chicken breast and Mediterranean mayonnaise.",
    },
    price: 25.0,
    in_stock: true,
    category_id: "lampimat",
  },
  {
    id: "lampima-16",
    title: { fi: "Oskarin Leipä", en: "Oscar's Bread" },
    description: {
      fi: "Valkoista leipää naudan ulkofileellä, choron-kastikkeella, katkaravuilla ja parsalla.",
      en: "White bread with beef sirloin, choron sauce, shrimp and asparagus.",
    },
    price: 29.5,
    in_stock: true,
    category_id: "lampimat",
  },

  // Hampurilaiset (Burgers)
  {
    id: "burger-1",
    title: { fi: "Hampurilainen", en: "Hamburger" },
    description: {
      fi: "Nautapihvi, salaattia ja majoneesia. Sisältää ranskalaiset perunat.",
      en: "Beef patty, lettuce and mayonnaise. Includes French fries.",
    },
    price: 14.0,
    in_stock: true,
    category_id: "hampurilaiset",
  },
  {
    id: "burger-2",
    title: { fi: "Juustohampurilainen", en: "Cheeseburger" },
    description: {
      fi: "Nautapihvi, juustoa, salaattia ja majoneesia. Sisältää ranskalaiset perunat.",
      en: "Beef patty, cheese, lettuce and mayonnaise. Includes French fries.",
    },
    price: 14.7,
    in_stock: true,
    category_id: "hampurilaiset",
  },
  {
    id: "burger-3",
    title: { fi: "Ananashampurilainen", en: "Pineapple Burger" },
    description: {
      fi: "Nautapihvi, ananasrengas, salaattia ja majoneesia. Sisältää ranskalaiset perunat.",
      en: "Beef patty, pineapple ring, lettuce and mayonnaise. Includes French fries.",
    },
    price: 14.7,
    in_stock: true,
    category_id: "hampurilaiset",
  },
  {
    id: "burger-4",
    title: { fi: "Munahampurilainen", en: "Egg Burger" },
    description: {
      fi: "Nautapihvi, paistettu kananmuna, salaattia ja majoneesia. Sisältää ranskalaiset perunat.",
      en: "Beef patty, fried egg, lettuce and mayonnaise. Includes French fries.",
    },
    price: 14.7,
    in_stock: true,
    category_id: "hampurilaiset",
  },
  {
    id: "burger-5",
    title: { fi: "Special-Hampurilainen", en: "Special Burger" },
    description: {
      fi: "Kaksi nautapihviä, pekonia, kananmunaa, juustoa ja ananasrengas. Sisältää ranskalaiset perunat.",
      en: "Two beef patties, bacon, egg, cheese and pineapple ring. Includes French fries.",
    },
    price: 20.0,
    in_stock: true,
    category_id: "hampurilaiset",
  },

  // Pizzat (Pizzas)
  {
    id: "pizza-1",
    title: { fi: "Tropicana", en: "Tropicana" },
    description: {
      fi: "Kinkkua ja ananasta.",
      en: "Ham and pineapple.",
    },
    price: 14.0,
    in_stock: true,
    category_id: "pizzat",
  },
  {
    id: "pizza-2",
    title: { fi: "Bolognese", en: "Bolognese" },
    description: {
      fi: "Jauhelihaa.",
      en: "Ground beef.",
    },
    price: 13.3,
    in_stock: true,
    category_id: "pizzat",
  },
  {
    id: "pizza-3",
    title: { fi: "Quatro Stagioni", en: "Quatro Stagioni" },
    description: {
      fi: "Kinkkua, herkkusieniä, katkarapuja ja tonnikalaa.",
      en: "Ham, mushrooms, shrimp and tuna.",
    },
    price: 14.8,
    in_stock: true,
    category_id: "pizzat",
  },
  {
    id: "pizza-4",
    title: { fi: "Vegetariana", en: "Vegetariana" },
    description: {
      fi: "Paprikaa, parsaa, sipulia, tomaattia ja herkkusieniä.",
      en: "Bell pepper, asparagus, onion, tomato and mushrooms.",
    },
    price: 14.8,
    in_stock: true,
    category_id: "pizzat",
  },
  {
    id: "pizza-5",
    title: { fi: "Meetvurstipizza", en: "Salami Pizza" },
    description: {
      fi: "Salamia.",
      en: "Salami.",
    },
    price: 14.0,
    in_stock: true,
    category_id: "pizzat",
  },
  {
    id: "pizza-6",
    title: { fi: "Opera", en: "Opera" },
    description: {
      fi: "Kinkkua ja tonnikalaa.",
      en: "Ham and tuna.",
    },
    price: 14.0,
    in_stock: true,
    category_id: "pizzat",
  },
  {
    id: "pizza-7",
    title: { fi: "Opera Special", en: "Opera Special" },
    description: {
      fi: "Kinkkua, tonnikalaa ja salamia.",
      en: "Ham, tuna and salami.",
    },
    price: 14.8,
    in_stock: true,
    category_id: "pizzat",
  },
  {
    id: "pizza-8",
    title: { fi: "Käskynkkä Special", en: "Käskynkkä Special" },
    description: {
      fi: "Broileria, persikkaa, aurajuustoa ja bearnaisekastiketta.",
      en: "Chicken, peach, blue cheese and béarnaise sauce.",
    },
    price: 14.8,
    in_stock: true,
    category_id: "pizzat",
  },
  {
    id: "pizza-9",
    title: { fi: "Fantasia", en: "Fantasia" },
    description: {
      fi: "Valitse neljä vapaavalintaista täytettä!",
      en: "Choose four toppings of your choice!",
    },
    price: 14.8,
    in_stock: true,
    category_id: "pizzat",
  },

  // Jälkiruoat (Desserts)
  {
    id: "jalkiruoka-1",
    title: {
      fi: "Mango-Melonijäätelöä ja Suklaakastiketta",
      en: "Mango Melon Ice Cream",
    },
    description: {
      fi: "Mango-melonijäätelöä suklaakastikkeella.",
      en: "Mango melon ice cream with chocolate sauce.",
    },
    price: 9.0,
    in_stock: true,
    category_id: "jalkiruoat",
  },
  {
    id: "jalkiruoka-2",
    title: { fi: "Mustikkakukkoa ja Vaniljajäätelöä", en: "Blueberry Pie" },
    description: {
      fi: "Mustikkakukkoa ja vaniljajäätelöä.",
      en: "Blueberry pie with vanilla ice cream.",
    },
    price: 10.0,
    in_stock: true,
    category_id: "jalkiruoat",
  },
  {
    id: "jalkiruoka-3",
    title: { fi: "Ohukaiset", en: "Finnish Pancakes" },
    description: {
      fi: "Pannullinen muurinpohjalettuja vadelmahillon ja kermavaahdon kera.",
      en: "Pan of traditional Finnish pancakes with raspberry jam and whipped cream.",
    },
    price: 10.5,
    in_stock: true,
    category_id: "jalkiruoat",
  },

  // Lapsille (For Children)
  {
    id: "lapsi-1",
    title: { fi: "Maistuva Jauhelihapihvi", en: "Tasty Meat Patty" },
    description: {
      fi: "Maistuva jauhelihapihvi bearnaisekastikkeella ja ranskalaisilla perunoilla.",
      en: "Tasty meat patty with béarnaise sauce and French fries.",
    },
    price: 10.8,
    in_stock: true,
    category_id: "lapsille",
  },
  {
    id: "lapsi-2",
    title: { fi: "Äidin Lihapullat", en: "Mom's Meatballs" },
    description: {
      fi: "Äidin lihapullat kermakastikkeella ja perunamuusilla.",
      en: "Mom's meatballs with cream sauce and mashed potatoes.",
    },
    price: 11.0,
    in_stock: true,
    category_id: "lapsille",
  },
  {
    id: "lapsi-3",
    title: { fi: "Herkkupihvi", en: "Delight Steak" },
    description: {
      fi: "Porsaanpihvi ananasrenkaalla ja perunamuusilla.",
      en: "Pork steak with pineapple ring and mashed potatoes.",
    },
    price: 13.0,
    in_stock: true,
    category_id: "lapsille",
  },
  {
    id: "lapsi-4",
    title: { fi: "Nauravat Nakit", en: "Happy Hotdogs" },
    description: {
      fi: "Nauravat nakit majoneesilla ja ranskalaisilla perunoilla.",
      en: "Happy hotdogs with mayonnaise and French fries.",
    },
    price: 10.5,
    in_stock: true,
    category_id: "lapsille",
  },
  {
    id: "lapsi-5",
    title: { fi: "Iso Lehtipihvi", en: "Big Leaf Steak" },
    description: {
      fi: "Iso lehtipihvi maustevoilla ja ranskalaisilla perunoilla.",
      en: "Big leaf steak with spice butter and French fries.",
    },
    price: 15.3,
    in_stock: true,
    category_id: "lapsille",
  },
];

// Lunch info
export const LUNCH_INFO = {
  price: 13.0,
  time: { fi: "Ma-Pe 10:00 - 15:00", en: "Mon-Fri 10:00 - 15:00" },
  includes: {
    fi: [
      "Runsas salaattipöytä",
      "Alkuruoka",
      "Juomat",
      "Leipä",
      "Pääruoka",
      "Kahvi & jälkiruoka",
    ],
    en: [
      "Rich salad bar",
      "Starters",
      "Drinks",
      "Bread",
      "Main course",
      "Coffee & dessert",
    ],
  },
};

// Testimonials
export const TESTIMONIALS = {
  fi: [
    {
      text: "Erinomainen pihviravintola. Liha on mureaa ja maukasta. Aterian hintaan sisältyy useita lisukevaihtoehtoja sekä runsas salaattipöytä.",
      rating: 5,
    },
    {
      text: "Lounasbuffetin salaattivalikoima on erinomainen, ja annoskoot ovat yllättävän suuria. Täältä ei todellakaan tarvitse lähteä nälkäisenä.",
      rating: 5,
    },
    {
      text: "Herkullista ruokaa ja rauhallinen tunnelma jopa kiireisinä lounasaikoina. Lämmin suositus lihan ystäville.",
      rating: 5,
    },
  ],
  en: [
    {
      text: "Outstanding as a steakhouse. The meat is tender and flavorful. Multiple side options and a massive salad bar are included in the meal price.",
      rating: 5,
    },
    {
      text: "The salad selection in the lunch buffet is excellent, and the portion sizes are surprisingly large. You definitely won't leave hungry.",
      rating: 5,
    },
    {
      text: "Delicious food and a calm atmosphere even during the busy lunch hours. Highly recommended for meat lovers.",
      rating: 5,
    },
  ],
};

// Opening hours
export const OPENING_HOURS = {
  fi: [
    {
      day: "Maanantai - Torstai",
      hours: "10:00 - 20:00",
      note: "Keittiö sulkeutuu klo 19:00",
    },
    {
      day: "Perjantai",
      hours: "10:00 - 21:00",
      note: "Keittiö sulkeutuu klo 20:00",
    },
    {
      day: "Lauantai",
      hours: "12:00 - 21:00",
      note: "Keittiö sulkeutuu klo 20:00",
    },
    {
      day: "Sunnuntai",
      hours: "Suljettu",
      note: "Yksityistilaisuudet mahdollisia",
    },
  ],
  en: [
    {
      day: "Monday - Thursday",
      hours: "10:00 - 20:00",
      note: "Kitchen closes at 19:00",
    },
    { day: "Friday", hours: "10:00 - 21:00", note: "Kitchen closes at 20:00" },
    {
      day: "Saturday",
      hours: "12:00 - 21:00",
      note: "Kitchen closes at 20:00",
    },
    { day: "Sunday", hours: "Closed", note: "Private events available" },
  ],
};

// Helper functions
export function getMenuItemsByCategory(categoryId: string): MenuItem[] {
  return MENU_ITEMS.filter((item) => item.category_id === categoryId);
}

export function getMenuItem(id: string): MenuItem | undefined {
  return MENU_ITEMS.find((item) => item.id === id);
}

export function isFantasiaPizza(itemId: string): boolean {
  return itemId === "pizza-9";
}
