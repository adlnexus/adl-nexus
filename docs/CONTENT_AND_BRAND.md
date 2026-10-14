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

The owner-approved website finish (29 September 2026) follows the client's stronger reference palette, defined separately in `src/styles/global.css`: golden yellow `#FFCA45`, orange `#FF8A3D`, coral `#F16858`, and neutral grey `#969696`. Do not mute these into beige, dusty pink or brown. Near-white `#FFFDFB` remains the primary background. Saturated orange-red `#C04416` supports readable small accents; `#E65018` is reserved for large highlighted hero text. Primary ADL buttons match the supplied reference with a clearly visible light-orange-to-coral-to-red gradient (`#FF8A3D` → `#F45D3E` → `#D32F23`), white labels, a soft warm glow and a faint top-edge highlight. Keep normal text contrast at least 4.5:1 and large headings at least 3:1 where possible, using local background softening behind overlapping copy rather than desaturating the entire palette. The shared header CTA uses the owner-requested darker warm gradient (#C44B19 → #C33F28 → #B52820; hover/focus #AC3C14 → #B33220 → #9D221B), with white text contrast above 4.5:1. Accessibility review: the brighter body CTA treatment does not provide 4.5:1 contrast for white labels across its light-orange portion; do not describe these buttons as WCAG AA compliant without revisiting the label or fill treatment.

This is a colour-and-finish treatment, not a redesign: preserve the existing structure, typography, spacing, sizing, responsive behaviour and geometric paths. Soft, large-scale peach and lavender flowing fields (`public/brand/adl-nexus-hero-ambient.svg`) add abstract depth behind the directional ribbons. Avoid glossy, bevelled, extruded, glass-like or strongly shadowed treatments. The approved logo source assets and partner-specific colours are unchanged. At the owner's explicit request, the light ADL header renders its existing wordmark in near-black grayscale using a presentation filter; the dark drawer keeps its white wordmark and Pipedrive keeps its green variant.

The shared ADL hero uses original, static directional bands inspired by vintage blank-video packaging (`public/brand/adl-nexus-hero-bands.svg`). Preserve the four paths and their placement; use yellow, amber/orange, coral/red and grey with understated tonal gradients. Keep them as a full-hero, softened background on desktop and phones, fading towards the copy for readability. This artwork is decoration, not a logo; do not add VHS labels or borrowed brand marks. Partner-specific Pipedrive and Learnie heroes retain their own visual systems.

CTA buttons, including the header's “Let’s talk” action, use fully rounded pill edges to match the client's reference. Preserve their existing dimensions, padding and typography; the owner explicitly approved changing their corner treatment. The owner subsequently requested that the Pipedrive header CTA match the homepage header CTA: share its warm gradient, shadow, hover and keyboard-focus treatment. This exception applies to the header action only; the remaining Pipedrive palette stays unchanged.

The mobile navigation uses a dark ink background, the approved white wordmark, warm peach active/focus accents and the same subdued directional bands. The owner requested a more dimensional menu toggle: keep its 48-pixel footprint and rounded corners. When closed, use a subtle charcoal gradient with white lines and a shallow shadow, tying it to the black wordmark and headline rather than adding another warm colour block over the ribbons. The open state keeps its approved amber gradient and raised finish on the dark drawer. Pressing it reduces the shadow. Keep links comfortably tappable and allow scrolling on short screens.

Hero footers share the homepage's thin divider and compact labels. Services, About Us, Insights and Contact use page-specific themes from `src/data/hero-footer.ts`; the homepage keeps its location and representation labels. Show three labels on desktop and the outer two on phones. New translated labels remain subject to native-speaker review.

Approved logo assets live in `public/brand/`. Use the no-tagline wordmark in headers, the “GLOBAL CONNECTIONS” lockup in the footer and social artwork, and the standalone symbol for decoration and favicons. Do not redraw, distort, modify the source colours, or combine the mark with new elements. The neutral light-header presentation described above is owner-approved. The green ADL logo variant is reserved for the Pipedrive experience and uses `#073F3B`, `#176B59`, and `#55A995` on the approved master geometry; these logo colours are not the page palette.

“GLOBAL CONNECTIONS” is a secondary logo tagline. The primary site positioning remains:

> Carefully selected software. One trusted partner.

### Homepage layout update

The subsequently approved homepage refresh applies only below the existing hero, across all five locales. Keep the header, drawer, hero proportions, artwork and mobile opacity unchanged. `HomeContent.astro` shares the audience and value sections while preserving the existing copy and actions for each locale. Use compact white rounded cards, smaller below-hero headings, and static warm/lavender flowing backgrounds. Featured solutions use two side-by-side cards with the real partner logos and existing demo/exploration links; no fabricated product screenshots or additional claims. The homepage closing CTA and footer use opt-in compact variants; interior-page variants stay unchanged. Preserve existing footer contact details and do not add unavailable social or legal links.

The owner's subsequent continuous-ribbon request supersedes the unchanged homepage-artwork constraint above: `HomeRibbons.astro` extends the upper hero bands into one four-colour zig-zag through the audience, Why ADL, carousel, closing and footer. The lower hero bands taper into the continuation; text, section dimensions, navigation, ambient artwork and partner assets remain unchanged. Turns follow measured section boundaries in every locale, with slimmer bands on phones. Ribbons sit behind cards and content and never intercept input. At the owner's request, colour now fills from the top down with scroll progress: scrolling down brightens the path, while scrolling up reverses the reveal to the subdued base colour. The footer reaches full colour at the bottom of the page, with no permanent downward fade. Only a short leading edge blends into the faint unrevealed portion. The geometry stays static; a passive, frame-throttled scroll handler updates the colour mask, while ResizeObserver recalculates paths only when layout sizes change. Reduced-motion visitors see the fully coloured path without scroll-linked effects. Fine surface-coloured text halos and darker body copy protect readability without adding large panels over the ribbons. Without JavaScript the original static hero remains available. Interior heroes and the drawer keep the original SVG unchanged; the old disconnected below-hero ribbon fragments are removed.

## Approved solution descriptions

On desktop (above 900px), the complete ribbon outlines—including the outside tips of each bend—must remain within the main `.container` margins. Move bends inward rather than clipping them at the viewport edges. The mobile ribbon geometry is unchanged by this constraint.

Subsequent ribbon refinements supersede the short leading edge and static drawer treatment described above: centre a soft, viewport-scaled 180–300px colour blend on the screen, retain a wider lower-hero taper, and use wider 10–16px continuation stripes on mobile. Why ADL uses a feathered near-white veil; the footer uses a translucent dark veil, keeping the path subtly visible beneath each surface. Exclude the hero CTA from text halos so its label stays crisp. The mobile drawer reuses the homepage's measured ribbon geometry and viewport position, with subdued dark-menu colouring; interior ADL pages align the original static artwork to their hero.

The homepage Featured solutions cards now form a manual, scroll-snapping carousel, with a neighbouring-card preview, two position indicators and previous/next buttons. Keep the light ADL surfaces and partner accents, all existing copy and actions, and no autoplay. Support native touch scrolling, keyboard navigation and reduced motion; retain scrollable content without JavaScript. New control labels are localised in all five languages and remain subject to the usual native-speaker review.

### Pipedrive

The easy and effective CRM for closing deals. It helps teams track pipelines, optimise leads, manage deals, and automate sales processes.

Primary action: **Book a demo**
Secondary action on every detailed Pipedrive page: **Try it free for 30 days** via the owner-supplied affiliate link, translated for each locale.

The EN/SR/ES landing pages use the shared detailed page schema in `src/data/pipedrive.ts`, with Spanish copy in `src/data/pipedrive-es.json`. The owner-requested Spanish adaptation of the completed English page (14 October 2026) carries the same approved Pipedrive Premier Partner claim and shared components. Dedicated Spanish subpages are out of scope; links identify existing English destinations. German and Russian routes have been removed.

The reviewed EN/SR/ES Pipedrive landing uses the supplied partner-template palette: dark green `#1f5b49`, near-white `#faf8f1` and champagne `#f0e9d6`, with matching shared sections. ADL navigation and footer remain recognisably ADL. Use only partner-approved Pipedrive logos, screenshots, badges or photography; until those assets are supplied, retain the local abstract product visual rather than copying website imagery.

The homepage product cards use the official Pipedrive wordmark SVG and primary green displayed on Pipedrive’s public homepage, stored locally at `public/partners/pipedrive-logo.svg` without altering its vector geometry.

The supplied English wording is approved where present. British-English adaptations remain flagged for owner review; Serbian and Spanish translations require native-speaker review.

### Learnie

A mobile-first learning platform that helps organisations preserve valuable experience, improve onboarding, and support continuous learning without complex traditional training systems.

The Learnie experience uses the current public identity from `mylearnie.com`: the official “Learnie — Community Microlearning” logo stored locally at `public/partners/learnie-logo.png`, logo green `#0E8B44`, live-site accent green `#008A12`, white, and neutral grey `#717171`. Use pale tints of the approved greens for backgrounds, while retaining ADL navigation, typography, spacing, and accessibility conventions.

Primary action: **Book a demo**
Secondary action: **Learn more**

## Contact and privacy

The owner-approved public enquiry address is `info@adlnexus.com` (confirmed 13 October 2026). Use one shared email entry and `mailto:info@adlnexus.com` across all locales, contact forms and footers.

The current form opens the visitor’s email application. It does not store or transmit data through a website backend. Do not add a form processor, CRM, newsletter tool, analytics platform, cookie banner, or tracking pixel without explicit owner approval and a privacy review.

## Languages

English is the default language. Following the October 2026 owner decision, equivalent routes are available in:

- Serbian: `/sr/`
- Spanish: `/es/`

German and Russian translations and routes have been removed, not redirected. Old DE/RU addresses return 404. Spanish remains fully supported and visible. About Us and Insights links are hidden throughout navigation and footers, while their EN/SR/ES pages remain accessible directly. Insights stays noindex.

Translated homepages use `src/pages/[lang]/index.astro`. Translated subpages are generated through `src/pages/[lang]/[...slug].astro` using the same page components as English, so navigation, layouts and calls to action remain equivalent. Homepage copy and shared labels live in `src/data/localization.ts`; subpage copy lives in `src/data/localized-pages.ts`.

Whenever important English positioning or route behaviour changes, update and verify every locale or flag each translation as needing owner review. Do not silently machine-translate sensitive commercial or legal copy and present it as approved. All current translations require native-speaker review before launch.

## Draft content

### Homepage final v2 — October 2026

The written Home Page Final Developer Instructions v2 are authoritative over screenshot-only text. `src/data/home.ts` contains the new homepage-only EN/SR/ES copy; SR/ES translations require native-speaker review. Keep the existing hero title, support copy, artwork and minimum viewport height, but remove its location-label row and all homepage CTA arrows. Per the subsequent menu-consistency request, every page uses the same transparent-to-glass fixed header after 24px of scroll, pill-shaped floating surface, no top-state divider, arrow-free header CTA, glass Solutions dropdown and circular mobile toggle. Partner colours remain intact; mobile drawer links remain text-only on the dark surface. Section anchors allow space for the fixed header.

The audience section has two simplified blocks with one solutions-anchor action and one Services action. Why ADL uses diagonal text placement on desktop and sequential blocks on mobile, without numbers or icons. Featured Solutions shows exactly one whole slide, Pipedrive then Learnie, using warm off-white surfaces, original logos, orange/red primary exploration buttons and secondary demo links. It has no autoplay or adjacent-card peek. Product screenshots and the Premier Partner mark are deferred pending official standalone assets; do not crop or redraw the PSH badge photograph. The closing CTA has a calm dark area behind the action, and the homepage footer omits its location line. This supersedes earlier homepage descriptions above; partner pages and Services retain their content and ribbon behavior.

### Services refresh — October 2026

The supplied final Services developer brief is implemented across all five locales via `src/data/services.ts`. English follows the supplied wording; Serbian, Spanish, German and Russian translations require native-speaker review. The layout removes numbering and hero-footer labels, presents five champagne cards in a 3 + 2 desktop grid, and replaces the old principles with referrals, focused projects and ongoing collaboration. The extra featured CTA after the introduction is deliberately deferred pending the client's agreed copy, with no visible placeholder. There is one contact CTA after How we work and an arrow-free final Let's talk action, both linking to the locale-aware contact form with market-entry preselected. Services opts into the shared continuous ribbon treatment without changing the homepage or other interior-page defaults.

Insights titles and summaries are editorial placeholders until full articles are approved. Do not fabricate authors, publication dates, case studies, customer logos, testimonials, revenue figures, or performance statistics.

### Pipedrive reference update — 14 October 2026

The owner supplied `viber_image_2026-10-14_12-17-29-499.jpg` and explicitly authorised original assets from the Hostinger template. The EN/SR/ES landing hero now uses the original transparent laptop/phone composition and unchanged Premier Partner badge, with the approved ADL logo. Source provenance is recorded in `public/partners/pipedrive/hero-sources.json`. The hero uses cream, dark green and an ochre trial action, with the exact English CTA “Start your free 30-day trial” and “Book a free demo”. The trial ochre is darker on phones to maintain contrast for smaller text.

All Pipedrive routes now use a dedicated top header: ADL Nexus Home, Pipedrive Home on subpages, Workshop, Implementation, Pricing, Knowledge base, and a separate green Contact action. Existing language equivalents remain available; ES links to English subpages explicitly say so. The global ADL header outside Pipedrive is unchanged. The trust strip uses the three original award badges and a static CSS wave/dot treatment; a matching gold-green background image was not present in the template assets inspected. The counter starts once the number is fully visible below the sticky header, with a static final value for no-JS and reduced-motion.
