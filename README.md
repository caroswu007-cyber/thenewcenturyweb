# ASra / SAA Official Site (ESS-ESW)

Official website for the **Spirit Ambassador Association (SAA)** — public branding **ASra**. Documentary and thematic content, built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS v4**.

**Live site:** https://ess-esw.org

**Changelog:** [CHANGELOG.md](./CHANGELOG.md)

---

## Local project path

Use this as the **repository root** when opening the project in your editor or terminal. Your machine may use a different folder name if you cloned elsewhere.

| Context | Path |
|--------|------|
| **Example (Windows, maintainer machine)** | `C:\软件\Trae\projectweb\thenewcenturyweb` |
| **npm package name** | `saa-react-app` (see `package.json`) |

All paths in this README are **relative to the repository root** (the folder that contains `package.json`, `src/`, and `vite.config.ts`).

```bash
# Example: open project and run dev server
cd C:\软件\Trae\projectweb\thenewcenturyweb
npm install
npm run dev
```

---

## Project brief

| Topic | Summary |
|--------|---------|
| **Purpose** | Multi-page marketing and content site: home aggregates three series; long-form pages for About, founder narrative, 2025 livestream achievements, etc. |
| **Languages** | UI strings: **English**, **Spanish**, **Chinese** via `src/i18n/` (see `messages/zh.ts`, `achievementsReport.i18n.ts`). Founder Story still leans on **`src/content/*.ts`** for English blocks. |
| **Visual identity** | Dark base + warm **amber/gold** accents; home hero uses **`GalaxyBackground`**. Founder Story and `/our-achievements` share a **narrative “glass card”** look (`#060812` wash, subtle borders). |
| **Performance** | `/our-achievements` is **code-split** with `React.lazy`; run **`npm run build`** after substantive changes. |

---

## Recent updates (achievements report & typography)

Maintainer-facing notes for **`/our-achievements`** (March 2026):

| Topic | Detail |
|--------|--------|
| **Copy / i18n** | Long-form strings: `src/i18n/messages/achievementsReport.i18n.ts` (EN + ZH). Merged into locale packs via `src/i18n/translate.ts`. Optional emphasis in strings: `**phrase**`, parsed in `src/components/achievements/ReportRichText.tsx` (`ReportInline`, `ReportParagraphs`). |
| **Layout** | `src/views/OurAchievementsView.tsx` — `report-hero-frame`, `report-section-slab`, `report-metric-shell`, `report-toc-panel`, `report-cta-bar`. No “Distribution & documentation” block on the public page (that text was internal-style notes, not user-facing narrative). |
| **Body font** | **`Newsreader`** for `.report-document` (loaded in `index.html`); **Inter** kept for table headers (`.report-table thead th`) and small UI lines. |
| **Scale** | Base body on the report page ≈ **1.125rem → 1.265rem** at large breakpoints; `.report-subhead` and `.report-crosshead` in `src/index.css` sit between the hero title and body. |
| **Carousel** | `src/components/achievements/AchievementsReportCarousel.tsx` — auto-advance only runs **`thumbStrip.scrollTo({ left })`**; **`scrollIntoView` is not used** so the window does not jump on slide change. Optional `width="half"`. |
| **Hero image** | `reportHeroFigure` in `src/content/achievements2025Content.ts`; `compressUnsplash` / sizing in the view. |

---

## Tech stack

| Layer | Technology |
|--------|------------|
| UI | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build | [Vite 8](https://vitejs.dev/) |
| Routing | [React Router v7](https://reactrouter.com/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Motion | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |

---

## Routes ↔ source files

Routes are declared in **`src/App.tsx`**. `/our-achievements` is wrapped in **`Suspense`** (lazy-loaded).

| URL | View | Notes |
|-----|------|--------|
| `/` | `src/views/HomeView.tsx` | Hero, Introduction, TruthSection, Achievements, JoinSection |
| `/about` | `src/views/AboutView.tsx` | About org; short copy + link to founder story |
| `/founder-story` | `src/views/FounderStoryView.tsx` | Long narrative; blocks in `src/content/founderStory2026Content.ts` |
| `/record-of-soul` | `src/views/RecordOfSoulView.tsx` | Series 1 hub |
| `/spirit-medicine` | `src/views/WoosSpiritMedicineView.tsx` | Series 2 hub |
| `/universal-matrix` | `src/views/UniversalMatrixView.tsx` | Series 3 hub |
| `/universal-matrix-of-meta-awareness` | same as above | Alias route |
| `/our-achievements` | `src/views/OurAchievementsView.tsx` (lazy) | 2025 achievements; data in `src/content/achievements2025Content.ts` |

Shared chrome: **`src/components/PageShell.tsx`**, **`src/components/Navbar.tsx`**, **`src/components/Footer.tsx`**.

---

## Repository layout (core)

```
<repository-root>/
├── src/
│   ├── App.tsx                 # Routes; lazy OurAchievementsView + Suspense
│   ├── main.tsx
│   ├── index.css               # Tailwind @theme, .cosmic-title, .achv-*, .home-blur-surface, etc.
│   ├── content/
│   │   ├── siteContent.ts
│   │   ├── founderStory2026Content.ts
│   │   ├── achievements2025Content.ts
│   │   ├── visualTheme.ts
│   │   ├── spiritMedicineData.ts
│   │   └── …
│   ├── i18n/
│   │   ├── LocaleProvider.tsx
│   │   ├── messages/en.ts
│   │   └── messages/es.ts
│   ├── views/                  # Page entry components
│   ├── components/
│   │   ├── home/               # Hero, TruthSection, Achievements, JoinSection, …
│   │   ├── achievements/       # ReplayGalleryBackdrop, CollapsibleText, LivestreamCarousel
│   │   ├── common/             # GalaxyBackground, CosmicGalaxyCanvas, SectionDivider, …
│   │   ├── record/             # Record of Soul components
│   │   ├── spiritMedicine/
│   │   └── universalMatrix/
│   └── …
├── public/
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Scripts

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # tsc -b && vite build → dist/
npm run lint
npm run preview   # serve dist/ locally
npm run export:page-xlsx   # regenerate docs/page-copy/*.xlsx (see below)
```

---

## Page copy workbooks (Excel) & AI sync

The repo ships **seven page-scoped Excel files** (`docs/page-copy/01-首页.xlsx` … `07-我们的成就.xlsx`) used to review and edit **English / 中文 / Latin** copy per section. They are **generated**, not hand-maintained.

**If you change routes, views, or where strings live:**

1. Open the **AI / maintainer mapping doc:** [`docs/AI_PAGE_COPY_SYNC.md`](./docs/AI_PAGE_COPY_SYNC.md)  
   - It lists **workbook ↔ URL ↔ view ↔ source files** and explains **`block_key`** rules, regeneration, and how to feed edits back into `en.ts` / `zh.ts` / `content/*`.
2. Update code (and, when needed, **`scripts/export-page-copy-workbooks.ts`**) so export stays accurate.
3. Regenerate sheets: **`npm run export:page-xlsx`**
4. Run **`npm run build`**.

**Short folder readme:** `docs/page-copy/README.txt` (column glossary only; full instructions are in `AI_PAGE_COPY_SYNC.md`).

---

## Guidelines for AI assistants

1. **Nav labels / locale strings** → `src/i18n/messages/en.ts`, `es.ts`. **Nav structure** → `src/components/Navbar.tsx`.
2. **Home achievements strip (copy)** → i18n keys under `home.achievements.*`. **Layout & styling** → `src/components/home/Achievements.tsx` (keep `home-blur-surface` + gold accents like `TruthSection`).
3. **Achievements page** → narrative copy **`src/i18n/messages/achievementsReport.i18n.ts`**; metrics / carousel URLs / `reportHeroFigure` → **`src/content/achievements2025Content.ts`**; layout → **`src/views/OurAchievementsView.tsx`**; album carousel → **`AchievementsReportCarousel.tsx`**; rich text helpers → **`ReportRichText.tsx`**.
4. **Founder story** → **`src/content/founderStory2026Content.ts`** + **`src/views/FounderStoryView.tsx`** (helpers such as `SectionCard`, `RichText` live in the view file).
5. **Global typography / title gradients** → **`src/index.css`** (e.g. `.cosmic-title`, `.achv-hero-title`, `.achv-section-title`).
6. **Page copy Excel ↔ codebase:** follow [`docs/AI_PAGE_COPY_SYNC.md`](./docs/AI_PAGE_COPY_SYNC.md); regenerate with **`npm run export:page-xlsx`** after structural or key changes.
7. Avoid expanding README or CHANGELOG unless the user or maintainer asks.
8. Before finishing a task, run **`npm run build`** and fix TypeScript / build errors.

---

## Design notes

- **Home** sections: align with **`home-blur-surface`**, amber divider lines, and **`cosmic-title`** for major headings.
- **Founder Story & `/our-achievements`**: **`#060812`**-style backdrop, **`border-white/[0.1]`**, **`bg-[rgba(12,16,28,0.75)]`** panels — same language as `SectionCard` in `FounderStoryView.tsx`.
- **Remote images** (Unsplash): use **`compressUnsplash()`** in `achievements2025Content.ts` where appropriate to cap width/quality.

---

## Contributing

1. Use a feature branch for code changes; content-only edits can touch `src/content/` and `src/i18n/messages/` only.
2. Run **`npm run build`** before opening a PR.
3. © Spirit Ambassador Association. All rights reserved.
