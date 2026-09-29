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

The approved logo identity remains:

- ADL blue: `#004A98`
- ADL mint: `#91CDC3`
- ADL grey: `#7A97AB`
- Ink: `#1A171B`
- White: `#ffffff`

The owner-approved website finish (29 September 2026) follows the client's stronger reference palette, defined separately in `src/styles/global.css`: golden yellow `#FFCA45`, orange `#FF8A3D`, coral `#F16858`, and neutral grey `#969696`. Do not mute these into beige, dusty pink or brown. Near-white `#FFFDFB` remains the primary background. Saturated orange-red `#C04416` supports readable small accents; `#E65018` is reserved for large highlighted hero text. Primary ADL buttons match the supplied reference with a clearly visible light-orange-to-coral-to-red gradient (`#FF8A3D` → `#F45D3E` → `#D32F23`), white labels, a soft warm glow and a faint top-edge highlight. Keep normal text contrast at least 4.5:1 and large headings at least 3:1 where possible, using local background softening behind overlapping copy rather than desaturating the entire palette. Accessibility review: the specifically requested brighter CTA treatment does not provide 4.5:1 contrast for white labels across its light-orange portion; do not describe these buttons as WCAG AA compliant without revisiting the label or fill treatment.

This is a colour-and-finish treatment, not a redesign: preserve the existing structure, typography, spacing, sizing, responsive behaviour and geometric paths. Soft, large-scale peach and lavender flowing fields (`public/brand/adl-nexus-hero-ambient.svg`) add abstract depth behind the directional ribbons. Avoid glossy, bevelled, extruded, glass-like or strongly shadowed treatments. The approved logo source assets and partner-specific colours are unchanged. At the owner's explicit request, the light ADL header renders its existing wordmark in near-black grayscale using a presentation filter; the dark drawer keeps its white wordmark and Pipedrive keeps its green variant.

The shared ADL hero uses original, static directional bands inspired by vintage blank-video packaging (`public/brand/adl-nexus-hero-bands.svg`). Preserve the four paths and their placement; use yellow, amber/orange, coral/red and grey with understated tonal gradients. Keep them as a full-hero, softened background on desktop and phones, fading towards the copy for readability. This artwork is decoration, not a logo; do not add VHS labels or borrowed brand marks. Partner-specific Pipedrive and Learnie heroes retain their own visual systems.

CTA buttons, including the header's “Let’s talk” action, use fully rounded pill edges to match the client's reference. Preserve their existing dimensions, padding and typography; the owner explicitly approved changing their corner treatment.

The mobile navigation uses a dark ink background, the approved white wordmark, warm peach active/focus accents and the same subdued directional bands. The owner requested a more dimensional menu toggle: keep its 48-pixel footprint and rounded corners. When closed, use a subtle charcoal gradient with white lines and a shallow shadow, tying it to the black wordmark and headline rather than adding another warm colour block over the ribbons. The open state keeps its approved amber gradient and raised finish on the dark drawer. Pressing it reduces the shadow. Keep links comfortably tappable and allow scrolling on short screens.

Hero footers share the homepage's thin divider and compact labels. Services, About Us, Insights and Contact use page-specific themes from `src/data/hero-footer.ts`; the homepage keeps its location and representation labels. Show three labels on desktop and the outer two on phones. New translated labels remain subject to native-speaker review.

Approved logo assets live in `public/brand/`. Use the no-tagline wordmark in headers, the “GLOBAL CONNECTIONS” lockup in the footer and social artwork, and the standalone symbol for decoration and favicons. Do not redraw, distort, modify the source colours, or combine the mark with new elements. The neutral light-header presentation described above is owner-approved. The green ADL logo variant is reserved for the Pipedrive experience and uses `#073F3B`, `#176B59`, and `#55A995` on the approved master geometry; these logo colours are not the page palette.

“GLOBAL CONNECTIONS” is a secondary logo tagline. The primary site positioning remains:

> Carefully selected software. One trusted partner.

### Homepage layout update

The subsequently approved homepage refresh applies only below the existing hero, across all five locales. Keep the header, drawer, hero proportions, artwork and mobile opacity unchanged. `HomeContent.astro` shares the audience and value sections while preserving the existing copy and actions for each locale. Use compact white rounded cards, smaller below-hero headings, and static warm/lavender flowing backgrounds. Featured solutions use two side-by-side cards with the real partner logos and existing demo/exploration links; no fabricated product screenshots or additional claims. The homepage closing CTA and footer use opt-in compact variants; interior-page variants stay unchanged. Preserve existing footer contact details and do not add unavailable social or legal links.

## Approved solution descriptions

The homepage Featured solutions cards now form a manual, scroll-snapping carousel, with a neighbouring-card preview, two position indicators and previous/next buttons. Keep the light ADL surfaces and partner accents, all existing copy and actions, and no autoplay. Support native touch scrolling, keyboard navigation and reduced motion; retain scrollable content without JavaScript. New control labels are localised in all five languages and remain subject to the usual native-speaker review.

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
