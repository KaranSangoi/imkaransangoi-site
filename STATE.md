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
