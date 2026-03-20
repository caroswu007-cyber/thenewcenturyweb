import type { Locale } from '../i18n/locales';
import { aboutContent, type AboutPageContent } from './siteContent';
import { aboutContentZh } from './aboutContent.zh';

export function getAboutContent(locale: Locale): AboutPageContent {
  return locale === 'zh' ? aboutContentZh : aboutContent;
}
