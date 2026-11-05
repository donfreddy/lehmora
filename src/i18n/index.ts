import { en } from "./en";
import { fr, type Dict } from "./fr";

export type Lang = "fr" | "en";
export type { Dict };

/** Keys whose values are code or URLs and must stay byte-for-byte. */
const VERBATIM_KEYS = new Set(["code", "href", "switchHref", "ogImage"]);

/**
 * Typographic pass over a dictionary:
 * - typographic apostrophe in both languages;
 * - French only: narrow no-break space (U+202F) before ? ! ; and
 *   no-break space (U+00A0) before : and inside « », so punctuation never
 *   wraps onto a line of its own.
 */
function typeset<T>(value: T, lang: Lang, key?: string): T {
  if (typeof value === "string") {
    if (key && VERBATIM_KEYS.has(key)) return value;
    let text = value.replace(/'/g, "’");
    if (lang === "fr") {
      text = text
        .replace(/ ([?!;])/g, " $1")
        .replace(/ ([:»])/g, " $1")
        .replace(/« /g, "« ");
    }
    return text as T;
  }
  if (Array.isArray(value)) {
    return value.map((entry) => typeset(entry, lang, key)) as T;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([entryKey, entry]) => [entryKey, typeset(entry, lang, entryKey)]),
    ) as T;
  }
  return value;
}

const dictionaries: Record<Lang, Dict> = {
  fr: typeset(fr, "fr"),
  en: typeset(en, "en"),
};

export function getDict(lang: Lang): Dict {
  return dictionaries[lang];
}

/** Replace {placeholders} in a dictionary string. */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

export function formatAmount(lang: Lang, amount: number): string {
  return new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-US").format(amount);
}

export function formatDay(lang: Lang, isoDate: string): string {
  return new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
