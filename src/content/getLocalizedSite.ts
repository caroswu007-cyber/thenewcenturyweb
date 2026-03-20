import type { Locale } from '../i18n/locales';
import { siteContent } from './siteContent';

const siteZhPatch = {
  home: {
    heroTitle: '灵界大使协会',
    heroSubtitle: '乌玛新世纪组织',
    heroCta: '探索真相',
    introTitle: '什么是 ASra？',
  },
  recordOfSoul: {
    title: '沃斯灵魂档案',
    description:
      '本片较早拍摄，记录沃斯父子被灵附体与抗争的过程，以及人类对超自然现象、濒死体验与轮回等情况的科学总结。',
    note: '拍摄《灵魂档案》时，灵有时被称为鬼或魂；在 2025 年拍摄的《灵体医学》中，则明确将鬼魂称为灵（鬼）。',
    episodesCount: '11',
    minutes: '942+',
  },
  spiritMedicine: {
    title: '沃斯灵体医学',
    description:
      '连接肉体与灵识的疗愈路径。本季侧重实务干预、结构化康复方案，以及身心平衡的持续修复。',
    note: '本页沿用原纪录片系列结构，便于持续完善内容与层次。完整章节媒体可逐步更新。',
  },
  universalMatrix: {
    title: '元意识宇宙矩阵',
    description:
      '本纪录片提出关于「元意识宇宙矩阵」存在的证据。它为人类创造了三类虚拟生存环境，掌控人类自由意识、地球生命的演化以及人类文明的终极命运。',
    note: '本节按原系列层次搭建，便于在 Layrr 中微调语言、层级与视觉节奏。',
  },
} as const;

export function getLocalizedSiteContent(locale: Locale) {
  if (locale !== 'zh') return siteContent;
  return {
    ...siteContent,
    home: { ...siteContent.home, ...siteZhPatch.home },
    recordOfSoul: {
      ...siteContent.recordOfSoul,
      ...siteZhPatch.recordOfSoul,
    },
    spiritMedicine: {
      ...siteContent.spiritMedicine,
      ...siteZhPatch.spiritMedicine,
    },
    universalMatrix: {
      ...siteContent.universalMatrix,
      ...siteZhPatch.universalMatrix,
    },
  };
}
