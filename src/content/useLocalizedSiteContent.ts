import { useMemo } from 'react';
import { useI18n } from '../i18n/LocaleProvider';
import { getLocalizedSiteContent } from './getLocalizedSite';

export function useLocalizedSiteContent() {
  const { locale } = useI18n();
  return useMemo(() => getLocalizedSiteContent(locale), [locale]);
}
