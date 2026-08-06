# ADL Nexus agent guide

This repository is designed for work by Codex, Claude, and human collaborators. Read this file before editing.

## Start here

For any request involving site copy, design, routes, navigation, brand assets, responsive behavior, or deployment, read and follow:

`./.agents/skills/adl-site-maintainer/SKILL.md`

Use the skill’s references only when relevant to the current task.

## Project intent

ADL Nexus has two connected audiences:

1. Organisations looking for carefully selected software.
2. Technology companies looking for market entry, business development, sales representation, and customer-growth support.

The central positioning is: **Carefully selected software. One trusted partner.**

## Non-negotiable design rules

- Preserve the restrained red, black, white, and warm-neutral visual system.
- Prefer typography, spacing, borders, and geometric forms over generic corporate imagery.
- Keep the homepage hero simple: one primary contact action, no autoplay media, intrusive animation, or competing messages.
- Maintain strong contrast, keyboard access, visible focus states, and reduced-motion support.
- Check desktop and mobile layouts after visual changes.
- Treat the current text-based ADL mark as temporary. Do not invent a final logo.
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

## Current owner decisions pending

- Final logo assets
- Public contact email confirmation
- Native-speaker review of Serbian, Spanish, German and Russian copy
- Final Insights copy
- Privacy/analytics choices

When one of these affects a requested change, use an obvious reversible placeholder and state the assumption.
