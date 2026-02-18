// Weekly lunch menu data
// This file can be easily edited to update the weekly lunch menu
// Just update the dates and dishes below

export interface LunchDay {
  dayFi: string;
  dayEn: string;
  date: string;
  dishes: {
    dishFi: string;
    dishEn: string;
  }[];
}

export const WEEKLY_LUNCH_MENU: LunchDay[] = [
  {
    dayFi: "Maanantai",
    dayEn: "Monday",
    date: "17.2.",
    dishes: [
      {
        dishFi: "Possunfilee bearnaisella vl,g",
        dishEn: "Pork tenderloin with béarnaise vl,g",
      },
      {
        dishFi: "Lohiaurajuustopastaa l",
        dishEn: "Salmon pasta with blue cheese l",
      },
    ],
  },
  {
    dayFi: "Tiistai",
    dayEn: "Tuesday",
    date: "18.2.",
    dishes: [
      { dishFi: "Riistakäristys l,g", dishEn: "Game stir-fry l,g" },
      {
        dishFi: "Broilerifilee suppilovahverokastikkeella l,g",
        dishEn: "Chicken fillet with chantarelle sauce l,g",
      },
    ],
  },
  {
    dayFi: "Keskiviikko",
    dayEn: "Wednesday",
    date: "19.2.",
    dishes: [
      {
        dishFi: "Lohta hollandaisella vl,g",
        dishEn: "Salmon with hollandaise vl,g",
      },
      { dishFi: "Pariloitua maksaa l,g", dishEn: "Grilled liver l,g" },
    ],
  },
  {
    dayFi: "Torstai",
    dayEn: "Thursday",
    date: "20.2.",
    dishes: [
      {
        dishFi: "Jauhelihamureke kermakastikkeella l",
        dishEn: "Minced meat patty with cream sauce l",
      },
      { dishFi: "Broileritortillat l,g", dishEn: "Chicken tortillas l,g" },
    ],
  },
  {
    dayFi: "Perjantai",
    dayEn: "Friday",
    date: "21.2.",
    dishes: [
      {
        dishFi: "Possunpihvi dijonkastikkeella l,g",
        dishEn: "Pork steak with Dijon sauce l,g",
      },
      {
        dishFi: "Tonnikalajuustosalaattia ja täytetty patonki l,g",
        dishEn: "Tuna cheese salad and stuffed baguette l,g",
      },
    ],
  },
];

export const CURRENT_WEEK_FI = "16.2.-20.2.2026";
export const CURRENT_WEEK_EN = "16.2.-20.2.2026";

export const DIETARY_INFO = {
  fi: {
    vl: "vähälaktoosinen",
    l: "laktoositon",
    g: "gluteeniton",
  },
  en: {
    vl: "low-lactose",
    l: "lactose-free",
    g: "gluten-free",
  },
};
