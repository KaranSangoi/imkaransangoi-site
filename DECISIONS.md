# DECISIONS.md — Locked decisions (change only with Karan's explicit instruction)

Source: "Complete Project Handoff: Automated Website Sales System" (Karan's
brief, July 2026) + chat decisions. This file is the single source of truth.

## Identity

- D1. Owner: Karan Sangoi. Software/websites/automation business. NO actuarial
  content (FIA/FIAI/CERA/IFRS 17 belong to Rushabh, a different user).
- D2. Personal site: imkaransangoi.com — being rebuilt fresh (old repo
  `personal-portfolio` archived as backup, never deleted).

## Business model (the bigger project this site serves)

- D3. Business: auto-generate 5-page demo websites for promising US
  local-service businesses, publish on temporary preview URLs, cold-email the
  owner; 7-day free preview; one-time setup fee (~$750–$1,500 hypothesis, not
  final); no compulsory subscription; optional recurring services later.
- D4. First market: US, mid-sized growing metro (exact metro NOT yet selected —
  requires real keyword/competition data first).
- D5. Industry shortlist: pest control (preliminary front-runner),
  waterproofing, HVAC, movers, cleaning, appliance repair, interior designers,
  car detailing, CCTV, pet services. Final choice requires real Google data.
  Avoid: medical, legal, financial, real-estate brokers, restaurants, tiny
  retail, franchises.
- D6. Channels: personalised cold email (CAN-SPAM compliant) + preview
  engagement tracking + behavioural follow-ups. NO WhatsApp/SMS cold outreach
  in the US pilot.
- D7. Honesty rules everywhere: no invented facts, no exact-loss claims
  ("exactly 47 customers"), search figures worded as estimate ranges, never
  promise Google rankings, previews noindex + concept disclaimer + 7-day
  expiry.
- D8. Demo generation quality gates and exception queue per handoff §13–14:
  uncertain data pauses the case instead of publishing.

## Architecture & tooling (decided in chat, July 29, 2026)

- D9. NO paid AI APIs. All AI work runs on Karan's existing Claude and ChatGPT
  subscriptions via Cowork (Claude) and Codex.
- D10. Shared brain = GitHub repos. Every AI session starts by reading
  STATE.md + DECISIONS.md and ends by updating STATE.md. Chat memory is
  never relied upon.
- D11. Division of labour: Claude = research, planning, design direction, copy,
  QA, dashboard, routines. Codex = code implementation (also mitigates
  same-model design sameness).
- D12. Automation: Claude Cowork scheduled tasks (cloud, subscription-powered,
  PC-independent) for recurring pipeline work; free-tier infra (GitHub +
  Vercel) for hosting sites and dashboard. Paid data/email tools deferred
  until pilot needs them.
- D13. Order of build: (1) rebuild imkaransangoi.com → (2) market/industry
  validation with real data → (3) automation platform + dashboard →
  (4) internal dry run (~100 businesses, no outreach) → (5) small-batch pilot.

## Personal site (locked)

- D14. Hero wording locked per DESIGN_SPEC.md §2 ("Fast Websites for Growing
  Businesses. Launch Yours in 48 Hours." + eyebrow, sub, CTAs, trust strip,
  48-hour qualification line).
- D15. Fresh build: Next.js 15 + TypeScript + Tailwind, static-first, no CMS,
  Vercel hosting. Blog posts migrated from old repo, slugs preserved.
- D16. Testimonials: Abinay Mandla, Saloni (Happy Invites), Dhivya (Lime
  Fresh) — genuine only, once each, wording verified by Karan pre-publish.
- D17. ignytlabs.com = structural inspiration only; never copy wording,
  branding, visual design.
- D18. No deploy to the live domain without Karan's explicit approval.

## Positioning change by Karan (2026-07-30) — supersedes D14 hero lock

- D19. Two offers, stated everywhere as the core promise:
  "Websites in 48 Hours · Custom Software MVPs in 21 Days".
- D20. The site speaks to THE VISITOR, not about Karan/process. Primary
  visitor = a business owner who ALREADY received their demo website by
  email. Hero and page open as a continuation of that email: your website
  is already built — here is how it becomes yours in 48 hours, and what it
  does for YOUR business. Secondary path for new/cold visitors.
- D21. Demo expiry is stated openly as honest urgency: previews stay live
  for 7 days, then expire. Real policy, plainly worded, no fake timers.
- D22. Software track is them-centric: their problems → AI solutions →
  simple onboarding → working MVP in 21 days.
- D23. QA gates before anything is shown to Karan: (a) audience-centric
  copy audit — every section must talk about the reader; (b) visual QA at
  minimum five widths: 390 / 768 / 1024 / 1280 / 1680, screenshots reviewed
  by Claude.
