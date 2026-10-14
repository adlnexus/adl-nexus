# Architecture reference

## Stack

- Astro static-site generation
- Node.js >=22.12.0
- Plain Astro components, HTML, CSS, and small browser scripts
- No database, server adapter, JavaScript UI framework, or CMS
- Existing host integration: Cloudflare Workers Builds; see release-and-cloudflare.md

## Commands

```sh
npm install       # install dependencies after cloning
npm run dev       # live local preview
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run verify    # production build and SEO checks
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

Each file under `src/pages/` creates a URL. English routes are concrete `.astro` files. `src/pages/[lang]/[...slug].astro` renders Serbian and Spanish routes through the same page components. German and Russian routes have been removed. Dedicated Pipedrive pricing/article/implementation routes are EN/SR; industry guides and workshop are EN only, labelled EN from Serbian links. Preserve stable URLs and advertise only existing language alternatives.

## Styling

Global design tokens and reusable utilities live in `src/styles/global.css`. Page-specific layout stays in the page’s scoped `<style>` block. Component-specific styling stays with the component.

Do not move the project to Tailwind, React, Vue, or another design system merely for convenience. Introduce a dependency only when the existing static approach cannot reasonably meet an approved requirement.

## JavaScript

Keep scripts progressive and minimal. The header script coordinates native `<details>` menus. The contact helper builds a `mailto:` enquiry. Preserve useful content and navigation when JavaScript is unavailable.

## Metadata

Shared metadata lives in `BaseLayout.astro`. Astro’s `site` is `https://adlnexus.com` for canonical and social-image URLs. Public target/domain mapping still needs verification against the existing Cloudflare integration; see the release reference.
