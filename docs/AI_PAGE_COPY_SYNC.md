# AI instruction: page copy workbooks ↔ source code

This document tells **human maintainers and AI assistants** how the trilingual Excel workbooks under `docs/page-copy/` map to the repository, how to **regenerate** them after site changes, and how to **apply** edited copy back into code.

**Human entry point:** read [`README.md`](../README.md) section **「Page copy workbooks (Excel) & AI sync」** — it points here.

---

## 1. What the workbooks are

| Output | Path pattern |
|--------|----------------|
| Seven page-specific workbooks | `docs/page-copy/01-首页.xlsx` … `07-我们的成就.xlsx` |
| Short folder readme | `docs/page-copy/README.txt` |

**Generator:** `scripts/export-page-copy-workbooks.ts`  
**Command:** `npm run export:page-xlsx`

**Columns (every sheet):**

| Column | Meaning |
|--------|---------|
| `block_key` | Stable identifier. **Do not rename** when returning files for import; maps to i18n keys or logical paths (see §3). |
| `section_板块` | Human-readable screen area (non-authoritative). |
| `kind` | Hint only: heading / button / paragraph. |
| `english_源文` | Primary source string as exported (usually English from `en.ts` or `siteContent` / founder content). |
| `中文` | Chinese from `zh.ts` / `achievementsReportZh` where wired; else empty for manual fill. |
| `Latin_Latina` | Empty in export; for Latin translations. |
| `notes` | Generator hint (which file or subsystem). |

---

## 2. Route ↔ workbook ↔ source files (correspondence table)

When **routes or views change**, update **`src/App.tsx`** (and this table in this doc), then adjust **`scripts/export-page-copy-workbooks.ts`** if keys or content roots moved.

| Workbook | Primary URL(s) | View(s) | Main copy sources (authoritative) |
|----------|----------------|---------|-------------------------------------|
| `01-首页.xlsx` | `/` | `src/views/HomeView.tsx`; sections from `src/components/home/*` | i18n: `home.*`, `nav.*`, `footer.*`, `lang.label`, `common.*`; plus `siteContent.home` in `src/content/siteContent.ts` |
| `02-组织介绍.xlsx` | `/about` | `src/views/AboutView.tsx` | i18n: `about.*` (`src/i18n/messages/en.ts`, `zh.ts`, `es.ts`); long English blocks: `aboutContent` in `src/content/siteContent.ts` (via `getAboutContent`) |
| `03-创始人故事.xlsx` | `/founder-story` | `src/views/FounderStoryView.tsx` | i18n: `founderStory.*`; narrative: `src/content/founderStory2026Content.ts` (`founderStoryPage`, `founderTimeline`, `founderStoryIllustrations`, etc.) |
| `04-视频目录-灵魂档案.xlsx` | `/record-of-soul` | `src/views/RecordOfSoulView.tsx`; `src/components/record/*` | i18n: `record.*`, `episode.*`; episode list & hero copy: `siteContent.recordOfSoul` in `src/content/siteContent.ts` |
| `05-视频目录-灵体医学.xlsx` | `/spirit-medicine` | `src/views/WoosSpiritMedicineView.tsx`; `src/components/spiritMedicine/*` | i18n: `spirit.*`; `siteContent.spiritMedicine`; outline: `src/content/spiritMedicineOfficialOutline.ts`; playlist rows: `src/content/spiritMedicineData.ts` (`spiritMedicineFileGroups`) |
| `06-视频目录-万有元神.xlsx` | `/universal-matrix`, `/universal-matrix-of-meta-awareness` | `src/views/UniversalMatrixView.tsx`; `src/components/universalMatrix/*` | i18n: `matrix.*`; scaffold copy: `siteContent.universalMatrix` in `src/content/siteContent.ts` |
| `07-我们的成就.xlsx` | `/our-achievements` (and home strip) | `src/views/OurAchievementsView.tsx`; home strip `src/components/home/Achievements.tsx` | Long report: `src/i18n/messages/achievementsReport.i18n.ts` (`achievementsReportEn` / `achievementsReportZh`); marketing/hero strip: `achievementsPage.*` in `en.ts` / `zh.ts` / `es.ts` |

**Locale merge:** `src/i18n/translate.ts` merges packs. Spanish often overlays `es.ts` on English; Chinese overlays `messagesZh` + achievements report ZH.

**Not fully covered in workbooks:** hardcoded JSX strings (e.g. labels only in a `.tsx` file). If you add new UI strings, prefer **`messagesEn` + `messagesZh`** with a stable key, then extend `export-page-copy-workbooks.ts` to include the new prefix or keys.

---

## 3. `block_key` conventions (for applying edits)

- **i18n:** key exactly matches `messagesEn` / `messagesZh` (e.g. `home.intro.title`, `about.hero.titleLine1`).
- **Achievements report:** key matches `achievementsReport.i18n.ts` (e.g. `achievementsReport.s1.lead`).
- **Embedded content:** logical paths as in the export script, e.g. `aboutContent.overview`, `founderStoryPage.phaseB.blocks[0].text`, `recordOfSoul.timeline[3].abstract`, `spiritMedicineFileGroups[2].episodes[1].title`.

When applying user-edited sheets, map each row’s `block_key` back to the correct file and property; preserve emphasis markers like `**bold**` where the UI uses `RichText` / `ReportInline`.

---

## 4. When the site structure changes (checklist for AI)

1. **Routes/views:** update `src/App.tsx` and the **§2 table** in this file.
2. **New page or new string bundles:**  
   - Add i18n keys under `src/i18n/messages/*.ts`, **or** add structured content under `src/content/*.ts`.  
   - Extend `scripts/export-page-copy-workbooks.ts`: new `pickKeys('prefix.')` rows, or new `flatten*` helpers, and add or rename a workbook in the `books` array.
3. **Regenerate artifacts:** `npm run export:page-xlsx` (refresh `docs/page-copy/*.xlsx`).
4. **Verify:** `npm run build`.
5. **Latin (or third column workflow):** if Latin should drive the site, there is **no** `la.ts` pack yet — either add a locale and `translate.ts` merge, or keep Latin in sheets for external use only until product asks for on-site Latin.

---

## 5. Applying edits coming back from spreadsheets

There is **no** automatic import script yet. Intended workflow:

1. User fills / corrects `english_源文`, `中文`, `Latin_Latina` in Excel.
2. User sends files (or CSV) and states which column is **source of truth** for each language.
3. **AI or maintainer** updates:
   - `src/i18n/messages/en.ts`, `zh.ts`, `es.ts` for i18n keys;
   - `src/i18n/messages/achievementsReport.i18n.ts` for report keys;
   - `src/content/siteContent.ts` or `founderStory2026Content.ts` for content-path keys;
   - `spiritMedicineData.ts` / `spiritMedicineOfficialOutline.ts` when those rows change.
4. Run `npm run export:page-xlsx` again to confirm rows match after merge (optional diff).
5. Run `npm run build`.

---

## 6. Related scripts

| Script | Role |
|--------|------|
| `npm run export:page-xlsx` | Regenerate `docs/page-copy/*.xlsx` from current repo |
| `npm run export:i18n-csv` | Full i18n CSV: `docs/i18n_trilingual_review.csv` |
| `npm run export:site-copy` | Broader copy export (`scripts/export-all-site-copy.ts`) |

---

## 7. File index (quick links)

| Path | Role |
|------|------|
| `scripts/export-page-copy-workbooks.ts` | Excel generator — **edit when structure/keys change** |
| `docs/page-copy/` | Generated `.xlsx` + `README.txt` |
| `src/i18n/messages/en.ts` | English UI strings |
| `src/i18n/messages/zh.ts` | Chinese overrides |
| `src/i18n/messages/achievementsReport.i18n.ts` | EN/ZH long achievements report |
| `src/i18n/translate.ts` | Locale pack merge |
| `src/content/siteContent.ts` | `aboutContent`, `recordOfSoul`, documentary pages |
| `src/content/founderStory2026Content.ts` | Founder narrative |
| `src/content/spiritMedicineData.ts` | Spirit Medicine episodes |
| `src/content/spiritMedicineOfficialOutline.ts` | Spirit Medicine outline headings |

---

*Last aligned with generator `export-page-copy-workbooks.ts`. If behavior diverges, treat the script as the mechanical truth and update this document.*
