---
name: adl-site-release
description: Save, publish, check publication status, or safely revert ADL Nexus site changes requested in ordinary language or voice. Use for owner commit, publish and recovery requests; use adl-site-maintainer for content and design changes.
---

# Save, publish or restore ADL Nexus

Read the repository `AGENTS.md`, [site maintainer](../adl-site-maintainer/SKILL.md), and [actual release target](../adl-site-maintainer/references/release-and-cloudflare.md). Respond in the owner's language with the result and any concrete blocker. The owner need not know Git commands or skill names.

## Interpret the request

The examples below pair Serbian voice commands with their English equivalents.

- “Sačuvaj izmene” / “Save changes”: review and commit intended site changes locally. Do not push.
- “Objavi sajt” / “Publish the site”: authorises reviewing all latest intended site changes, completing checks, committing uncommitted changes and an ordinary push to the confirmed production upstream. Do not ask for a second confirmation after this clear instruction. Do not merely push an old commit while intended changes remain uncommitted.
- “Vrati prethodnu verziju” / “Restore the previous version”: identify the intended target from the conversation and history, explain it briefly, create a non-destructive revert commit and show the local result. Do not push.
- “Vrati i objavi” / “Restore and publish”: the same revert plus checks and ordinary push.
- “Pokaži izmene” / “Show changes” or “Da li je objavljeno?” / “Is it published?”: preview or inspect status; neither authorises a commit or push.

A discussion defining future commands, a documentation task, or a hypothetical example is not an instruction to execute those commands now. Ask only when the action or restoration target is genuinely ambiguous. Preserve real tool/sandbox approval requirements; do not bypass an approval denial.

## Prepare the actual version

1. Inspect status, staged and unstaged diff, untracked files, current branch, remote and upstream. For publication, refresh remote information and inspect incoming/outgoing commits. The recorded target is `origin/master`; stop to resolve an unexpected destination rather than guessing or changing branch configuration.
2. Include all intended site changes, including needed assets and documentation. Preserve unrelated work. Exclude secrets, env files, generated `dist/`, `.astro/`, dependencies and temporary QA files. Stage named paths or relevant hunks and review the staged diff; never blindly stage the whole directory.
3. Follow maintainer checks: build/SEO with `npm run verify`, plus desktop/phone preview and affected interactions for visual changes. Reuse passing checks only when they cover the exact current source; after fixes rerun affected checks. Show a concise change summary and preview when applicable without adding an unnecessary approval gate.
4. Commit with a focused Conventional Commit message. Verify the intended changes are captured and report any deliberately excluded work. If there are no changes, say so; do not create an empty commit.

## Publish

After preparing the version, push normally to the verified upstream (`git push origin master` for the recorded configuration). No force push, history rewriting, DNS changes, new service setup or manual Cloudflare deployment is implied.

Confirm the remote SHA equals the intended local SHA. Inspect the Cloudflare check for that exact SHA when access permits, then check the recorded public target and affected routes when its URL is known. Never substitute `adlnexus.com` for an unknown Worker URL or claim that a successful push proves the public page is current. A missing status/API permission does not undo a successful push: report the precise unverified stage.

Use distinct owner-facing states in the owner’s language. Serbian response examples:

- “Sačuvano lokalno: <hash>. Sajt nije objavljen ovom radnjom.”
- “Push uspešan: <hash>. Automatsko objavljivanje je pokrenuto; rezultat još nije potvrđen.”
- “Cloudflare check je uspešan za <hash>; javna stranica još nije potvrđena.”
- “Objavljeno i provereno na <verified URL>.” Only after the public check succeeds.

## Restore without losing work

Inspect history and explain the chosen change(s) and resulting target. “Previous version” may mean the previous saved version or the previous published version: infer it only when evidence is clear; otherwise ask one targeted question. Never assume an unknown last-good deployment.

Preserve uncommitted work before applying a revert; do not discard or silently include it in the restoration. For ordinary commits use `git revert --no-commit <selected commits newest first>`, review the resulting diff, verify and create a `revert: ...` commit. Inspect merge topology before selecting a mainline; never guess. Resolve only clear conflicts and verify the result; otherwise report the conflict and preserve the prior work. If abandoning this revert attempt, use `git revert --abort` only for the operation you started. Never use `reset --hard` or force push as owner recovery.

## Failure recovery

- Build/check failure: do not publish; fix within scope and rerun. Preserve changes and explain any unresolved error.
- Push rejection: retain local commits, fetch and inspect remote changes. No forced overwrite. Reconcile only clearly compatible changes, rerun checks and push the reviewed result; ask when intent conflicts. For authentication failure, explain the required GitHub access without requesting credentials in chat.
- Cloudflare failure: read the failing check/log if accessible, identify the cause and prepare a fix. Do not promise that the previous site remains live without checking it. Avoid repeated empty pushes; a new fix must be checked before pushing within the authorised publishing task.
- Missing or wrong public URL: report push/check results separately. Do not change domains or hosting; request the actual target only when necessary to complete public verification.
