import type { Locale } from '../i18n/locales';
import { pageCopyWorkbookZh } from '../i18n/messages/pageCopyWorkbookOverrides';
import { workbookResolve } from '../i18n/workbookStrings';
import {
  founderStoryIllustrations,
  founderStoryPage,
  founderStorySurfaceCopy,
  founderTimeline,
} from './founderStory2026Content';

function deepClone<T>(x: T): T {
  return JSON.parse(JSON.stringify(x)) as T;
}

/** Apply dotted path like `phaseAStages[0].storylineClip.figureAlt` on a plain object tree. */
function setDeep(obj: Record<string, unknown>, pathStr: string, value: string): void {
  const parts = pathStr.split('.');
  let cur: unknown = obj;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const m = /^(\w+)\[(\d+)\]$/.exec(part);
    const isLast = i === parts.length - 1;
    if (m) {
      const name = m[1];
      const idx = Number(m[2]);
      const container = (cur as Record<string, unknown>)[name];
      if (!Array.isArray(container) || container[idx] === undefined) return;
      if (isLast) {
        (container as unknown[])[idx] = value;
      } else {
        cur = (container as unknown[])[idx];
      }
    } else if (isLast) {
      (cur as Record<string, unknown>)[part] = value;
    } else {
      const next = (cur as Record<string, unknown>)[part];
      if (next === undefined || next === null) return;
      cur = next;
    }
  }
}

function applyZhPrefixToObject<T extends Record<string, unknown>>(base: T, prefix: string): T {
  const out = deepClone(base);
  for (const [key, val] of Object.entries(pageCopyWorkbookZh)) {
    if (!key.startsWith(prefix) || !String(val).trim()) continue;
    setDeep(out, key.slice(prefix.length), val);
  }
  return out;
}

export function getLocalizedFounderStorySurfaceCopy(locale: Locale) {
  if (locale !== 'zh') return founderStorySurfaceCopy;
  const w = (k: string) => workbookResolve(locale, k);
  return {
    ...founderStorySurfaceCopy,
    heroNamesLine: w('founderStorySurfaceCopy.heroNamesLine') ?? founderStorySurfaceCopy.heroNamesLine,
    backToAbout: w('founderStorySurfaceCopy.backToAbout') ?? founderStorySurfaceCopy.backToAbout,
    legacyTimelineLink: w('founderStorySurfaceCopy.legacyTimelineLink') ?? founderStorySurfaceCopy.legacyTimelineLink,
    achievementsFeaturePageLink:
      w('founderStorySurfaceCopy.achievementsFeaturePageLink') ??
      w('founderStory.achievementsFeaturePageLink') ??
      founderStorySurfaceCopy.achievementsFeaturePageLink,
  };
}

export function getLocalizedFounderStoryPage(locale: Locale) {
  if (locale !== 'zh') return founderStoryPage;
  return applyZhPrefixToObject(founderStoryPage as unknown as Record<string, unknown>, 'founderStoryPage.') as unknown as typeof founderStoryPage;
}

export function getLocalizedFounderTimeline(locale: Locale) {
  if (locale !== 'zh') return founderTimeline;
  const w = (k: string) => workbookResolve(locale, k);
  return founderTimeline.map((row, i) => ({
    ...row,
    range: w(`founderTimeline[${i}].range`) ?? row.range,
    label: w(`founderTimeline[${i}].label`) ?? row.label,
  })) as typeof founderTimeline;
}

export function getLocalizedFounderIllustrations(locale: Locale) {
  if (locale !== 'zh') return founderStoryIllustrations;
  const w = (k: string) => workbookResolve(locale, k);
  return founderStoryIllustrations.map((fig, i) => ({
    ...fig,
    alt: w(`founderStoryIllustrations[${i}].alt`) ?? fig.alt,
  })) as typeof founderStoryIllustrations;
}
