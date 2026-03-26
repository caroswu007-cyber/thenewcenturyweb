# thenewcenturyweb — ASra / SAA (ESS-ESW)

**What:** Official site for **Spirit Ambassador Association (SAA)** / brand **ASra** — multi-route React app with documentary-style pages, EN + ES + ZH UI, long-form English (and partial ZH) in content modules.

| Quick fact | Value |
|------------|--------|
| **Stack** | React 19, Vite 8, TypeScript, Tailwind CSS v4, React Router 7, Framer Motion, Lucide |
| **Live** | https://ess-esw.org |
| **GitHub** | https://github.com/caroswu007-cyber/thenewcenturyweb |
| **npm name** | `saa-react-app` |

---

## AI quick map (edit here first)

| Need | File(s) |
|------|---------|
| Routes, lazy loading | `src/App.tsx` — `/our-achievements` uses `React.lazy` + `Suspense` |
| Nav labels / global UI strings | `src/i18n/messages/en.ts`, `es.ts`, `zh.ts` — merged via `src/i18n/translate.ts` |
| **2025 achievements report** (long ZH/EN) | `src/i18n/messages/achievementsReport.i18n.ts`; layout `src/views/OurAchievementsView.tsx`; metrics/carousel/hero image `src/content/achievements2025Content.ts`; rich text `src/components/achievements/ReportRichText.tsx` |
| **Founder story** | `src/content/founderStory2026Content.ts` + `src/views/FounderStoryView.tsx` (most body = English; Phase B + some labels = Chinese in source) |
| Home hero / series / about chunks | `src/content/siteContent.ts`, components under `src/components/home/` |
| Theme / typography tokens | `src/index.css` (e.g. `.cosmic-title`, `.report-document`) |
| Page copy workbooks (generated Excel) | `docs/page-copy/` — regenerate: `npm run export:page-xlsx`; mapping: [`docs/AI_PAGE_COPY_SYNC.md`](./docs/AI_PAGE_COPY_SYNC.md) |

**Emphasis in long strings:** wrap phrases in `**…**`; rendered on report page via `ReportInline` / `ReportParagraphs`.

---

## Routes → view → data

| Path | View | Main copy / data |
|------|------|------------------|
| `/` | `HomeView.tsx` | `siteContent` + i18n `home.*` |
| `/about` | `AboutView.tsx` | `aboutContent` + i18n |
| `/founder-story` | `FounderStoryView.tsx` | `founderStory2026Content.ts` |
| `/our-achievements` | `OurAchievementsView.tsx` (lazy) | `achievementsReport.*` i18n + `achievements2025Content.ts` |
| `/record-of-soul` | `RecordOfSoulView.tsx` | `siteContent` timeline |
| `/spirit-medicine` | `WoosSpiritMedicineView.tsx` | `spiritMedicineData.ts` / site content |
| `/universal-matrix` (alias: `…-meta-awareness`) | `UniversalMatrixView.tsx` | site content |

Shared chrome: `PageShell.tsx`, `Navbar.tsx`, `Footer.tsx`.

---

## Commands

```bash
npm install
npm run dev      # Vite dev server (port from terminal)
npm run build    # tsc -b && vite build → dist/
npm run lint
npm run preview  # preview production build
npm run export:page-xlsx   # refresh docs/page-copy/*.xlsx
```

---

## Visual / UX (short)

Dark UI, **amber/gold** accents; home uses `GalaxyBackground`. Founder story and achievements report use dark **glass-card** panels (`#060812`-range wash, subtle borders). Remote images: prefer `compressUnsplash()` where defined in content helpers.

---

## Deeper docs

- [`CHANGELOG.md`](./CHANGELOG.md) — release-oriented notes  
- [`docs/AI_PAGE_COPY_SYNC.md`](./docs/AI_PAGE_COPY_SYNC.md) — workbook ↔ code, `block_key`, feeding edits back into i18n/content  

---

## Contributing

1. Prefer a feature branch for code; content-only changes may touch `src/content/` and `src/i18n/messages/` only.  
2. Run **`npm run build`** before PR.  
3. © Spirit Ambassador Association. All rights reserved.
