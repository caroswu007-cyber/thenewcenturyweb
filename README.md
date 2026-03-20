# ESS-ESW Official Website

The official website for the **Spirit Ambassador Association (SAA)** — a documentary and research platform exploring the intersection of science and the ethereal world.

Live site: [ess-esw.org](https://ess-esw.org)

---

## Project Overview

This website presents three documentary series produced by SAA:

| Series | Route | Status |
|--------|-------|--------|
| Woos Record of Soul | `/record-of-soul` | Active |
| Woos Spirit Medicine | `/spirit-medicine` | In Progress |
| Universal Matrix of Meta Awareness | `/universal-matrix` | In Progress |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite 8](https://vitejs.dev/) |
| Routing | [React Router v7](https://reactrouter.com/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |

---

## Project Structure

```
ess-esw-website/
├── src/
│   ├── content/
│   │   └── siteContent.ts        # All text content, links, and episode data
│   ├── components/
│   │   ├── Navbar.tsx             # Top navigation
│   │   ├── Footer.tsx             # Bottom footer
│   │   ├── home/
│   │   │   ├── Hero.tsx           # Homepage hero banner
│   │   │   ├── Introduction.tsx   # About section
│   │   │   ├── TruthSection.tsx   # Video series overview cards
│   │   │   ├── Achievements.tsx   # Achievements section
│   │   │   └── JoinSection.tsx    # CTA / Join section
│   │   └── record/
│   │       └── EpisodeCard.tsx    # Reusable episode card component
│   ├── views/
│   │   ├── HomeView.tsx                # Homepage
│   │   ├── RecordOfSoulView.tsx        # Season 1 directory
│   │   ├── WoosSpiritMedicineView.tsx  # Season 2 directory
│   │   └── UniversalMatrixView.tsx     # Season 3 directory
│   ├── App.tsx                    # Route definitions
│   ├── main.tsx                   # React entry point
│   └── index.css                  # Global styles + Tailwind theme
├── public/                        # Static assets (images, icons)
├── index.html                     # HTML entry point
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/<your-org>/ess-esw-website.git
cd ess-esw-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder, ready to deploy to any static host (Vercel, Netlify, Cloudflare Pages, etc.).

---

## Content Editing

All website text, episode titles, descriptions, and links are centralized in one file:

**`src/content/siteContent.ts`**

To update content without touching component code:
1. Open `src/content/siteContent.ts`
2. Find the section you want to edit (e.g., `recordOfSoul.volumes`)
3. Edit the `title`, `description`, or `link` fields
4. Save — the dev server hot-reloads automatically

---

## Pages & Routes

| Page | File | Description |
|------|------|-------------|
| `/` | `HomeView.tsx` | Homepage with hero, intro, series cards |
| `/record-of-soul` | `RecordOfSoulView.tsx` | Season 1 episode directory |
| `/spirit-medicine` | `WoosSpiritMedicineView.tsx` | Season 2 episode directory |
| `/universal-matrix` | `UniversalMatrixView.tsx` | Season 3 episode directory |

---

## Contributing

1. Fork this repository
2. Create a feature branch: `git checkout -b feature/your-change`
3. Make your changes
4. Commit: `git commit -m "describe your change"`
5. Push and open a Pull Request

For content-only changes (text, links, episode order), edit `src/content/siteContent.ts` directly.

---

## Design Guidelines

- **Color palette**: Dark background (`#0a0a0a`) with gold accent (`#c9a84c`)
- **Typography**: All headings use letter-spacing for a documentary/archival feel
- **Mobile**: All pages are responsive — test at 375px and 768px widths
- **Animations**: Framer Motion scroll-triggered fade-ins; keep subtle and purposeful

---

## License

© Spirit Ambassador Association. All rights reserved.
