# ADL Nexus — maintain your website by voice

Language: **English** · [Srpski](OWNER_GUIDE_SR.md)

Open the ADL Nexus project in Codex and describe what you want to change. You do not need to know code, Git commands or skill names. The instructions travel with the project; Codex finds them through `AGENTS.md`.

## Getting started

1. Open Codex on your device and sign in with your own account. To work by voice, use the voice conversation feature available in your app.
2. Open your existing local `adl-nexus` folder. If you do not have it, request access to the private GitHub repository `technosapiens/adl-nexus`, then say: “Help me download the ADL Nexus project and open a preview.”
3. Say: “Check that the project is ready to use and show me the local site.” Codex checks Node >=22.12.0, dependencies and Git status, then starts the preview. It provides the local address once the server starts; the port may differ on another computer.
4. Publishing requires your GitHub access with permission to write to the repository. Inspecting Cloudflare settings and restricted logs requires appropriate access to the existing Cloudflare project. Sign in through the designated screen; do not send passwords or tokens in chat.
5. Confirm the project's actual public URL together. Automatic publication already exists; you do not need a new hosting account or service.

If several owners work on the site, start with: “Check for new changes from other owners.” Codex preserves your unfinished work and reconciles changes before publishing; it does not overwrite other people's work.

## Short commands

| Say | What happens |
| --- | --- |
| “Change the English homepage headline to … and show me.” | A local edit and preview, without publishing. |
| “Show me the changes and how they look on a phone.” | A review of the differences and desktop/mobile appearance. |
| “Save changes.” | Checks and a local commit of the intended changes. The public site does not change; the commit is not yet a copy on GitHub. |
| “Publish the site.” | Checks of all latest intended changes, a commit if needed, then an ordinary push. The GitHub push automatically starts publication. |
| “Revert to the previous version.” | Codex identifies the version, creates a new revert commit and shows the local result. It does not erase history or publish. |
| “Revert today's headline change and publish.” | Reverts the specific change, checks the result and pushes the new version. |
| “Is it published?” | Checks the GitHub/Cloudflare result and public page, without making new changes. |

After a clear “Publish the site”, there is no additional mandatory confirmation for the same action. Codex must still respect actual access restrictions and the app's security approvals. If “previous version” could mean more than one thing, it asks only which version you want. You can specify “before the last headline change” or give a commit identifier.

## Preview before publishing

The simplest sequence is: “Change …”, “Show me on desktop and phone”, then “Publish the site”. You can also give all of these in one clear instruction. Codex checks the build and SEO, links and changed appearance, reviews the commit contents and includes the necessary images and documentation. Secrets, generated files and unrelated work stay out of the publication.

## Understanding the result

- **“Saved locally”**: a version exists on your computer; this action has not published it.
- **“Push succeeded; publication is not yet confirmed”**: GitHub has the version, but the automatic process has not yet been checked or completed.
- **“Cloudflare check succeeded; the public page is not confirmed”**: the process reported success, but the public URL has not yet been verified.
- **“Published and verified at …”**: the page has also been checked at the specified public address.

It is confirmed that pushing publishes through the existing Cloudflare Workers project `adl-nexus`. In the audit on 14 October 2026, `adlnexus.com` did not show the expected Pipedrive routes. The actual public URL and its relationship to the domain still need to be recorded. This does not require a new service, and DNS is not changed without a separate request.

## If something fails

- **Site checks fail:** Codex fixes the problem before publication; your work remains in the files.
- **Push fails:** the local commit remains. Codex checks access or newer changes from other owners; it does not force-push.
- **Cloudflare reports an error:** ask: “Inspect the publication error and prepare a fix.” Codex checks the actual public site status; it does not assume that the previous version is still available.
- **You want to go back:** say: “Revert the last published change and publish.” Codex first identifies the exact previous version and creates a new commit. Nothing is erased from history.

Instructions for Codex: [save and publish skill](../.agents/skills/adl-site-release/SKILL.md). Technical target and verified status: [release reference](../.agents/skills/adl-site-maintainer/references/release-and-cloudflare.md).
