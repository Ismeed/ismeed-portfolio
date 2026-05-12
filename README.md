# Isma'il Sa'id — Founder Portfolio

A premium, modern, executive-level founder portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Live Features

- Fully responsive (mobile-first)
- Light & Dark mode (with system preference)
- Smooth scroll + animated section reveals
- Glassmorphism navigation + cards
- Premium typography (Inter + Space Grotesk)
- SEO-optimized metadata & OpenGraph
- Animated impact statistics
- Timeline-based achievements & education
- Modern project showcase
- Bento-style media gallery
- Premium contact section

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Adding Your Images

The portfolio ships with tiny placeholder image files. Replace them with your real photos using the **exact filenames** documented in:

- [`public/images/IMAGE_INSTRUCTIONS.md`](public/images/IMAGE_INSTRUCTIONS.md)

### Folder structure

```
public/images/
├── profile/         # Founder portraits
├── projects/        # Product previews
├── awards/          # Award & recognition photos
├── events/          # Speaking / ecosystem photos
├── logos/           # Brand marks (PNG with transparency)
└── certificates/    # Certificate images
```

### Resume

Drop your resume PDF at `public/resume.pdf` (it powers the "Download Resume" button in the hero).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx     # Root layout, fonts, metadata
│   ├── page.tsx       # Single-page composition
│   └── globals.css    # Global styles + design tokens
├── components/        # All section components
└── lib/
    └── data.ts        # All site content (single source of truth)
```

## Customizing Content

All copy, links, projects, achievements, education, etc. live in **[`src/lib/data.ts`](src/lib/data.ts)** — edit one file to update the whole site.

## Tech Stack

| Concern | Library |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 11 |
| Icons | lucide-react |
| Theming | next-themes |
| Type Safety | TypeScript |

---

© Isma'il Sa'id · Swifter Ventures LTD
