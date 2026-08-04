# Release and Cloudflare reference

## Before release

1. Run `npm install` when dependencies are not present.
2. Run `npm run build` and fix real failures.
3. Review the changed pages at desktop and phone widths.
4. Check affected navigation, calls to action, language links, metadata, and contact details.
5. Check `git diff` and avoid committing generated output, secrets, or unrelated changes.
6. If the user requested a commit, review the staged diff and use a focused Conventional Commit message in the form `<type>(optional-scope): concise description`.

Examples:

```text
feat(contact): add server-backed enquiry form
fix(nav): keep language menu inside the mobile viewport
docs: clarify Cloudflare deployment
```

Use `!` or a `BREAKING CHANGE:` footer for breaking changes. Do not commit or push unless the user explicitly requests it.

## Cloudflare Pages settings

```text
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: empty
Node.js version: 22
```

The preferred release flow is GitHub integration rather than committing `dist/` or manually uploading it.

## Domain setup

After the owner selects a domain:

1. Add `site: 'https://example.com'` to `astro.config.mjs` using the real HTTPS domain.
2. Add canonical metadata and absolute Open Graph image URLs through `BaseLayout.astro`.
3. Configure the custom domain in Cloudflare Pages.
4. Verify the primary domain, `www` redirect decision, HTTPS, metadata previews, and the contact destination.

## Authority boundary

Building and checking locally is allowed as part of implementation. Publishing to GitHub, creating Cloudflare resources, deploying, modifying DNS, or connecting external services requires an explicit user request. Explain any authentication step that the owner must complete.
