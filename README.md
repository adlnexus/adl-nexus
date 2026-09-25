# ADL Nexus website

The public website for **ADL Nexus**, built with [Astro](https://astro.build/). It is a fast, static website designed to be hosted on Cloudflare Pages.

You do not need to know how to code to update this project. The easiest workflow is to open the folder in Codex or Claude and describe the change you want in plain language.

## Ask an AI assistant

After cloning and opening this folder, try prompts such as:

> Read `AGENTS.md` and use the `adl-site-maintainer` skill. Start the website locally and show me the preview.

> Change the homepage headline to “…” while preserving the current design. Check mobile and run the production build when finished.

> Add this new team biography to the About page. Keep the existing tone and layout.

> Update an approved logo treatment from `public/brand/`, then verify every page.

> Prepare this site for Cloudflare Pages and explain any steps I must complete myself.

Codex reads [`AGENTS.md`](./AGENTS.md). Claude reads [`CLAUDE.md`](./CLAUDE.md), which points to the same instructions, so both assistants receive the same project guidance.

## Start the website yourself

You need [Node.js 22](https://nodejs.org/) or newer.

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
| Contact page and enquiry email | `src/pages/contact.astro` |
| Pipedrive page | `src/pages/solutions/pipedrive.astro` |
| Detailed English and Serbian Pipedrive copy | `src/data/pipedrive.ts` |
| Learnie page | `src/pages/solutions/learnie.astro` |
| Serbian, Spanish, German and Russian routes | `src/pages/[lang]/` |
| Homepage translations and language labels | `src/data/localization.ts` |
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

## Publish with Cloudflare Pages

The recommended setup connects Cloudflare Pages directly to GitHub. Once connected, every push to the main branch can publish automatically.

1. Push this repository to GitHub.
2. In Cloudflare, open **Workers & Pages** and choose **Create application → Pages → Connect to Git**.
3. Select this GitHub repository.
4. Use these build settings:

   | Setting | Value |
   | --- | --- |
   | Production branch | `main` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | leave empty |
   | Node.js version | `22` |

5. Select **Save and Deploy**.
6. Add the chosen custom domain in the project’s **Custom domains** area.

Cloudflare creates preview deployments for non-production branches. Use those previews to approve substantial copy or design changes before merging them into `main`.

## Before the real launch

The following items still need owner confirmation:

- Confirm the long-term public contact list. Current enquiries are addressed to `andjelkalz@gmail.com` and `danilo.labovic1@gmail.com`.
- Verify the confirmed `adlnexus.com` custom domain, HTTPS and canonical redirects after the first production deployment.
- Review the Serbian, Spanish, German and Russian translations with native speakers before launch.
- Replace draft Insights entries with approved articles or remove the section until articles are ready.
- Review privacy requirements before adding analytics, cookies, form processors, or tracking pixels.

## Technical summary

- Astro static output
- No database or server required
- No front-end framework or client-side dependency
- Responsive CSS with a small amount of JavaScript for menus and the email enquiry helper
- Thirty-five generated routes: seven equivalent routes in each of five languages
- Cloudflare Pages-compatible `dist/` output

For deeper implementation guidance, AI assistants should use [`.agents/skills/adl-site-maintainer/SKILL.md`](./.agents/skills/adl-site-maintainer/SKILL.md).
