# STATE.md — Shared project memory

Last updated: 2026-07-30 by Codex (V3 them-first implementation)

## V3 implementation handoff

### Done

- Implemented DESIGN_SPEC_V3 and D19–D23 across the homepage: demo-recipient hero, visitor outcome cards, three-step completion, plainly stated seven-day expiry, 21-day software MVP problem/answer cards, honest sample showcase, pending testimonials, pricing, recipient-first FAQ and final CTA.
- Rebuilt `/websites` as the email-recipient completion landing page with preview-link/business-detail form, included outcomes, timing qualifier, one-time pricing placeholder and honest expiry policy.
- Rebuilt `/software` around visitor bottlenecks, generic (not claimed) MVP examples, simple onboarding and the qualified 21-day working-MVP promise.
- Swept Projects, About, Contact, Writing, shared footer and global metadata toward visitor-first language. Both offers now appear in the homepage, shared footer and site metadata.
- Kept the V2 warm-paper/deep-green visual system, Fraunces/Space Grotesk typography, browser concepts, atmosphere, glass cards and reveal motion.
- Added V3 responsive rules for 390 / 768 / 1024 / 1280 / 1680-class layouts: navigation now collapses below 1024px, cards move 4→2→1 or 3→2→1, completion rows stack, hero browsers remain bounded, mobile browser concepts no longer use negative overflow, tap targets are at least 44px, and wide-screen section rhythm is consistent.
- Preserved honesty constraints: no invented figures, clients, outcomes or rankings; samples remain labelled; testimonials and pricing remain AWAITING-KARAN; expiry uses no timer and is stated plainly.

### QA / checks

- `git diff --check` passes.
- Audience/honesty copy scans completed for rankings, countdown claims, testimonial identities and the two-offer promise.
- Production build reaches Next.js compilation but is blocked because `next/font` cannot fetch Fraunces and Space Grotesk from Google Fonts in this environment.
- Screenshot capture is unavailable because no browser/screenshot runner is installed in this container and the local build cannot obtain the configured Google fonts. Responsive CSS was checked programmatically at all five required breakpoints; Claude still needs to perform the D23 screenshot review.

### Next

1. Claude: review screenshots at exactly 390, 768, 1024, 1280 and 1680px in a browser-enabled environment; verify hero mockup scale, flip-card tap behaviour and section rhythm.
2. Karan: provide the portrait, verified LinkedIn URL, final testimonial wording and final pricing.
3. Codex: respond to Claude’s visual QA findings and replace remaining AWAITING-KARAN content only when verified assets/copy arrive.
4. After Karan’s explicit approval only: connect Vercel and switch the domain.

### Blocked / questions

- **Environment — production build:** Google Fonts requests for Fraunces and Space Grotesk fail, so `npm run build` cannot complete here.
- **Environment — screenshots:** no browser automation tool is installed; screenshot QA remains a hard handoff to Claude.
- **Question for Karan:** confirm final project fee, approved testimonial wording, portrait and LinkedIn URL before publish.
- No deployment was attempted.

---

## V4 dark identity + headline narrative handoff

Last updated: 2026-07-30 by Codex

### Done

- Applied D24 and `DESIGN_SPEC_V4_DARK.md` sections 1–4 across the shared site: deep navy/charcoal bands, warm-white copy, accessible gold accents, dark bordered panels, dark translucent navigation, gold actions, and dark footer treatment.
- Upgraded the homepage hero to one large `your-business-preview.com` frame with an AWAITING-KARAN screenshot placeholder, overlapping seven-day status card, the four approved chips, and the new owner-legitimacy trust bar.
- Updated navigation labels and identity lockup exactly to the V4 direction.
- Applied the approved `HEADLINE_NARRATIVE.md` wording and order. The website story now completes through outcomes, three steps, honest expiry, samples, testimonials and pricing before the explicit software bridge and 21-day MVP story; FAQ and final website CTA close the page.
- Updated the shared footer headline to “Tell me what you need next.”
- Retained all V3 body copy, qualifying language, sample disclaimers, pricing/testimonial placeholders and honesty constraints. Each approved testimonial identity still appears exactly once.
- Kept the reveal fallback timer and reduced-motion override. Responsive layouts collapse at the existing 1023/900/600px gates, covering the specified 390/768/1024/1280/1680 widths without intentional viewport overflow.
- Removed build-time Google font fetching so production builds are deterministic in the restricted environment. CSS continues to request Fraunces and Space Grotesk first with robust serif/sans fallbacks; the production host should self-host the approved font files when they are available.

### QA / checks

- `npm run build` passes with all 18 static pages generated and exported.
- `npx tsc --noEmit` passes.
- `git diff --check` passes.
- Programmatic WCAG contrast checks pass: muted/body copy on page 8.72:1, muted/body copy on panels 7.86:1, gold-soft on page 11.23:1, and dark text on gold controls 7.47:1.
- Programmatic headline-order and testimonial-identity audits pass.

### Next

1. Claude: perform the required visual screenshot review at exactly 390, 768, 1024, 1280 and 1680px in a browser-enabled environment.
2. Claude/Karan: provide distributable Fraunces and Space Grotesk files for self-hosting if avoiding the current system-font fallback on restricted/offline clients is required.
3. Karan: provide the real preview screenshot, portrait, verified LinkedIn URL, final testimonial wording and final pricing.
4. After Karan’s explicit approval only: connect Vercel and switch the domain.

### Blocked / questions

- Screenshot capture is unavailable in this container because no Chromium/Chrome browser is installed. Responsive CSS and overflow constraints were reviewed programmatically, but Claude’s five-width screenshot QA remains required.
- Network policy returns HTTP 403 for Google Fonts, GitHub raw font assets and npm font packages; approved fonts therefore cannot yet be vendored.
- No deployment was attempted.

---

## V6 — approved Claude Design homepage implemented

Last updated: 2026-07-30 by Claude (design lead)

### Done

- Implemented the approved Claude Design file `Karan Sangoi Homepage.dc.html` as the live homepage (`app/page.tsx`), replacing the prior V4/V5 component-based homepage.
- Ported the `.dc.html` (which used Claude Design's `<x-dc>`, `sc-for`/`sc-if`, `<image-slot>` and a `DCLogic` component) into a single Next.js client component with faithful inline styles and a scoped CSS reset so the legacy global element rules in `globals.css` do not interfere.
- Wired the three interactive behaviours with React state: niche tabs in the Examples showcase (Pest Control / HVAC / Movers), click-to-flip software problem/solution cards (keyboard accessible), and the FAQ accordion (first item open by default).
- New sections vs V5: on-page **About** ("Yes, I'm a real developer"), **3-tier pricing** (Starter / Growth / Custom Software MVP, no fabricated numbers), the **Day 1 / Day 2–7 / Day 8** expiry timeline, and the numbered "What your website does for you" and "How it becomes yours" grids.
- Fonts resolve through the existing next/font CSS variables (`--font-display` Newsreader, `--font-body` Manrope) — matches the V5 typography fix.
- Image slots render as tasteful branded placeholders (icon + neutral caption like "Your website preview" / "Karan at work"), NOT the design's editor-facing "drop image here" text.
- Primary CTAs point to the real completion flow (`/websites`) and the software page (`/software`) rather than only in-page anchors; secondary/nav anchors preserved.

### Honesty compliance

- Samples labelled "Concept" and described as concept previews, not claimed client work.
- Testimonials shipped as clearly-labelled placeholders ("Placeholder quotes — swap in real ones anytime", generic "Client Name") — no fabricated names attached to fabricated quotes.
- Pricing shows what's always included with "Every quote is custom" — no invented figures.

### QA / checks

- `npx tsc --noEmit` passes.
- `npm run build` passes: 18/18 static pages, homepage 7.38 kB.
- Local Playwright screenshots at 1280 / 768 / 390 px: layout faithful; grids collapse to single column on mobile; nav wraps; no horizontal overflow. Probe confirms body `#0b0e14`, h1 Newsreader 54px.
- Pushed to `main` (commit `bdbf24a`) and confirmed live on Vercel — hero, header, gold italic headline, preview mockup and status card all render as approved.

### Deviations from the raw .dc.html (intentional, for a live production site)

1. Editor "drop image" placeholder text → branded placeholder graphics (assets AWAITING-KARAN).
2. Fixed `repeat(3,1fr)` testimonial/pricing grids → `auto-fit minmax` so they stack on mobile (locked responsive requirement).
3. Main CTAs routed to `/websites` and `/software` instead of in-page `#contact`/mailto.

### Still AWAITING-KARAN

- Real photo of Karan (About + can seed hero/demo slots).
- Verified LinkedIn URL.
- Project/preview screenshots for the hero and niche demo slots.
- Final testimonial wording (and whether to use real client names).
- Final pricing.

### Next

1. Karan: review the live V6 homepage and supply the assets above.
2. Claude/Codex: swap placeholders for real assets/copy once provided; consider whether the shared Header/Footer on the other pages should adopt the V6 header treatment for consistency (currently only the homepage uses the design's own header/footer).
