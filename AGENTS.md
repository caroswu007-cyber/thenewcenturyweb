# AGENTS.md — AI / contributor briefing

Read this file first. Only scan deeper when the task needs it.

## Project

ASra marketing / documentary site built with React + Vite. Main routes:

- `/`
- `/about`
- `/founder-story`
- `/record-of-soul`
- `/spirit-medicine`
- `/universal-matrix`
- `/our-achievements`

## Stack

- React 19 + Vite 8 + TypeScript
- Tailwind CSS v4
- React Router
- Framer Motion
- i18n in `src/i18n/`

## Commands

```bash
npm install
npm run dev
npm run build
npm run copy:import      # xlsx → generated.ts (safe, read-only for xlsx)
npm run copy:scaffold    # code structure → staging xlsx (never overwrites real xlsx)
```

## Copy source of truth

For rendered English / Chinese page copy, the single source of truth is:

- `docs/page-copy/*.xlsx`

Runtime flow:

1. Edit workbook text in `docs/page-copy/`
2. Run `npm run copy:import`
3. This generates `src/content/pageCopyDocs.generated.ts`
4. The app reads that through `src/content/pageCopyRuntime.ts`

TS content files (`siteContent.ts`, `founderStory2026Content.ts`) are English fallbacks only.
`en.ts` / `zh.ts` are for UI chrome (buttons, nav, expand/collapse labels) — NOT page body copy.
See `.cursor/rules/content-sync.mdc` for detailed AI rules and workflow.

## Main content entry points

| Need | File(s) |
|------|---------|
| Workbook runtime mapping | `src/content/pageCopyRuntime.ts` |
| Generated workbook data | `src/content/pageCopyDocs.generated.ts` |
| i18n merge | `src/i18n/translate.ts` |
| Home / record / about fallback structures | `src/content/siteContent.ts` |
| Founder story fallback structure | `src/content/founderStory2026Content.ts` |
| Spirit Medicine playlist data | `src/content/spiritMedicineData.ts` |
| Spirit Medicine outline | `src/content/spiritMedicineOfficialOutline.ts` |
| Universal Matrix file list | `src/content/universalMatrixSeries.ts` |
| Achievements assets | `src/content/achievements2025Content.ts` |

## Notes

- If duplicate `block_key` exists in multiple workbooks, first workbook by filename wins.
- `spiritMedicineData.ts` remains the structural source for playlist video IDs / links.
- `vercel.json` is SPA-only; there is no server API.

## History

Use `CHANGELOG.md` only as optional background. For current guidance, rely on this file and `.cursor/rules/content-sync.mdc`.
