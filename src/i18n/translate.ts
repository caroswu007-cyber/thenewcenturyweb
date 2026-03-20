import type { Locale } from './locales';
import { messagesEn } from './messages/en';
import { messagesZh } from './messages/zh';
import { messagesJa } from './messages/ja';

const packs: Record<Locale, Record<string, string>> = {
  en: messagesEn,
  zh: { ...messagesEn, ...messagesZh },
  ja: { ...messagesEn, ...messagesJa },
};

export function translate(locale: Locale, key: string): string {
  return packs[locale][key] ?? messagesEn[key] ?? key;
}

export function translateFormat(
  locale: Locale,
  key: string,
  vars: Record<string, string | number>,
): string {
  let s = translate(locale, key);
  for (const [k, v] of Object.entries(vars)) {
    s = s.replaceAll(`{{${k}}}`, String(v));
  }
  return s;
}
