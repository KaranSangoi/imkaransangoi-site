# STATE.md — Shared project memory

Last updated: 2026-07-29 by Codex (implementation session)

## Current phase

Phase 1 of 5: Rebuild imkaransangoi.com (see DECISIONS.md D13 for full order).

## Done

- Handoff brief converted into DECISIONS.md (locked) ✅
- Old portfolio repo audited and fresh rebuild approved by Karan ✅
- DESIGN_SPEC.md v1 written by Claude and approved by Karan ✅
- Next.js 15 App Router + TypeScript + Tailwind CSS v4 static-export scaffold implemented ✅
- All six specified pages implemented: Home, Websites, Software & Automation, Projects, About, Contact ✅
- Homepage implements the nine-section order in DESIGN_SPEC.md §4, including locked hero copy and qualification line ✅
- Warm-paper/deep-green editorial design system, responsive layouts, accessible navigation, metadata, Person structured data, sitemap, robots and OG placeholder implemented ✅
- Markdown-driven blog index/detail architecture implemented; original Markdown filenames will preserve slugs automatically ✅
- AWAITING-KARAN placeholders added for project screenshots/details, personal photo, LinkedIn URL, pricing and final testimonial wording ✅
- Honesty constraints retained: no invented results, client counts, credentials, ranking guarantee or unverified testimonial wording ✅

## In progress

- None.

## Next

1. Claude: design and honesty QA against DESIGN_SPEC.md at desktop and mobile widths.
2. Karan: provide §8 assets and confirmations (photo, LinkedIn URL, project list/screenshots/permissions, testimonial wording, pricing).
3. Codex: copy the old repository's `/posts` Markdown files into this repository's `/posts` directory once GitHub/source access is available, then verify original front matter and URLs.
4. Codex/Claude: run a production build and visual browser QA in a network-enabled environment.
5. After Karan's explicit approval only: connect Vercel and switch the domain.

## Blocked / questions

- **Blocked — dependencies/build:** this environment rejects npm registry requests with HTTP 403, so dependencies could not be installed and `npm run build` could not be executed here.
- **Blocked — blog migration:** the environment rejects GitHub, raw GitHub, API and codeload requests with HTTP 403. The migration adapter is complete, but no post names/content were invented. Karan or Claude can place a checkout/archive of `KaranSangoi/personal-portfolio/posts` in this repo, or rerun migration where GitHub is reachable.
- **Blocked — screenshots:** without installed dependencies the app cannot run locally, so desktop/mobile screenshots could not be captured.
- **Question for Claude:** Please review the editorial Georgia/Trebuchet system. Local/system fonts intentionally avoid a build-time Google Fonts request; approve it or provide self-hosted font files.
- **Question for Karan:** Please confirm that `hello@imkaransangoi.com` is the desired contact address before launch.

## QA findings

- Awaiting Claude's QA pass.
