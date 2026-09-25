# Content and brand reference

Use this document when reviewing or changing copy, visual identity, product positioning, languages, or contact details.

## Brand position

ADL Nexus connects two sides of the same commercial relationship:

- It helps organisations choose carefully selected software.
- It helps technology companies enter and grow in the right markets.

Core line:

> Carefully selected software. One trusted partner.

Supporting statement:

> We help organisations find the right software solutions and help technology companies enter and grow in new markets.

## Voice

Write with calm confidence. Keep sentences clear, direct, commercially informed, and free of inflated claims.

Prefer:

- specific benefits;
- short headings;
- partnership, focus, fit, clarity, and long-term value;
- British English spelling where applicable (`organisations`, `optimise`).

Avoid:

- “revolutionary”, “world-class”, “game-changing”, and similar unsupported superlatives;
- vague claims about global reach or performance;
- generic corporate filler;
- suggesting ADL represents products or partners not explicitly approved;
- claiming official partner status without evidence.

## Visual system

Primary colours are defined in `src/styles/global.css`:

- ADL blue: `#004A98`
- ADL mint: `#91CDC3`
- ADL grey: `#7A97AB`
- Ink: `#1A171B`
- White: `#ffffff`

Warm cream `#F5F3EF` may be used as a supporting page background. The direction is editorial and architectural: generous spacing, large type, fine borders, selective blue and mint accents, and simple geometric forms.

Approved logo assets live in `public/brand/`. Use the no-tagline wordmark in headers, the “GLOBAL CONNECTIONS” lockup in the footer and social artwork, and the standalone symbol for decoration and favicons. Do not redraw, distort, recolour, or combine the mark with new elements. The green ADL logo variant is reserved for the Pipedrive experience and uses `#073F3B`, `#176B59`, and `#55A995` on the approved master geometry; these logo colours are not the page palette.

“GLOBAL CONNECTIONS” is a secondary logo tagline. The primary site positioning remains:

> Carefully selected software. One trusted partner.

## Approved solution descriptions

### Pipedrive

The easy and effective CRM for closing deals. It helps teams track pipelines, optimise leads, manage deals, and automate sales processes.

Primary action: **Book a demo**
Secondary action on every detailed Pipedrive page: **Try it free for 30 days** via the owner-supplied affiliate link, translated for each locale.

All five locales use the shared detailed page schema in `src/data/pipedrive.ts`. The approved “official Pipedrive Premier Partner in the Adria region” claim appears only in English and Serbian; Spanish, German, and Russian use neutral ADL Nexus implementation wording until that claim is approved for those locales.

The detailed Pipedrive experience uses a product-specific system aligned with Pipedrive’s current public identity: green `#017737`, mint `#D7F9D3`, violet `#6861F2`, dark navy `#192435`, pale lavender and white. ADL navigation and footer remain recognisably ADL. Use only partner-approved Pipedrive logos, screenshots, badges or photography; until those assets are supplied, retain the local abstract product visual rather than copying website imagery.

The homepage product cards use the official Pipedrive wordmark SVG and primary green displayed on Pipedrive’s public homepage, stored locally at `public/partners/pipedrive-logo.svg` without altering its vector geometry.

The supplied English wording is approved where present. British-English adaptations and the Serbian, Spanish, German and Russian detailed-page translations remain flagged for owner or native-speaker review.

### Learnie

A mobile-first learning platform that helps organisations preserve valuable experience, improve onboarding, and support continuous learning without complex traditional training systems.

The Learnie experience uses the current public identity from `mylearnie.com`: the official “Learnie — Community Microlearning” logo stored locally at `public/partners/learnie-logo.png`, logo green `#0E8B44`, live-site accent green `#008A12`, white, and neutral grey `#717171`. Use pale tints of the approved greens for backgrounds, while retaining ADL navigation, typography, spacing, and accessibility conventions.

Primary action: **Book a demo**
Secondary action: **Learn more**

## Contact and privacy

The current public enquiry recipients are `andjelkalz@gmail.com` and `danilo.labovic1@gmail.com`; treat the long-term contact list as provisional until the owner confirms it.

The current form opens the visitor’s email application. It does not store or transmit data through a website backend. Do not add a form processor, CRM, newsletter tool, analytics platform, cookie banner, or tracking pixel without explicit owner approval and a privacy review.

## Languages

English is the default language. Equivalent routes are available in:

- Serbian: `/sr/`
- Spanish: `/es/`
- German: `/de/`
- Russian: `/ru/`

Translated homepages use `src/pages/[lang]/index.astro`. Translated subpages are generated through `src/pages/[lang]/[...slug].astro` using the same page components as English, so navigation, layouts and calls to action remain equivalent. Homepage copy and shared labels live in `src/data/localization.ts`; subpage copy lives in `src/data/localized-pages.ts`.

Whenever important English positioning or route behaviour changes, update and verify every locale or flag each translation as needing owner review. Do not silently machine-translate sensitive commercial or legal copy and present it as approved. All current translations require native-speaker review before launch.

## Draft content

Insights titles and summaries are editorial placeholders until full articles are approved. Do not fabricate authors, publication dates, case studies, customer logos, testimonials, revenue figures, or performance statistics.
