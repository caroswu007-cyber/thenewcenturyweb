export type Locale = 'en' | 'zh' | 'ja';

export const STORAGE_KEY = 'asra-locale';

export const LOCALE_OPTIONS: { code: Locale; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
];

export function isLocale(v: string): v is Locale {
  return v === 'en' || v === 'zh' || v === 'ja';
}
