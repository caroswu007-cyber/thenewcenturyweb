export type Episode = {
  fileNumber: string;
  title: string;
  description: string;
  link: string;
  delay?: number;
};

export type Volume = {
  title: string;
  episodes: Episode[];
};

export type DocumentaryPage = {
  title: string;
  description: string;
  note: string;
  bannerImages: string[];
  volumes: Volume[];
};

export const siteContent = {
  brand: 'SAA',
  home: {
    heroTitle: 'Spirit Ambassador Association',
    heroSubtitle: 'Discovering the Ethereal World',
    heroCta: 'Explore Our Mission',
    introTitle: 'Introduction to SAA',
  },
  links: {
    achievements: 'https://ess-esw.org/',
    join: 'https://ess-esw.org/',
  },
  recordOfSoul: {
    title: 'Woos Record of Soul',
    description:
      'This Documentary was shot earlier, recording the process of Woos father and son being possessed by spirits and fighting. And the scientific summary of human research on supernatural phenomena, near-death experience and reincarnation.',
    note: 'When "Woos Record of Soul" was filmed, Spirits were sometimes called ghost and sometimes soul, but in the spirit medicine filmed in 2025, ghosts were clearly called spirit (ghost).',
    bannerImages: [
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80',
    ],
    volumes: [
      {
        title: 'Vol. 1 - Foundational Insights',
        episodes: [
          {
            fileNumber: 'FILE 1-1-1',
            title: 'Introduction to Woos Record of Soul',
            link: 'https://youtu.be/AaeSiJzgDws',
            description:
              'An introduction to the profound scientific research and documented evidence exploring the intersection of the physical and ethereal realms.',
          },
          {
            fileNumber: 'FILE 1-1-2',
            title: 'Scientifically Prove the Existence of Souls through Epilepsy',
            link: 'https://youtu.be/Tna3F0rRPGY',
            delay: 0.1,
            description:
              'Demonstrating how electromagnetic, thermal, and quantum sensors can detect and record phenomena attributable to spirit presence.',
          },
          {
            fileNumber: 'FILE 1-1-3',
            title: 'Authenticity Research of PSI',
            link: 'https://youtu.be/DBAXNiDF8qM',
            delay: 0.2,
            description:
              'PSI phenomena — telepathy, psychokinesis, clairvoyance — are the foundational gateway to understanding spiritual forces. Yet their legitimacy has long been dismissed as pseudoscience. This episode reveals groundbreaking research from China’s 507 Institute — proving that spirit-derived forces are real, measurable, and reproducible.',
          },
        ],
      },
      {
        title: 'Vol. 2 - The Mechanics of Spirits',
        episodes: [
          {
            fileNumber: 'FILE 1-2-1',
            title: 'Origin, Destination After Death of Souls & Impact on Human',
            link: 'https://youtu.be/RURvSBHvKu0',
            description:
              'Where do human souls come from? Where do they go after death? This episode reveals an unprecedented truth regarding the primary destination of ancestral human spirits and their attachment to the living. Drawing on 12 peer-reviewed studies.',
          },
          {
            fileNumber: 'FILE 1-2-2',
            title: 'Material Foundation of Soul: Spiritual World has Natural Internet Attribute',
            link: 'https://youtu.be/zQ2fzctwkY0',
            delay: 0.1,
            description:
              'Traditional materialism denies spirit existence. But the ethereal realm possesses an innate, internet-like architecture capable of transmitting conscious information. Features groundbreaking PSI papers demonstrating mental intent transmission without instruments.',
          },
          {
            fileNumber: 'FILE 1-2-3',
            title: 'Scientific Proof of Soul Parasitism/Possession Caused Illnesses',
            link: 'https://youtu.be/41OSBcImghk',
            delay: 0.15,
            description:
              'In this world, where is it easy to find a spirit? In patients with dissociative disorder, schizophrenia, epilepsy, and depression. Explores the etiology research and pain brought by spirits, featuring real video materials of spirit possession.',
          },
          {
            fileNumber: 'FILE 1-2-4',
            title: 'Deep Exploration of Soul-Triggering Epilepsy’s Mechanism',
            link: 'https://youtu.be/GtyfFk8O5oA',
            delay: 0.2,
            description:
              'A deep dive into the physiological and metaphysical mechanisms connecting soul interference with neurological occurrences such as epilepsy.',
          },
          {
            fileNumber: 'FILE 1-2-5',
            title: 'The Truth of NDE – Sophisticated Illusions Orchestrated by Parasitic Souls',
            link: 'https://youtu.be/9cbr96i2MVg',
            delay: 0.25,
            description:
              'Investigating the reality behind Near-Death Experiences, deciphering them not as spiritual liberation, but as intricate illusions manipulated by external ethereal entities.',
          },
          {
            fileNumber: 'FILE 1-2-6',
            title: 'Past Life Memories Come from Parasitic Souls, It Can Not Prove Reincarnation',
            link: 'https://youtu.be/iB_yNqGJ1Ds',
            delay: 0.3,
            description:
              'Dismantling common misconceptions regarding past-life regression. The memories often belong to foreign attached entities, fundamentally challenging global reincarnation narratives.',
          },
        ],
      },
      {
        title: 'Vol. 3 - Anatomy of the Ethereal',
        episodes: [
          {
            fileNumber: 'FILE 1-3',
            title: 'Whether Souls Have Eyes? Scientific Discovery on Spiritual Vision',
            link: 'https://youtu.be/6haJUyUxrqc',
            description:
              'Eyes outline the nature of existence. This series draws upon 19 peer-reviewed academic papers from prestigious institutions, providing conclusive evidence regarding the visual perception and organ faculties of spirits.',
          },
          {
            fileNumber: 'FILE 1-4',
            title: 'Discover the truth of body shape, organs, material composition and metabolism of souls',
            link: 'https://youtu.be/V6ua2xkHpE0',
            delay: 0.1,
            description:
              'The ethereal body is material in nature. This represents the first systematic scientific exploration into the physical structure, organ systems, material composition, and energy metabolism of human spirits after death.',
          },
        ],
      },
    ] as Volume[],
  } as DocumentaryPage,
  spiritMedicine: {
    title: 'Woos Spirit Medicine',
    description:
      'Healing methodologies connecting the physical body and ethereal consciousness. This season focuses on practical intervention, structured recovery pathways, and ongoing restoration of balance for mind and soul.',
    note: 'This page follows the original documentary-series structure and is prepared for continuous content refinement. Full chapter media can be updated progressively.',
    bannerImages: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80',
    ],
    volumes: [
      {
        title: 'Vol. 1 - Clinical Foundation',
        episodes: [
          {
            fileNumber: 'FILE 2-1-1',
            title: 'Principles of Spirit Medicine',
            description:
              'Foundational framework for evaluating cases, defining intervention boundaries, and establishing treatment baselines.',
            link: 'https://ess-esw.org/',
          },
          {
            fileNumber: 'FILE 2-1-2',
            title: 'Assessment and Case Intake',
            description:
              'A structured approach for symptom mapping, progression tracking, and identifying high-priority intervention windows.',
            link: 'https://ess-esw.org/',
            delay: 0.1,
          },
        ],
      },
      {
        title: 'Vol. 2 - Recovery Protocols',
        episodes: [
          {
            fileNumber: 'FILE 2-2-1',
            title: 'Stabilization and Symptom Control',
            description:
              'Methods to reduce acute distress, restore daily functionality, and protect long-term recovery continuity.',
            link: 'https://ess-esw.org/',
          },
          {
            fileNumber: 'FILE 2-2-2',
            title: 'Guided Rehabilitation Workflow',
            description:
              'A protocol-oriented care flow from guided sessions to independent maintenance and periodic reassessment.',
            link: 'https://ess-esw.org/',
            delay: 0.1,
          },
        ],
      },
      {
        title: 'Vol. 3 - Systemized Practice',
        episodes: [
          {
            fileNumber: 'FILE 2-3-1',
            title: 'Administrator Collaboration Model',
            description:
              'Team-based operating model for case coordination, escalation handling, and outcome verification.',
            link: 'https://ess-esw.org/',
          },
          {
            fileNumber: 'FILE 2-3-2',
            title: 'Long-Term Follow-up and Governance',
            description:
              'How to sustain recovery quality through periodic review, relapse prevention, and standard operating controls.',
            link: 'https://ess-esw.org/',
            delay: 0.1,
          },
        ],
      },
    ],
  } as DocumentaryPage,
  universalMatrix: {
    title: 'Universal Matrix of Meta Awareness',
    description:
      'Advanced transcendental truths governing systemic universe order and ultimate human destiny. This season presents conceptual architecture, governance logic, and higher-order awareness models.',
    note: 'This section is scaffolded using the original series layout so you can fine-tune language, hierarchy, and visual rhythm in Layrr.',
    bannerImages: [
      'https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1450849608880-6f787542c88a?auto=format&fit=crop&w=2000&q=80',
    ],
    volumes: [
      {
        title: 'Vol. 1 - Universal Architecture',
        episodes: [
          {
            fileNumber: 'FILE 3-1-1',
            title: 'Framework of the Meta Awareness Matrix',
            description:
              'A structural overview of governing layers, interaction rules, and macro-level system dependencies.',
            link: 'https://ess-esw.org/',
          },
          {
            fileNumber: 'FILE 3-1-2',
            title: 'Origins of Universal Order',
            description:
              'Explores first principles behind life orchestration, continuity mechanics, and order-preserving constraints.',
            link: 'https://ess-esw.org/',
            delay: 0.1,
          },
        ],
      },
      {
        title: 'Vol. 2 - Governance and Destiny',
        episodes: [
          {
            fileNumber: 'FILE 3-2-1',
            title: 'Control Logic Across Civilizations',
            description:
              'How macro-governance influences collective development trajectories and civilization-scale turning points.',
            link: 'https://ess-esw.org/',
          },
          {
            fileNumber: 'FILE 3-2-2',
            title: 'The Pathway of Human Ultimate Destiny',
            description:
              'A focused interpretation of destiny models, milestones, and threshold transitions within the broader system.',
            link: 'https://ess-esw.org/',
            delay: 0.1,
          },
        ],
      },
      {
        title: 'Vol. 3 - Meta Awareness in Practice',
        episodes: [
          {
            fileNumber: 'FILE 3-3-1',
            title: 'Applied Awareness and Daily Alignment',
            description:
              'Practical guidance for aligning daily behavior with higher-order system principles and long-range purpose.',
            link: 'https://ess-esw.org/',
          },
          {
            fileNumber: 'FILE 3-3-2',
            title: 'Integration with Ethereal Life Research',
            description:
              'Bridges meta-awareness models with documented ethereal-life findings for a unified explanatory framework.',
            link: 'https://ess-esw.org/',
            delay: 0.1,
          },
        ],
      },
    ],
  } as DocumentaryPage,
};
