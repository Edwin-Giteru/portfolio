# Edwin Giteru — Portfolio

A one-page personal portfolio built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production build is written to `dist/`. Deploy that folder to any static
host (Vercel, Netlify, GitHub Pages, Render static site, etc.).

## Updating content

All personal content — name, bio, skills, experience, projects, education,
and contact details — lives in one place:

```
src/data/siteData.js
```

Edit that file to update the site; you shouldn't need to touch any component
markup for routine content changes.

## Replacing the profile photo

Swap `src/assets/profile.jpg` for a new image with the same filename, or
update the import path in `src/components/Hero/Hero.jsx`.

## Project structure

```
src/
  assets/            Images
  components/        One folder per section (JSX + scoped CSS)
  data/              siteData.js — single source of truth for content
  styles/            Global styles and design tokens (tokens.css)
  App.jsx            Composes all sections
  main.jsx           App entry point
```
