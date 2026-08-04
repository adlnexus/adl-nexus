# Architecture reference

## Stack

- Astro static-site generation
- Node.js 22+
- Plain Astro components, HTML, CSS, and small browser scripts
- No database, server adapter, JavaScript UI framework, or CMS
- Intended host: Cloudflare Pages

## Commands

```sh
npm install       # install dependencies after cloning
npm run dev       # live local preview
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run verify    # alias for the production build check
```

## Source map

```text
src/
├── components/
│   ├── ClosingCta.astro
│   ├── Footer.astro
│   └── Header.astro
├── layouts/
│   └── BaseLayout.astro
├── data/
│   ├── localization.ts
│   └── localized-pages.ts
├── pages/
│   ├── index.astro
│   ├── services.astro
│   ├── about.astro
│   ├── insights.astro
│   ├── contact.astro
│   ├── solutions/
│   │   ├── pipedrive.astro
│   │   └── learnie.astro
│   └── [lang]/
│       ├── index.astro
│       └── [...slug].astro
└── styles/global.css
```

`public/` contains assets copied directly into the build. `dist/`, `.astro/`, and `node_modules/` are generated and must not be edited or committed.

## Routing

Each file under `src/pages/` creates a URL. English routes are concrete `.astro` files. `src/pages/[lang]/[...slug].astro` renders equivalent Serbian, Spanish, German and Russian routes through the same page components. Preserve route parity, stable public URLs and locale-aware links unless the owner approves a redirect or removal.

## Styling

Global design tokens and reusable utilities live in `src/styles/global.css`. Page-specific layout stays in the page’s scoped `<style>` block. Component-specific styling stays with the component.

Do not move the project to Tailwind, React, Vue, or another design system merely for convenience. Introduce a dependency only when the existing static approach cannot reasonably meet an approved requirement.

## JavaScript

Keep scripts progressive and minimal. The header script coordinates native `<details>` menus. The contact helper builds a `mailto:` enquiry. Preserve useful content and navigation when JavaScript is unavailable.

## Metadata

Shared metadata lives in `BaseLayout.astro`. When the final domain is known, set Astro’s `site` value in `astro.config.mjs` and use it to produce absolute canonical and social-image URLs.
