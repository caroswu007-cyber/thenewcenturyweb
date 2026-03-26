import type { Locale } from './locales';
import { achievementsReportEn, achievementsReportZh } from './messages/achievementsReport.i18n';
import { messagesEn } from './messages/en';
import { messagesEs } from './messages/es';
import { pageCopyWorkbookEn, pageCopyWorkbookZh } from './messages/pageCopyWorkbookOverrides';
import { messagesZh } from './messages/zh';

const packs: Record<Locale, Record<string, string>> = {
  en: { ...messagesEn, ...achievementsReportEn, ...pageCopyWorkbookEn },
  es: { ...messagesEn, ...messagesEs, ...achievementsReportEn, ...pageCopyWorkbookEn },
  zh: {
    ...messagesEn,
    ...messagesZh,
    ...achievementsReportZh,
    ...pageCopyWorkbookEn,
    ...pageCopyWorkbookZh,
  },
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
