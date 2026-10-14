# ADL Nexus website

The public website for **ADL Nexus**, built with [Astro](https://astro.build/). It is a static Astro website published by the existing GitHub → Cloudflare Workers integration.

You do not need to know how to code to update this project. The easiest workflow is to open the folder in Codex or Claude and describe the change you want in plain language.

Start here: owner guides in [English](docs/OWNER_GUIDE_EN.md) and [Serbian](docs/OWNER_GUIDE_SR.md), including voice commands to save, publish and restore versions.

## Ask an AI assistant

After cloning and opening this folder, try prompts such as:

> Read `AGENTS.md` and use the `adl-site-maintainer` skill. Start the website locally and show me the preview.

> Change the homepage headline to “…” while preserving the current design. Check mobile and run the production build when finished.

> Add this new team biography to the About page. Keep the existing tone and layout.

> Update an approved logo treatment from `public/brand/`, then verify every page.

> Publish the site. Check and commit all latest intended changes, then push.

Codex reads [`AGENTS.md`](./AGENTS.md). Claude reads [`CLAUDE.md`](./CLAUDE.md), which points to the same instructions, so both assistants receive the same project guidance.

## Start the website yourself

You need [Node.js](https://nodejs.org/) >=22.12.0.

1. Download or clone the repository.
2. Open a terminal in this folder.
3. Install the project:

   ```sh
   npm install
   ```

4. Start the local preview:

   ```sh
   npm run dev
   ```

5. Open [http://localhost:4321](http://localhost:4321).

Changes normally appear in the browser as soon as a file is saved. Press `Ctrl+C` in the terminal when you want to stop the preview.

## Important files

| What you want to change | File or folder |
| --- | --- |
| Homepage | `src/pages/index.astro` |
| Services | `src/pages/services.astro` |
| About us | `src/pages/about.astro` |
| Insights | `src/pages/insights.astro` |
| Contact page / shared enquiry email | `src/pages/contact.astro` / `src/data/contact.ts` |
| Pipedrive page | `src/pages/solutions/pipedrive.astro` |
| Detailed English and Serbian Pipedrive copy | `src/data/pipedrive.ts` |
| Learnie page | `src/pages/solutions/learnie.astro` |
| Serbian and Spanish routes | `src/pages/[lang]/` |
| Homepage copy / shared language labels | `src/data/home.ts` / `src/data/localization.ts` |
| Translated subpage copy | `src/data/localized-pages.ts` |
| Header and navigation | `src/components/Header.astro` |
| Footer and contact details | `src/components/Footer.astro` |
| Shared colours, type and buttons | `src/styles/global.css` |
| Approved ADL Nexus identity assets | `public/brand/` |
| Public images and social card | `public/` |
| SEO implementation checklist | `docs/plans/seo-improvement-plan.md` |
| Generated SEO verification | `scripts/verify-seo.mjs` |

See [`docs/CONTENT_AND_BRAND.md`](./docs/CONTENT_AND_BRAND.md) before changing visual identity, product claims, languages, or contact information.

## Check a change before publishing

Run the complete production and SEO check:

```sh
npm run verify
```

A successful verification builds the publishable site in `dist/`, checks all generated routes, validates canonical and language metadata, checks internal links, and verifies the sitemap and robots file. Do not edit `dist/`; Astro recreates it on every build.

For important visual changes, check at least:

- the homepage on a wide screen;
- the homepage at phone width;
- the mobile navigation;
- the page you changed;
- links and buttons affected by the change.

## Commit changes

This repository uses [Conventional Commits](https://www.conventionalcommits.org/). A commit message should describe one coherent change using this format:

```text
<type>(optional-scope): concise description
```

Common examples:

```text
feat(contact): add server-backed enquiry form
fix(nav): keep language menu inside the mobile viewport
docs: explain Cloudflare deployment
chore: update development tooling
```

Use `feat` for a new user-facing capability, `fix` for a bug, and `docs` for documentation-only changes. Other useful types are `style`, `refactor`, `test`, `build`, `ci`, `chore`, and `revert`. Add `!` before the colon, or a `BREAKING CHANGE:` footer, when a change is not backward-compatible.

Ask an AI assistant to review the diff and suggest a Conventional Commit message if you are unsure. The assistant must not commit or push unless you explicitly request it.

## Publish through the existing integration

The owner confirmed that an ordinary push to `origin/master` automatically publishes through the existing Cloudflare Workers project `adl-nexus`. “Publish the site” (Serbian: “Objavi sajt”) authorises reviewing and checking all latest intended site changes, committing them if needed and pushing, without another redundant confirmation. “Save changes” (Serbian: “Sačuvaj izmene”) creates a local commit only. These example phrases describe the workflow; reading or editing this guide does not execute it.

Use the [release skill](.agents/skills/adl-site-release/SKILL.md) for save, publish and non-destructive revert, and the [release reference](.agents/skills/adl-site-maintainer/references/release-and-cloudflare.md) for the recorded target and known verification limits. Do not create a new Pages project, rename the production branch, force-push or manually deploy as part of this workflow.

A successful GitHub push, successful Cloudflare check and confirmed public page are reported separately. The actual public Worker URL/custom-domain mapping still needs to be recorded; the latest audit of `adlnexus.com` did not find the expected Pipedrive routes. This does not change the owner-confirmed push automation.

## Before the real launch

The following items still need owner confirmation:

- The public enquiry address is confirmed: `info@adlnexus.com`; no contact decision is pending.
- Verify the confirmed `adlnexus.com` custom domain, HTTPS and canonical redirects after the first production deployment.
- Complete the English adaptation and Serbian/Spanish language review. German and Russian routes have been removed.
- Replace draft Insights entries with approved articles or remove the section until articles are ready.
- Review privacy requirements before adding analytics, cookies, form processors, or tracking pixels.

## Technical summary

- Astro static output
- No database or server required
- No front-end framework or client-side dependency
- Responsive CSS with a small amount of JavaScript for menus and the email enquiry helper
- 41 generated HTML pages: 40 content pages plus 404; 37 sitemap entries
- EN/SR/ES core routes, EN/SR detailed Pipedrive pages, English-only industry guides and workshop
- Static `dist/` output; existing Cloudflare Workers Builds integration

For deeper implementation guidance, AI assistants should use [`.agents/skills/adl-site-maintainer/SKILL.md`](./.agents/skills/adl-site-maintainer/SKILL.md).
