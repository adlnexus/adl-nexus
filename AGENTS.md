# ADL Nexus agent guide

This repository is designed for work by Codex, Claude, and human collaborators. Read this file before editing.

## Start here

For any request involving site copy, design, routes, navigation, brand assets, responsive behavior, or deployment, read and follow:

`./.agents/skills/adl-site-maintainer/SKILL.md`

Use the skill’s references only when relevant to the current task.

For owner requests to save, publish, check publication or restore a version, also read:

`./.agents/skills/adl-site-release/SKILL.md`

Owner command meanings (English / Serbian): “Save changes” / “Sačuvaj izmene” means local commit. “Publish the site” / “Objavi sajt” explicitly authorises checking all latest intended site changes, committing them if needed and a normal push to the existing production upstream (`origin/master`), which triggers automatic publication. Do not ask for redundant confirmation after that clear command; preserve actual approval/access restrictions. “Restore the previous version” / “Vrati prethodnu verziju” means a non-destructive local revert; “Restore and publish” / “Vrati i objavi” also authorises the push. A request to document these commands does not execute them.

## Project intent

ADL Nexus has two connected audiences:

1. Organisations looking for carefully selected software.
2. Technology companies looking for market entry, business development, sales representation, and customer-growth support.

The central positioning is: **Carefully selected software. One trusted partner.**

## Non-negotiable design rules

- Preserve the client's stronger warm website palette (saturated golden yellow, orange, coral, grey and near-white), near-black grayscale ADL light-header treatment, and partner-specific palettes. Do not tone the reference down into beige or brown. Keep the original logo assets unchanged. See `docs/CONTENT_AND_BRAND.md`.
- Prefer typography, spacing, borders, and geometric forms over generic corporate imagery.
- Keep the homepage hero simple: one primary contact action, no autoplay media, intrusive animation, or competing messages.
- Maintain strong contrast, keyboard access, visible focus states, and reduced-motion support.
- Check desktop and mobile layouts after visual changes.
- Use only the approved ADL Nexus logo assets in `public/brand/`; do not redraw or distort the mark.
- Do not introduce new fonts, frameworks, icon libraries, analytics, cookies, or remote services without a clear requirement.

## Technical rules

- Preserve Astro’s static output and existing file-based routing.
- Use plain Astro, HTML, CSS, and small progressive-enhancement scripts unless the feature genuinely requires more.
- Keep shared layout in `src/layouts/`, reusable sections in `src/components/`, global tokens in `src/styles/global.css`, and routes in `src/pages/`.
- Use Conventional Commits for every commit: `<type>(optional-scope): concise description`.
- Prefer the types `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`, `ci`, `chore`, and `revert`. Mark breaking changes with `!` or a `BREAKING CHANGE:` footer.
- Keep each commit focused on one coherent change and never include unrelated user work.
- Never edit generated output in `dist/` or `.astro/`.
- Never commit `node_modules/`, `.env` files, credentials, API keys, Cloudflare tokens, or personal data beyond owner-approved public contact details.
- Preserve unrelated user changes in a dirty working tree.

## Required workflow

1. Read the relevant source and the skill reference appropriate to the request.
2. Make the smallest coherent change that fully satisfies the request.
3. Run `npm install` only when dependencies are missing.
4. Preview with `npm run dev`. In supported agent environments, background mode is acceptable.
5. Run `npm run build` before declaring implementation complete.
6. For visual changes, inspect the rendered page at desktop and phone widths and check for horizontal overflow.
7. Before committing, review the staged diff and use a Conventional Commit message such as `feat(contact): add server-backed enquiry form` or `docs: clarify Cloudflare deployment`.
8. Report what changed, what was verified, and any owner decisions still required.

Do not deploy, connect external services, send enquiries, publish to GitHub, or change DNS unless the user explicitly requests that action.

## Confirmed owner decisions

- Production domain: `adlnexus.com`
- Public contact email: `info@adlnexus.com` (one shared enquiry address, confirmed 13 October 2026).
- The final ADL Nexus identity uses blue `#004A98`, mint `#91CDC3`, grey `#7A97AB`, black `#1A171B`, and white.
- The website UI finish approved on 29 September 2026 uses warm gradients, abstract flowing backgrounds and a grayscale light-header wordmark presentation; it does not modify logo source assets, layout, typography or responsive behaviour.
- “GLOBAL CONNECTIONS” is the secondary logo tagline for footer and social treatments. It does not replace the primary site positioning.
- ADL Nexus may publish the approved Pipedrive Premier Partner claim and supplied affiliate trial link on the English and Serbian Pipedrive pages.

- Confirmed 14 October 2026: the Pipedrive workshop is free and follows the written Word brief; do not add template/screenshot pricing, duration or session conditions.
- Newsletter is deferred and remains omitted, without a signup form or service; retain supplied copy for later.
- Keep the approved “Unlimited access” / “Neograničen pristup” pricing copy. It refers to full access during the trial, not unlimited paid-plan usage; preserve the existing usage-limit disclaimer.
- Keep existing Pipedrive prices in EUR and the existing annual-billing presentation; do not convert currencies.

## Current owner decisions pending

- Owner review of the newly adapted British-English Pipedrive sections
- Native-speaker review of Serbian, Spanish, German and Russian copy
- Final Insights copy
- Privacy/analytics choices

When one of these affects a requested change, use an obvious reversible placeholder and state the assumption.
