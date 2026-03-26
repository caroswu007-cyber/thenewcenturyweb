import type { Locale } from '../i18n/locales';
import { workbookResolve } from '../i18n/workbookStrings';
import { aboutContent, type AboutPageContent } from './siteContent';

export function getAboutContent(locale: Locale): AboutPageContent {
  const w = (k: string) => workbookResolve(locale, k);
  const base = aboutContent;

  return {
    ...base,
    orgName: w('aboutContent.orgName') ?? base.orgName,
    orgSubtitle: w('aboutContent.orgSubtitle') ?? base.orgSubtitle,
    tagline: w('aboutContent.tagline') ?? base.tagline,
    overview: w('aboutContent.overview') ?? base.overview,
    asra: {
      name: w('aboutContent.asra.name') ?? base.asra.name,
      abbr: w('aboutContent.asra.abbr') ?? base.asra.abbr,
      domain: w('aboutContent.asra.domain') ?? base.asra.domain,
      description: w('aboutContent.asra.description') ?? base.asra.description,
    },
    smsc: {
      name: w('aboutContent.smsc.name') ?? base.smsc.name,
      abbr: w('aboutContent.smsc.abbr') ?? base.smsc.abbr,
      domain: w('aboutContent.smsc.domain') ?? base.smsc.domain,
      description: w('aboutContent.smsc.description') ?? base.smsc.description,
    },
    partnership: w('aboutContent.partnership') ?? base.partnership,
    founders: {
      title: w('aboutContent.founders.title') ?? base.founders.title,
      subtitle: w('aboutContent.founders.subtitle') ?? base.founders.subtitle,
      description: w('aboutContent.founders.description') ?? base.founders.description,
      storyTeaser: w('aboutContent.founders.storyTeaser') ?? base.founders.storyTeaser,
    },
    missions: base.missions.map((m, i) => ({
      ...m,
      number: w(`aboutContent.missions[${i}].number`) ?? m.number,
      title: w(`aboutContent.missions[${i}].title`) ?? m.title,
      description: w(`aboutContent.missions[${i}].description`) ?? m.description,
      tag: w(`aboutContent.missions[${i}].tag`) ?? m.tag,
    })),
  };
}
