export type Locale = "fi" | "en";

// Import translations statically (Vite/tsconfig allowing JSON imports)
import fi from "../../public/locales/fi/translation.json";
import en from "../../public/locales/en/translation.json";

const LANGS: Record<Locale, any> = { fi, en };

export function t(key: string, locale: Locale = "fi"): string {
  const parts = key.split(".");
  let node: any = LANGS[locale];
  for (const part of parts) {
    if (node && typeof node === "object" && part in node) {
      node = node[part];
    } else {
      return key;
    }
  }
  if (typeof node === "string") return node;
  return key;
}
