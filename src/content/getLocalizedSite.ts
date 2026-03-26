import type { Locale } from '../i18n/locales';
import { workbookResolve } from '../i18n/workbookStrings';
import { siteContent, type RecordOfSoulContent } from './siteContent';

function mergeRecordOfSoul(base: RecordOfSoulContent, locale: Locale): RecordOfSoulContent {
  const w = (k: string) => workbookResolve(locale, k);
  return {
    ...base,
    title: w('siteContent.recordOfSoul.title') ?? base.title,
    description: w('siteContent.recordOfSoul.description') ?? base.description,
    note: w('siteContent.recordOfSoul.note') ?? base.note,
    episodesCount: w('siteContent.recordOfSoul.episodesCount') ?? base.episodesCount,
    minutes: w('siteContent.recordOfSoul.minutes') ?? base.minutes,
    timeline: base.timeline.map((ep, i) => {
      const kf = w(`recordOfSoul.timeline[${i}].keyFeatures`);
      return {
        ...ep,
        fileNumber: w(`recordOfSoul.timeline[${i}].fileNumber`) ?? ep.fileNumber,
        title: w(`recordOfSoul.timeline[${i}].title`) ?? ep.title,
        abstract: w(`recordOfSoul.timeline[${i}].abstract`) ?? ep.abstract,
        keyFeatures: kf !== undefined && kf.trim() !== '' ? kf : ep.keyFeatures,
        videoLength: w(`recordOfSoul.timeline[${i}].videoLength`) ?? ep.videoLength,
      };
    }),
  };
}

export function getLocalizedSiteContent(locale: Locale) {
  const w = (k: string) => workbookResolve(locale, k);
  const home = {
    ...siteContent.home,
    heroTitle: w('siteContent.home.heroTitle') ?? siteContent.home.heroTitle,
    heroSubtitle: w('siteContent.home.heroSubtitle') ?? siteContent.home.heroSubtitle,
    introTitle: w('siteContent.home.introTitle') ?? siteContent.home.introTitle,
  };

  const recordOfSoul = mergeRecordOfSoul(siteContent.recordOfSoul, locale);

  const spiritMedicine = {
    ...siteContent.spiritMedicine,
    title: w('siteContent.spiritMedicine.title') ?? siteContent.spiritMedicine.title,
    description: w('siteContent.spiritMedicine.description') ?? siteContent.spiritMedicine.description,
    note: w('siteContent.spiritMedicine.note') ?? siteContent.spiritMedicine.note,
    volumes: siteContent.spiritMedicine.volumes.map((vol, vi) => ({
      ...vol,
      title: w(`siteContent.spiritMedicine.volumes[${vi}].title`) ?? vol.title,
      episodes: vol.episodes.map((ep, ei) => ({
        ...ep,
        fileNumber: w(`siteContent.spiritMedicine.volumes[${vi}].episodes[${ei}].fileNumber`) ?? ep.fileNumber,
        title: w(`siteContent.spiritMedicine.volumes[${vi}].episodes[${ei}].title`) ?? ep.title,
        description: w(`siteContent.spiritMedicine.volumes[${vi}].episodes[${ei}].description`) ?? ep.description,
      })),
    })),
  };

  const universalMatrix = {
    ...siteContent.universalMatrix,
    title: w('siteContent.universalMatrix.title') ?? siteContent.universalMatrix.title,
    description: w('siteContent.universalMatrix.description') ?? siteContent.universalMatrix.description,
    note: w('siteContent.universalMatrix.note') ?? siteContent.universalMatrix.note,
    volumes: siteContent.universalMatrix.volumes.map((vol, vi) => ({
      ...vol,
      title: w(`siteContent.universalMatrix.volumes[${vi}].title`) ?? vol.title,
      episodes: vol.episodes.map((ep, ei) => ({
        ...ep,
        fileNumber: w(`siteContent.universalMatrix.volumes[${vi}].episodes[${ei}].fileNumber`) ?? ep.fileNumber,
        title: w(`siteContent.universalMatrix.volumes[${vi}].episodes[${ei}].title`) ?? ep.title,
        description: w(`siteContent.universalMatrix.volumes[${vi}].episodes[${ei}].description`) ?? ep.description,
      })),
    })),
  };

  return {
    ...siteContent,
    home,
    recordOfSoul,
    spiritMedicine,
    universalMatrix,
  };
}
