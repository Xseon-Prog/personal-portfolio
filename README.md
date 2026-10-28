# Alexander Skurlatov — Portfolio

Personal professional portfolio built with React, TypeScript, Vite and SCSS. The visual direction uses the neon palette selected for the project.

## Design reference

The approved concept mockup is included at `docs/visual-concept.png`. The implementation follows its dark neon palette and layout direction, while the final page rendering uses the actual React components and project content.

## Included pages

- `/` — home and introduction
- `/about` — profile, areas of work, education and courses
- `/projects` — project catalogue with category filters
- `/projects/moscow-realtime` — MoscowRealtime case study
- `/projects/antifraud` — AntiFraud case study
- `/projects/office-bot` — office reminder bot case study
- `/achievements` — competitions and results
- `/contacts` — public contact links

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Validate and build

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`.

## Publish to GitHub

Create a new repository named `personal-portfolio` (or another name you choose), then from this folder run:

```bash
git init
git add .
git commit -m "feat: create personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/personal-portfolio.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub username. Do not add credentials or tokens to the project.

## Content notes

Before publishing publicly, review the office-bot chat screenshot (`src/assets/office-bot.png`) and redact any third-party names, avatars, or unrelated message content that should not be public.


The descriptions intentionally focus on the documented contribution: initial ideas, concept and project design, visual identity and logos, presentations, project planning, and limited deployment involvement. They do not claim full implementation of code written by other team members.

## Palette

- `#F20941` — neon raspberry / main accent
- `#050408` — near-black background
- `#19EA76` — neon green / active accents
- `#1180D0` — electric blue / secondary details
- `#610B25` — dark burgundy
- `#862298` — neon purple
- `#D3EEF9` — icy blue-white
