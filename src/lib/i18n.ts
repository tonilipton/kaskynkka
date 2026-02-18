// i18n utility for loading translations
import type { Locale } from "../data/menu";

// Translation type
export type Translations =
  typeof import("../../public/locales/fi/translation.json");

// Cache for translations
const translationsCache: Record<Locale, Translations | null> = {
  fi: null,
  en: null,
};

// Load translations from JSON files
export async function loadTranslations(locale: Locale): Promise<Translations> {
  if (translationsCache[locale]) {
    return translationsCache[locale]!;
  }

  try {
    const module = await import(
      `../../public/locales/${locale}/translation.json`
    );
    translationsCache[locale] = module as unknown as Translations;
    return translationsCache[locale]!;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    // Return empty object if loading fails
    return {} as Translations;
  }
}

// Helper to get translation value by path (e.g., "cart.title")
export function getTranslation(
  translations: Translations,
  path: string,
): string {
  const keys = path.split(".");
  let value: unknown = translations;

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return path; // Return path if not found
    }
  }

  return typeof value === "string" ? value : path;
}

// Current locale from URL
export function getLocaleFromUrl(url: string): Locale {
  return url.startsWith("/en") ? "en" : "fi";
}
