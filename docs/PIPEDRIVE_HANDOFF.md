# Pipedrive handoff implementation

Implemented and pushed as commit `058c329` on 14 October 2026 with explicit owner approval. For future save/publish/revert requests, see the owner guides in [English](OWNER_GUIDE_EN.md) and [Serbian](OWNER_GUIDE_SR.md) and [release reference](../.agents/skills/adl-site-maintainer/references/release-and-cloudflare.md). Public target verification is tracked separately from the successful push.

## Scope

English and Serbian landing pages include Getting started, customer stories, FAQ and the partner footer. Separate pricing, knowledge-base and implementation pages follow sections 11–13 of `ADL_Nexus_Pipedrive_Website_Handoff_With_Visual_References.docx`. Spanish remains on the existing landing page; the language switch links there from the new EN/SR pages.

The Word document supplies Serbian text, prices and explicit English replacements. Existing template text supplies the other English sections. Unresolved template biography placeholders were replaced with the supplied ADL team introduction and approved founders’ names, without inventing years of experience or portraits.

## Sources and editorial decisions

- Pricing: https://www.pipedrive.com/de/pricing (EUR, annual billing); https://www.pipedrive.com/en/pricing
- Security: https://trustcenter.pipedrive.com/ and https://support.pipedrive.com/en/article/how-secure-is-my-data-in-pipedrive
- Support availability: https://support.pipedrive.com/en/contact-us
- The owner approved updating FAQ security/support statements to official sources and removing absolute risk claims.
- The supplied affiliate URL and 30-day partner trial copy are retained. The approved affiliate link was checked on 14 October 2026 and displays a 30-day trial; no account was created.
- Workshop and all 12 industry playbooks now have local English routes, clearly marked EN from Serbian pages. No public Hostinger destinations remain. The owner confirmed the workshop is free and follows the written brief, without template pricing or duration.
- The owner deferred newsletter signup: it remains omitted with no form or service, and source copy is retained for later.
- The owner confirmed retaining “Unlimited access” / “Neograničen pristup” for full access during the trial, alongside the existing paid-plan limits disclaimer.
- The owner confirmed retaining EUR prices and existing annual billing, without conversion.
- English adaptation and native-speaker review remain editorial review items.

## Validation

Astro build generates 41 pages (40 content pages plus 404), with 37 sitemap entries. Local Pipedrive links and fragment targets are checked against generated pages; no missing targets or duplicate IDs were found. Desktop and mobile review covers pricing, the knowledge article, implementation and the landing page additions. No enquiries were sent or trial accounts activated.
