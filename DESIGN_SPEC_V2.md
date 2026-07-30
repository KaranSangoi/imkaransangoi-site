# DESIGN_SPEC_V2.md — Visual & Conversion Overhaul (supersedes §4–5 of DESIGN_SPEC.md)

Status: ACTIVE — approved direction after Karan rejected v1 as too bare.
V1 failure diagnosis: correct structure and honesty, but no visual richness, no
imagery, no conversion mechanics. V2 keeps ALL locked wording + honesty rules
and rebuilds the visual layer to the standard of ignytlabs.com (STRUCTURE ONLY
— never copy its wording, colours, logo style, or specific visuals).

## A. Visual language (our own identity, richer)

- Base: warm paper `#F7F4EC`, ink `#141414`, deep green `#1E4D3B` as primary.
- NEW additions: soft radial/linear gradient washes (paper → pale sage → pale
  cream) as section atmospheres; subtle grain/dot texture overlays; glassy
  cards (translucent white, blur, 1px border, soft shadow); rounded-2xl
  geometry; small squircle icon tiles with duotone lucide icons.
- Typography: keep serif display (Instrument Serif or Fraunces via
  next/font/google) for H1/H2 + Space Grotesk for UI/body. Big scale contrast.
- Motion: IntersectionObserver scroll reveals (fade+rise, staggered), smooth
  hover lifts on cards/buttons, animated count-up on the comparison bars,
  marquee for the trust strip. Subtle only; no parallax circus. Respect
  prefers-reduced-motion.

## B. Imagery WITHOUT faking (hard rules still apply)

1. Browser-frame mockups: build 3 small "sample concept" website heroes as
   REAL coded mini-components (a pest-control concept, an interior-designer
   concept, a moving-company concept) rendered inside a browser chrome frame,
   clearly labelled "Sample concept — demonstration". These are OUR designs,
   not client work — honest and impressive.
2. Abstract system graphics: CSS/SVG diagrams (nodes, flows, cards) for
   process/automation sections.
3. Real assets slots remain: Karan photo (About + footer card), real project
   screenshots to REPLACE two sample concepts when provided. Placeholders now
   must look intentional: soft gradient card + icon + caption, never grey box.
4. Still forbidden: stock people, invented client counts/stats/logos.

## C. Sticky header

Glassy blur bar, logo left, nav centre (Websites, Software, Projects, About,
Writing), right: solid green CTA "Start a project" → /contact. Shrinks on
scroll. Mobile: sheet menu with same CTA.

## D. Homepage section order (rebuilt)

1. HERO — locked wording (eyebrow, H1, sub, both CTAs, trust strip +
   qualification line, all verbatim from DESIGN_SPEC.md §2). Layout: left
   text column; right a layered visual — two overlapping browser-frame mockup
   cards (sample concepts) with subtle float animation, sitting on a gradient
   wash + dot grid. Small badge above eyebrow: "Independent studio · Direct
   founder involvement".
2. TRUST MARQUEE — slow marquee of honest capability chips (48-Hour Website
   Delivery · Fixed One-Time Pricing · Custom Software · Automation ·
   International Clients · Mobile-First · SEO Basics Included). No fake logos.
3. PROBLEM → PROMISE — short bold statement block with highlighted phrase
   (own wording): customers judge a business by its website in seconds; a slow
   or missing site loses them silently. Highlight: launch a credible site fast.
4. TWO PATHS — two large glass cards with icon tiles, hover lift, arrow links
   (wording from v1 kept).
5. SAMPLE WORK SHOWCASE — "See the kind of sites I build." 3 alternating
   rows: browser-frame sample concept screenshot one side, short spec list the
   other (pages, speed, mobile, enquiry form, days-to-launch). Each labelled
   "Sample concept". CTA under: "Get one like this → Start a project".
6. PROCESS 01–04 — numbered rows, alternating sides, each with an abstract
   SVG/CSS visual (chat bubbles → wireframe cards → code window → rocket/globe).
   Wording from v1 kept.
7. SPEED COMPARISON — honest version: horizontal bars "Typical agency
   timeline: weeks–months" vs "This studio: 48 hours after your info arrives"
   with the standard qualification line. Animated width on scroll. No invented
   competitor numbers — describe ranges qualitatively.
8. WHAT'S INCLUDED / NOT — two glass columns with check/cross icon tiles
   (v1 wording kept, incl. "Guaranteed search rankings" in NOT column).
9. TESTIMONIALS — 3 cards: initial-avatar circles (letters, no photos),
   quote, name + business. Keep pending-confirmation wording until Karan
   confirms.
10. PRICING CLARITY — single centred glass card: "One clear project fee. No
    compulsory subscription." + bullet inclusions + CTA. Exact figure slot
    remains AWAITING-KARAN.
11. FAQ — accordion (real <details> styled), v1 questions kept.
12. FINAL CTA BAND — deep green, serif line, white CTA button, footer card
    with Karan photo slot + LinkedIn slot.

## E. Inner pages

Websites, Software, Projects, About, Contact: apply same design system —
gradient section heads, glass cards, icon tiles, consistent CTAs. Projects
page: sample concepts grid now; real projects will replace when provided.
Contact: form card (name, email, business, message) + direct email line; form
posts to a stub action for now (no backend yet) with clear success state.

## F. Definition of done for v2 (Claude will verify each)

- Every section above present, in order, desktop + mobile screenshots pass.
- No grey/empty placeholder boxes anywhere — placeholders look designed.
- Locked wording verbatim; honesty rules clean (no invented stats/logos).
- Lighthouse: production build passes; no layout overflow at 390px.
- Motion works, respects prefers-reduced-motion.
- STATE.md updated by implementer.
