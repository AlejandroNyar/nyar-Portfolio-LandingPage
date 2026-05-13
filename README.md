# Nyar — Freelance Frontend Developer Portfolio

Personal portfolio built to attract freelance clients (SMBs) and showcase frontend skills to larger companies.

**Live:** [nyar.dev](https://nyar.dev) *(coming soon — deploying to Vercel)*

---

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS v4 |
| Animations | Framer Motion v12 |
| i18n | Custom React context — EN / ES / DE |
| Theming | next-themes — dark / light / system |
| Forms | React Hook Form + Zod + Formspree |
| Language | TypeScript strict |
| Deploy | Vercel |

## Features

- 10 sections: Hero, Services, Tech Stack, Projects, Process, About, Testimonials, Contact, Navigation, Footer
- Scroll-driven animations (word carousel, vertical process line, section reveals)
- Cursor spotlight effect on service cards
- Language switcher with localStorage persistence
- Dark / light / system theme toggle
- Placeholder NDA project cards (ready to swap for real work)
- SEO: metadata, JSON-LD (Person + WebSite + ProfessionalService), sitemap, robots.txt
- Mobile-first responsive layout

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, sitemap, robots)
├── components/
│   ├── layout/       # Navigation, Footer, Providers
│   ├── sections/     # One component per page section
│   ├── ui/           # Design system primitives
│   ├── projects/     # Project card + placeholder
│   └── contact/      # Form components
├── context/          # LocaleContext (i18n)
├── data/             # Content data (projects, services, skills…)
├── hooks/            # useScrollProgress, useActiveSection, useCursorPosition
├── i18n/             # Translation files (en, es, de)
├── lib/              # utils, constants
└── types/            # TypeScript interfaces
```

## Configuration

Before deploying, update these files:

| File | What to change |
|---|---|
| `src/lib/constants.ts` | Real GitHub, LinkedIn URLs |
| `src/data/personal.ts` | Bio, location, availability |
| `src/components/contact/ContactForm.tsx` | Replace `YOUR_FORM_ID` with Formspree ID |
| `src/app/layout.tsx` | Update `SITE_URL` once domain is live |
| `public/cv.pdf` | Add your actual CV |
| `public/avatar.jpg` | Add your photo |
| `public/og-image.png` | Add OG image (1200×630px) |
