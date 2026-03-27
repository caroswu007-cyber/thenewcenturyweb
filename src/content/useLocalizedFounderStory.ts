import { useMemo } from 'react';
import { useI18n } from '../i18n/LocaleProvider';
import {
  getLocalizedFounderIllustrations,
  getLocalizedFounderStoryPage,
  getLocalizedFounderStorySurfaceCopy,
  getLocalizedFounderTimeline,
} from './getLocalizedFounderStory';

export function useLocalizedFounderStory() {
  const { locale } = useI18n();
  return useMemo(
    () => ({
      surface: getLocalizedFounderStorySurfaceCopy(locale),
      page: getLocalizedFounderStoryPage(locale),
      timeline: getLocalizedFounderTimeline(locale),
      illustrations: getLocalizedFounderIllustrations(locale),
    }),
    [locale],
  );
}
