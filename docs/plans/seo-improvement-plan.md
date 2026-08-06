# ADL Nexus SEO improvement plan

Status: planned

Last updated: 2026-08-06

Canonical production origin: `https://adlnexus.com`

## Goal

Make the ADL Nexus presentation reliably discoverable, understandable and measurable in organic search while preserving the current static Astro architecture, restrained brand, five-language route parity and owner-approved claims.

## Audit baseline

- [x] Build all 35 English, Serbian, Spanish, German and Russian pages successfully.
- [x] Confirm every generated page has one H1, a title, a meta description and the correct HTML language.
- [x] Confirm every route has reciprocal language alternatives and an `x-default` alternative.
- [x] Confirm there are no broken internal links or orphaned routes.
- [x] Check representative desktop and phone layouts for horizontal overflow.
- [x] Confirm the production domain is `adlnexus.com` and use `https://adlnexus.com` as the canonical origin.
- [ ] Re-run the full audit against the production host after launch, including status codes, redirects, response headers, indexability and Core Web Vitals.

## Phase 1 — Canonical URL and crawl foundation

- [ ] Set `site: 'https://adlnexus.com'` in `astro.config.mjs`.
- [ ] Add an absolute, self-referencing canonical link to every indexable page.
- [ ] Canonicalise contact variants such as `/contact?solution=pipedrive` and their localized equivalents to the clean contact URL.
- [ ] Generate fully qualified `hreflang` URLs for `en`, `sr`, `es`, `de`, `ru` and `x-default`.
- [ ] Keep every `hreflang` cluster self-referencing and reciprocal across all five languages.
- [ ] Add an automatically generated XML sitemap containing only canonical, indexable production URLs.
- [ ] Add `robots.txt` and reference `https://adlnexus.com/sitemap.xml`.
- [ ] Add an explicit favicon link in the document head.
- [ ] Add a custom 404 page and verify missing URLs return HTTP 404.
- [ ] Redirect all HTTP traffic to HTTPS.
- [ ] Redirect `www.adlnexus.com` to `adlnexus.com`.
- [ ] Choose and enforce one trailing-slash policy consistently.
- [ ] Prevent Cloudflare preview deployments from being indexed, while leaving production indexable.
- [ ] Verify that no canonical, sitemap or language-alternate URL points to a preview deployment.

## Phase 2 — Page titles, descriptions and search intent

- [ ] Define one primary search intent and a small supporting query set for every indexable page.
- [ ] Validate terminology for both audiences: organisations selecting software and technology companies entering or growing in markets.
- [ ] Replace generic titles such as `Services — ADL Nexus` with concise, descriptive titles.
- [ ] Review every H1 so the visual brand language and the page's commercial purpose are both clear.
- [ ] Rewrite meta descriptions to communicate audience, offering and next step without keyword stuffing.
- [ ] Shorten the English Learnie meta description while preserving its approved meaning.
- [ ] Keep each page title and meta description unique within its language.
- [ ] Apply equivalent metadata improvements to all localized routes.
- [ ] Obtain native-speaker review of Serbian, Spanish, German and Russian titles, descriptions and important headings before launch.
- [ ] Decide whether Latin-script Serbian should use the more specific `sr-Latn` language tag.

### Initial English title candidates

- [ ] Homepage: `Software Selection & Market Entry Partner | ADL Nexus`
- [ ] Services: `Market Entry, Sales Representation & Growth | ADL Nexus`
- [ ] Pipedrive: `Pipedrive CRM Demo & Advisory | ADL Nexus`
- [ ] Learnie: `Mobile Learning & Knowledge Sharing | ADL Nexus`
- [ ] Validate these candidates against approved positioning and keyword evidence before publishing.

## Phase 3 — Commercial landing-page architecture

- [ ] Prioritise the services with the strongest commercial value and real search demand.
- [ ] Create a substantive market-entry service page.
- [ ] Create a substantive sales-representation service page.
- [ ] Create a substantive business-development service page.
- [ ] Decide whether partner development and customer success need separate pages or should remain supporting sections.
- [ ] For each service page, explain audience, suitable company stage, markets covered, engagement model, process, expected inputs and next step.
- [ ] Confirm the actual geographic scope ADL can credibly serve.
- [ ] Create market-specific pages only for markets where ADL has real expertise and distinct, useful information.
- [ ] Avoid mass-produced country pages, duplicated copy and unsupported market claims.
- [ ] Preserve route, navigation and call-to-action parity across all five languages.
- [ ] Obtain native-speaker review before localized service pages become indexable.

## Phase 4 — Insights and expert content

- [ ] Confirm final Insights copy and editorial ownership.
- [ ] Replace article-card `mailto:` actions with crawlable article routes.
- [ ] Remove artificial reading times until the full articles exist.
- [ ] Publish an article on sustainable market entry using original ADL experience.
- [ ] Publish an article on why local presence matters in software sales.
- [ ] Publish an article on selective software portfolios and decision quality.
- [ ] Give every article a clear author or reviewer, publication date and meaningful update date.
- [ ] Include practical frameworks, original observations, examples and sources where relevant.
- [ ] Link every article contextually to the most relevant service or solution page.
- [ ] Add related-article links where they genuinely help the reader.
- [ ] If launch precedes finished articles, clearly mark the section as forthcoming or keep placeholder Insights routes out of the index.
- [ ] Translate articles only after the English source is approved and native review is available.

## Phase 5 — Entity, credibility and structured data

- [ ] Confirm the public legal or trading name and the organisation details that may be published.
- [ ] Confirm the long-term public contact email and move from provisional Gmail addresses to a domain-based address if available.
- [ ] Add named leadership biographies with relevant, verifiable experience.
- [ ] State the markets, languages and engagement types ADL actually supports.
- [ ] Confirm how the Pipedrive and Learnie relationships may be described publicly.
- [ ] Do not claim official partner status unless it is documented and owner-approved.
- [ ] Add authentic case studies, testimonials or outcomes only when permission and evidence exist.
- [ ] Link to authoritative professional and company profiles where appropriate.
- [ ] Add accurate `Organization` and `WebSite` JSON-LD to the homepage or About page.
- [ ] Add the final owner-approved logo to structured data when available; do not use the temporary text mark as a final logo.
- [ ] Add `BreadcrumbList` structured data to nested solution, service and article pages.
- [ ] Add service-level structured data only when it accurately represents visible page content.
- [ ] Validate structured data before launch and recheck it after deployment.

## Phase 6 — Internal linking and navigation

- [ ] Replace generic anchors such as `Read more` and `Learn more` with descriptive wording where it reads naturally.
- [ ] Add contextual links from the homepage to priority service pages.
- [ ] Add contextual links between related services, solutions and articles.
- [ ] Add visible breadcrumbs to nested pages if they improve orientation.
- [ ] Keep every priority page linked from at least one relevant page beyond global navigation.
- [ ] Re-run the broken-link and orphan-route audit after every route change.
- [ ] Preserve keyboard access, visible focus states and mobile navigation behaviour.

## Phase 7 — Social and image metadata

- [ ] Add an absolute `og:url` to every page.
- [ ] Generate absolute Open Graph and Twitter image URLs from `https://adlnexus.com`.
- [ ] Add localized `og:locale` and `og:locale:alternate` values.
- [ ] Localize the Open Graph image alternative text.
- [ ] Add explicit Twitter title and description metadata.
- [ ] Compress `public/og.png` without materially reducing quality.
- [ ] Consider page-specific social images for approved articles and major landing pages.
- [ ] Use meaningful alt text for future informative images and empty alt text for purely decorative images.

## Phase 8 — Performance and mobile quality

- [ ] Run production PageSpeed or Lighthouse tests on the homepage and representative service, solution, article and localized pages.
- [ ] Measure real LCP, INP and CLS after the domain is live.
- [ ] Check whether preloading the homepage hero improves LCP before implementing it.
- [ ] Verify Cloudflare caching and compression for HTML, CSS, JavaScript and image assets.
- [ ] Keep remote fonts, heavy frameworks and unnecessary client-side JavaScript out of the site.
- [ ] Check desktop and phone layouts after every visual or content change.
- [ ] Check every language for horizontal overflow and long-word wrapping.
- [ ] Verify that important content and navigation remain available without JavaScript.

## Phase 9 — Search measurement and launch

- [ ] Verify `https://adlnexus.com` in Google Search Console.
- [ ] Submit the production sitemap in Search Console.
- [ ] Inspect the homepage and representative pages from every language in the URL Inspection tool.
- [ ] Verify the production canonical selected by Google matches the declared canonical.
- [ ] Monitor indexing, sitemap processing, crawl errors, queries, clicks and impressions.
- [ ] Verify the site in Bing Webmaster Tools and submit the sitemap.
- [ ] Make a separate owner decision about privacy-safe behavioural analytics; Search Console setup does not require adding visitor analytics.
- [ ] Record an SEO baseline after launch so future changes can be compared against it.
- [ ] Review performance and indexing after the first 2, 6 and 12 weeks.

## Launch acceptance checklist

- [ ] `https://adlnexus.com` is the only canonical production origin.
- [ ] HTTP and `www` variants redirect to the canonical HTTPS origin.
- [ ] Every indexable page returns HTTP 200 and declares the correct absolute canonical.
- [ ] Missing pages return HTTP 404.
- [ ] The sitemap contains every intended canonical page and no preview or parameter URLs.
- [ ] `robots.txt` is reachable and references the production sitemap.
- [ ] All language clusters contain valid, absolute and reciprocal alternatives.
- [ ] Titles, descriptions and H1s are approved and localized appropriately.
- [ ] Placeholder Insights content is either replaced or intentionally excluded from indexing.
- [ ] Structured data validates and contains only visible, verified information.
- [ ] Desktop and phone layouts have no horizontal overflow.
- [ ] Contact details and product-relationship wording are owner-approved.
- [ ] Search Console is verified and the sitemap is submitted.
- [ ] `npm run build` passes immediately before release.

## Owner decisions still required

- [x] Production domain: `adlnexus.com`.
- [ ] Final logo assets.
- [ ] Public domain-based contact email.
- [ ] Native-speaker approval of Serbian, Spanish, German and Russian copy.
- [ ] Final Insights copy, authorship and publishing order.
- [ ] Exact geographic markets ADL will target.
- [ ] Publishable organisation and leadership details.
- [ ] Approved wording for Pipedrive and Learnie relationships.
- [ ] Privacy and behavioural analytics approach.

## Progress notes

Add dated entries below when a phase is completed, materially changed or blocked.

- 2026-08-06: SEO audit completed; production domain confirmed as `adlnexus.com`; implementation not yet started.
