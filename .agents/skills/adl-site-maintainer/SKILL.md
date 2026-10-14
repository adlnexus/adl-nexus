---
name: adl-site-maintainer
description: Maintain, extend, preview, verify, and prepare the ADL Nexus Astro website for publishing. Use for requests involving website copy, pages, navigation, responsive design, ADL visual identity, Pipedrive or Learnie content, English, Serbian, Spanish, German, or Russian localisation, contact details, brand assets, SEO/social metadata, GitHub handoff, or publication through the existing Cloudflare integration.
---

# Maintain the ADL website

Keep the site simple for nontechnical owners and preserve static output through the existing Cloudflare integration.

## Orient

1. Read the root `AGENTS.md`.
2. Inspect only the route, component, style, or asset files relevant to the request.
3. Read [references/architecture.md](references/architecture.md) when changing structure, routes, shared components, metadata, or dependencies.
4. Read [references/brand-and-content.md](references/brand-and-content.md) when changing copy, colours, imagery, product claims, contact data, or language.
5. Read [references/release-and-cloudflare.md](references/release-and-cloudflare.md) when preparing a release, GitHub handoff, domain, or deployment.

## Work

- Preserve Astro static output and file-based routing.
- Preserve route, navigation and call-to-action parity across English, Serbian, Spanish, German and Russian; only the displayed copy should vary by locale.
- Prefer existing components, tokens, and patterns over introducing a new system.
- Keep changes understandable to a future nontechnical maintainer.
- Treat the wordmark, domain, contact address, Insights content, and Serbian scope according to the pending decisions listed in `AGENTS.md`.
- Do not add a framework, CMS, backend, analytics, cookies, remote form processor, or new dependency unless required and explicitly approved.
- Never invent partner status, customer names, testimonials, case studies, metrics, or legal/privacy claims.

## Verify

1. Run `npm install` only when dependencies are absent.
2. Run `npm run build` after implementation.
3. For visual changes, inspect the rendered result at desktop and phone widths.
4. Test changed navigation, dropdowns, forms, and language links without sending real enquiries.
5. Check that no page introduces horizontal overflow.
6. Keep generated folders and secrets out of version control.

## Owner save, publish and recovery

For ordinary-language or voice requests to save, publish or restore a version, use [adl-site-release](../adl-site-release/SKILL.md). “Publish the site” (Serbian: “Objavi sajt”) authorises checks, committing all intended changes and the ordinary production push; no redundant confirmation is needed. A request to prepare instructions does not execute these actions.

## Commit

- Commit only when the user explicitly requests it.
- Review the staged diff and keep unrelated user changes out of the commit.
- Use Conventional Commits: `<type>(optional-scope): concise description`.
- Prefer `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`, `ci`, `chore`, or `revert`.
- Mark a breaking change with `!` or a `BREAKING CHANGE:` footer.
- Keep each commit focused on one coherent change. Examples: `feat(contact): add server-backed enquiry form` and `docs: clarify Cloudflare deployment`.

## Hand off

Explain the result in plain language. Include:

- what changed;
- what was checked;
- any content or brand decision the owner still needs to make;
- the exact next action only when the user must complete something manually.

Do not publish, deploy, push, submit forms, change DNS, or connect accounts unless the user explicitly requests it.
