/**
 * Founder story — dedicated page copy (English in this file).
 * Chinese: `docs/page-copy/03-创始人故事.xlsx` → `pageCopyDocs.generated.ts`.
 * Inline gold emphasis: only **Woos Record of Soul**, **Woos Spirit Medicine**, **Universal Matrix of Meta Awareness** (applied in workbook + here as EN fallback).
 * @see https://ess-esw.org/storyline-of-woos/
 */
export const STORYLINE_OF_WOOS_URL = 'https://ess-esw.org/storyline-of-woos/' as const;

/**
 * Strings rendered only in `FounderStoryView` (outside `founderStoryPage` blocks or hardwired there).
 * Centralized for export workbooks and copy edits.
 */
export const founderStorySurfaceCopy = {
  heroNamesLine: 'John Long Woo · Caros · Sam',
  backToAbout: '← Organization overview',
  legacyTimelineLink: 'View full storyline archive',
  achievementsFeaturePageLink: 'View our achievements',
} as const;

export const founderStoryIllustrations: { src: string; alt: string }[] = [];

export const founderTimeline = [
  { phase: 'A', range: 'May 2014 — Feb 2025', label: 'Phase A — family field work', tone: 'sky' as const },
  { phase: 'A1', range: 'Mar 2018 — Jul 2020', label: 'Cheating Period 1', tone: 'amber' as const },
  { phase: 'A2', range: 'Jul 2020 — Nov 15, 2020', label: 'Cheating period 2', tone: 'amber' as const },
  { phase: 'A3', range: 'Nov 15, 2020 — Jul 2021', label: 'Exorcism period 1', tone: 'violet' as const },
  { phase: 'A4', range: 'Jul 2021 — Dec 2023', label: 'Exorcism 2 & high-level revealing', tone: 'violet' as const },
  { phase: 'A5', range: 'Dec 2023 — Jan 2025', label: 'Qing Xiaoxian (C2) · Qian Kai (C3)', tone: 'rose' as const },
  { phase: 'B', range: '2025年2月—2026年3月', label: 'B阶段 · TikTok 直播与灵魂医学档案', tone: 'gold' as const },
];

export const founderStoryPage = {
  heroTitle: 'ASRA Founders: The Story of the Woo Family',
  heroBadge: 'Founder narrative',

  intro: `I, John LONG WOO, and my two sons Caros and Sam, the three of us, have too many legendary stories with the spiritual realm. These experiences make us the first door opener in the spiritual realm and the first explorer of the truth of spirit life.`,

  truths: {
    title: 'Discovered Truths of the Spirit Realm',
    items: [
      {
        label: 'Truth 1',
        blocks: [
          {
            text: `A living person is composed of both the physical body and the spirit (soul). After death, the spirit becomes a ghost (spirit ghost). But for the billions of ghosts, the only means of survival is to obtain energy by attaching to human beings. Ghost attachment causes many diseases, such as epilepsy, depression, schizophrenia, and somatic symptom disorders. With the help of master spirits, these conditions can be rapidly improved. For this we created **Woos Spirit Medicine**.`,
          },
          {
            title: 'Archives',
            text: `Further documentation appears in the **Woos Record of Soul** and the **Woos Spirit Medicine** video archives.`,
          },
        ],
      },
      {
        label: 'Truth 2',
        blocks: [
          {
            text: `The Spirit Realm has governors — tremendous master spirits (master spirit), upgraded from ordinary spirit ghosts through the **Universal Matrix of Meta Awareness**.`,
          },
        ],
      },
      {
        label: 'Truth 3',
        blocks: [
          {
            text: `**Universal Matrix of Meta Awareness** is the true creator. Our 13.8-billion-year universe is part of its body. Further documentation appears in the **Universal Matrix of Meta Awareness** video archive.`,
          },
        ],
      },
    ],
  },

  phasesOverview: {
    title: 'Two Major Chapters',
    a: {
      title: 'Phase A — May 2014 through February 2025',
      blocks: [
        {
          title: 'What happened',
          text: `In this phase, we mainly fought the attached spirits (ghosts) of different levels parasitizing our bodies — including Hui'an (C1 level), Qing Xiaoxian (C2 level), and Qian Kai (C3 level). They caused various illnesses across our entire family.`,
        },
        {
          title: 'Motive and methods',
          text: `We fought only for self-rescue — trying and researching every possible method to kill them. In the process of harming and destroying them, we learned the matter properties, physiological and physical properties of ghost bodies, and communicated through epileptic discharge, auditory hallucination sounds, consciousness dialogue, consciousness control, and other modes — building a verified picture of the spirit world.`,
        },
        {
          title: 'Regret',
          text: `Our greatest regret in Phase A is that we did not engage with attached spirits on other people outside our family, or those in other countries.`,
        },
        {
          title: 'Record',
          text: `During this period we filmed the **Woos Record of Soul**.`,
        },
      ],
    },
  },

  phaseAStages: [
    {
      id: 'a1',
      label: 'A 1',
      stageTitle: 'Stage 1 · Cheating Period 1',
      range: 'March 2018 — July 2020',
      paragraphs: [
        `During this period, the C1 spirit ghost in my body used the way of releasing high voltage electrostatic in drinks and wine to change the taste of drinks, aimed to fabricate a series of scientific phenomena and laws, which would finally lead to the proof of the existence of Buddhism. The details are complicated to explain clearly in words.`,
      ],
      /** @see https://ess-esw.org/storyline-of-woos/ Stage 1 — SEE IN YOUTUBE */
      storylineClip: {
        legacyStage: '1',
        youtubeId: 'jQvr_xd7ruY',
      },
    },
    {
      id: 'a2',
      label: 'A 2',
      stageTitle: 'Cheating period 2',
      range: 'July 2020 — 15 November 2020',
      paragraphs: [
        `During this period, Hui 'an, a C1-level ghost in my body, used the way of epileptic seizures to disguise himself as the three great Buddhists in different periods, and finally let my two sons and I convert to Buddhism under the pretext of conveying the divine will. This is actually a big joke, playing tricks on our family like monkeys, which is also the standard paranoia in schizophrenia. However, in the process of cheating and playing tricks, we also exchanged a lot of philosophical cognition and knowledge with the ghost Huian.`,
      ],
      /** @see https://ess-esw.org/storyline-of-woos/ Stage 2 — SEE IN YOUTUBE */
      storylineClip: {
        legacyStage: '2',
        youtubeId: 'BKcqPywrPco',
      },
    },
    {
      id: 'a3',
      label: 'A 3',
      stageTitle: 'Exorcism period 1',
      range: '15 November 2020 — July 2021',
      paragraphs: [
        `At Nov 15, 2020, the real identities of spirit ghosts inside us and their tricks were finally debunked. In great fear and anger, we want to exorcise them. After many failures using traditional ways, we recalled that they always forbade us to touch any strong magnets with various excuses in previous communications. So we started using magnets to hurt them.`,
        `A few days later, the spirit ghost inside my elder son couldn't stand it and left first. Then after a month and a half, the spirit ghost inside my younger son also left due to the same reason. But the spirit ghost in my body was unable to leave even it was already slightly injured, it made me puzzled.`,
        `I found out that using a strong electrostatic field could greatly weaken it from discharging, and my epilepsy was eliminated immediately once it happens. But the spirit ghost was still inside me and continued played hide and seek with me.`,
      ],
    },
    {
      id: 'a4',
      label: 'A 4',
      stageTitle: 'Exorcism period 2 · and high-level revealing',
      range: 'July 2021 — December 2023',
      paragraphs: [
        `During this stage, several ways of interfering, hurting and killing C1 spirit ghost were found and confirmed.`,
        `The limitation of magnet therapy aroused the interest of an advanced spirit (not a master spirit) who died in China about 1500 years ago. It quietly participated in the process of exploring how to expel and kill the C1-level spirit ghost Huian. In this process, it used the way of consciousness transmission to give me hints and inspiration, and also manipulated the behavior of Hui 'an, and finally let me know how to kill and expel huian accurately and efficiently.`,
        `As a father, I pester, fight and coexist with Hui 'an every day, forming a subtle relationship that is both enemy and friend. In the process of hurting ghosts, we also exchanged a lot of knowledge about spirit-related information. Finally, the advanced spirit appeared and demonstrated extraordinary ability. It explained various puzzles from the past year and taught me more about the spiritual realm, then left my body and vanished quickly.`,
      ],
    },
    {
      id: 'a5',
      label: 'A 5',
      stageTitle: 'Class-C2 Qing Xiaoxian · Class-C3 Qian Kai',
      range: 'December 2023 — January 2025',
      paragraphs: [
        `In December 2023, as a father, I was once again attached by a C2-level ghost, Qing Xiaoxian. During its 1,700 years as a ghost, it swallowed about 5,000 to 10,000 other spirits, thus forming a very large body. It turned our house into a haunted house and created multiple Remote Port Organs (RPO) attached to both sons; the main body could communicate with them remotely.`,
        `In my body, this ghost has caused many manifestations such as schizophrenia, bipolar disorder, epilepsy and somatization. It also attacked my heart with extremely powerful current, and had symptoms of acute heart failure. In two sons, it caused chronic fatigue, depression, pain disorder and irritable bowel syndrome, as well as other somatization symptoms.`,
        `We continued to refine exorcism and ghost-elimination techniques and ultimately successfully destroyed this ghost.`,
        `From September 2024 to January 2025, as a father, I was again attached by a C3-level ghost, Qian Kai. Qian Kai's density was far higher than the C2-level Qing Xiaoxian. The higher a ghost's density, the stronger its ability—so Qian Kai's thought-control and pathogenic power were stronger as well. We continued self-rescue and eliminated this ghost.`,
      ],
    },
  ],

  /** English canonical copy; Simplified Chinese: workbook + `zh.ts` where applicable. */
  phaseB: {
    id: 'b',
    title: 'Phase B — February 2025 through March 2026',
    blocks: [
      {
        title: 'Verification of Phase A truths',
        text: `In this phase, Caros communicated with a large number of attached ghosts in North America through TikTok live streams, completely confirming all the spirit world truths we obtained in Phase A. With the help of master spirits, Caros obtained the superpower to remotely control attached ghosts in North America. This superpower is the foundation upon which we built ASRA.`,
      },
      {
        title: 'Livestream scale and documented outcomes',
        text: `From 19 February 2025 to 24 December 2025, Caros conducted a total of 255 live streams on TikTok, achieving extraordinary outcomes in the livestream field. Links to these achievements: {{%ACH%}}`,
      },
      {
        title: 'Master spirits and hybrid spirits',
        text: `A great number of master spirits and hybrid spirits reached out to us as father and sons, letting us know that the spirit world surprisingly has administrators and creators. Master spirits gave us a great deal of help. Caros obtained the PRCASG superpower to remotely control attached spirits in North America, so that while in China he could remotely control spirits on the other side of the globe. This PRCASG superpower is the basis on which we built ASRA.`,
      },
      {
        title: 'How Phase A attachments were arranged',
        text: `Most importantly, we were told: every attached ghost on us during Phase A was deliberately arranged by master spirits. The killing of those attached ghosts was permitted as research material. All the suffering, deception, and taunting storylines were also part of their plan — to let us understand their operating style and character disposition.`,
      },
      {
        title: 'Understanding master spirit character',
        text: `This also let us fully understand: master spirits are not as angel-like kind as we imagined. The help provided earlier was not out of kindness but was work assigned to them by the **Universal Matrix of Meta Awareness**. Everyone can fully appreciate the character attributes of the master spirit team through the Phase A stories.`,
      },
      {
        title: 'Spirit Medicine and video archives',
        text: `During this period, Spirit Medicine was formally established. Part of the **Woos Spirit Medicine** and **Universal Matrix of Meta Awareness** video archive series were filmed.`,
      },
    ],
  },
} as const;
