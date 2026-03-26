import type { Locale } from './locales';
import { pageCopyWorkbookEn, pageCopyWorkbookZh } from './messages/pageCopyWorkbookOverrides';

/** Normalize legacy / Excel variants to keys used in `en.ts` / `siteContent.ts`. */
function normalizeWorkbookKey(key: string): string {
  return key
    .replace(/aboutContent\.ASRA\./gi, 'aboutContent.asra.')
    .replace(/about\.hero\.pillASRA/gi, 'about.hero.pillAsra');
}

/** Resolve workbook `block_key` for structured merges (siteContent, spirit medicine data). */
export function workbookResolve(locale: Locale, key: string): string | undefined {
  const k = normalizeWorkbookKey(key);
  const z = pageCopyWorkbookZh[k] ?? pageCopyWorkbookZh[key];
  const e = pageCopyWorkbookEn[k] ?? pageCopyWorkbookEn[key];
  if (locale === 'zh') {
    if (z !== undefined && z.trim() !== '') return z;
    if (e !== undefined && e.trim() !== '') return e;
    return undefined;
  }
  if (e !== undefined && e.trim() !== '') return e;
  return undefined;
}
