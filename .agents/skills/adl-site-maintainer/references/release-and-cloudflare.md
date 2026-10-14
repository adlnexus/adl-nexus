# ADL Nexus release target

## Confirmed workflow

Owner confirmation, 14 October 2026: a normal GitHub push triggers automatic publication. “Publish the site” (Serbian: “Objavi sajt”) includes checking and committing all latest intended site changes before pushing, without another confirmation solely because it is a publication request. “Save changes” (Serbian: “Sačuvaj izmene”) is a local commit only. Use [adl-site-release](../../adl-site-release/SKILL.md) for the procedure and recovery.

| Item | Recorded value |
| --- | --- |
| Repository | `https://github.com/technosapiens/adl-nexus.git` (private) |
| Production branch / upstream | `master` / `origin/master` |
| Existing integration | Cloudflare Workers Builds, script `adl-nexus` |
| Local checks | `npm run verify` (build + SEO) |
| Static output | `dist/` (never commit) |
| Required local Node | `>=22.12.0` from package.json |
| Canonical domain in source | `https://adlnexus.com` |
| Actual public Worker URL | Not yet recorded; obtain from the existing Cloudflare project |

Do not create a new Pages project or replace the current integration. Cloudflare's exact dashboard build/deploy commands and runtime setting have not been inspected; do not present local build settings as confirmed remote settings.

## Evidence and limits

On 14 October 2026 GitHub reported `Workers Builds: adl-nexus` successful for commit `058c3290f365ee0dffbb096dbb68b0dd78552f9b`, with Cloudflare version `e485de1a-5bde-49fa-9858-948168da1c3c`. The owner confirms automatic publication on push. The GitHub legacy status endpoint had no statuses; use the actual check-run rather than interpreting that empty legacy response as a deployment failure.

In the same read-only audit, `https://adlnexus.com/` returned 200 with title “adlnexus.com”; `/solutions/pipedrive/` and `/solutions/pipedrive/workshop/` returned 404. This leaves the public target/domain mapping unverified; it does not contradict the confirmed push automation. Associate the actual Worker URL/custom domain with this project before claiming that public-site verification is complete. Do not guess a workers.dev hostname or alter DNS.

Report separately: local commit saved; remote SHA confirmed; Cloudflare check succeeded/failed/pending; public page verified/unverified. Check the SHA being published, not a previous successful build.

## Access and boundaries

Routine publication needs the owner's working GitHub write access. Cloudflare access is needed to inspect restricted logs/settings and confirm the public target, not to run a second manual deployment. Verify available access without assuming account ownership or copying credentials into the repository/chat.

No manual deployment, DNS change, new hosting service or account connection is implied by “publish”. If access or genuine approval restrictions block a step, preserve work and report that step accurately. Detailed save/publish/revert recovery is maintained only in the release skill.
