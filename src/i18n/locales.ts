export type Locale = 'en' | 'es' | 'zh';

export const STORAGE_KEY = 'asra-locale';

export const LOCALE_OPTIONS: { code: Locale; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'zh', label: '中文' },
];

export function isLocale(v: string): v is Locale {
  return v === 'en' || v === 'es' || v === 'zh';
}
