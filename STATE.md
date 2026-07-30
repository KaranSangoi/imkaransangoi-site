# STATE.md — Shared project memory

Last updated: 2026-07-30 by Codex (V2 implementation session)

## V2 implementation handoff (Codex, 2026-07-30)

### Done

- Rebuilt the complete homepage in the DESIGN_SPEC_V2 section order: locked hero, honest capability marquee, problem/promise, two paths, three labelled coded sample concepts, illustrated process, qualitative speed comparison, scope, testimonials, pricing, FAQ and final CTA.
- Added the V2 visual system across every page: warm gradient atmospheres, grain/dot textures, translucent cards, deep-green icon tiles, hover depth and responsive editorial layouts.
- Added original coded browser concepts for pest control, interior design and moving businesses. Every concept is explicitly labelled “Sample concept — demonstration”; none is presented as client work.
- Added a sticky shrinking glass header, mobile sheet menu and project CTA.
- Added IntersectionObserver reveal motion, restrained floating/marquee/bar animation and a complete prefers-reduced-motion override.
- Switched typography to Fraunces + Space Grotesk through next/font/google.
- Reworked Websites, Software & Automation, Projects, About, Contact and Writing to share the V2 visual system. Contact now has a transparent no-backend stub success state and a direct email route.
- Preserved all locked homepage copy and honesty constraints. Testimonial copy, portrait, LinkedIn and pricing remain clearly designed AWAITING-KARAN states.
- Added mobile rules for 390px-class layouts and defensive overflow handling; no grey or empty placeholder blocks remain.

### Next

1. Claude: run visual/design QA at desktop and 390px once dependencies can be installed, then review section order, motion and conversion hierarchy.
2. Karan: provide portrait, verified LinkedIn URL, final testimonial wording, final pricing, and permission/details for real projects.
3. Codex: replace selected sample concepts only when confirmed real assets are supplied.
4. After Karan’s explicit approval only: connect Vercel and switch the domain.

### Blocked / environment

- Production dependency installation is blocked in this environment: both npmjs and the tested mirror return HTTP 403 for `@tailwindcss/postcss`. Consequently `npm run build`, a live 390px browser inspection and screenshots could not be executed in this session. `git diff --check` passes.
- No deployment was attempted.

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

## QA findings (Claude, 2026-07-30)

- PASS: Locked hero wording, eyebrow, CTAs, trust strip and qualification line verbatim per spec §2.
- PASS: Homepage section order matches spec §4; all 6 pages present; testimonials once each (3 identities, wording marked pending Karan).
- PASS: Honesty scan clean — "Guaranteed search rankings" appears only in the NOT-included list; no invented facts, no actuarial content.
- PASS: Design system per spec §5 — warm paper, near-black ink, deep green accent, serif-led editorial layout; desktop + mobile screenshots reviewed.
- FIXED by Claude: production build failed (robots.ts/sitemap.ts needed `export const dynamic = "force-static"` for output:export). Committed.
- FIXED by Claude: posts/README.md was rendered as a blog post /blog/README — lib/posts.ts now excludes it. Committed.
- DONE by Claude: 6 blog posts migrated from personal-portfolio/posts (Codex was network-blocked). Slugs preserved. Committed.
- ANSWER to Codex font question: system Georgia/Trebuchet approved as interim; upgrade to self-hosted fonts per spec §5 queued as polish task.
- NOTE for Karan: migrated blog posts are coach-era content — keep for SEO now, refresh topics later.
- Production build passes cleanly with all fixes. Ready for Karan review + Vercel preview.
