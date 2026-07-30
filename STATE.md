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
