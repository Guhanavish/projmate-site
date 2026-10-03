# ProjMate Site

Marketing site for [ProjMate](https://github.com/Guhanavish/projmate-site) — a free,
offline-first project manager for Windows.

## Stack

- Vite + React + Tailwind CSS v4
- Lucide line icons (single icon family throughout)
- Zero image assets — product mockups are code-built CSS

## Design contract

- **Aesthetic:** corporate, trust-focused
- **Depth:** soft-shadow only (`shadow-card` / `shadow-lift` / `shadow-hero`)
- **Motion:** fade/slide entrances via `Reveal` + FAQ accordion; all gated behind
  `prefers-reduced-motion`
- **Accessibility:** skip link, semantic landmarks, labelled accordion/menu controls,
  visible focus rings, keyboard-operable nav

## Develop

```sh
npm install
npm run dev     # local dev server
npm run build   # production build -> dist/
```

## Deploy

Pushes to `main` deploy automatically once the Vercel project is linked.
The Download buttons point at the GitHub Releases page — attach the Windows
installer there (`projmate-site/releases`) before announcing the URL.
