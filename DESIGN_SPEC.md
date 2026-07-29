# imkaransangoi.com — Redesign Specification v1

Status: DRAFT — awaiting Karan's approval
Author: Claude (design lead) · Implementer: Codex
Source of truth: Automated Website Sales System Handoff (sections 23–25, locked)

---

## 1. Purpose & audience

Primary audience: US local-service business owners (pest control, HVAC, waterproofing,
movers, etc.) who received a website-demo email from Karan and are verifying him
before replying or paying. They are non-technical, busy, and trust-sensitive.

Secondary audience: businesses needing custom software, portals, automation,
lead-tracking systems.

The site must answer, within 10 seconds: Who is this? What does he do?
Can I trust him with my money? What exactly do I get and for how much?

## 2. Locked hero (do not change wording)

- Eyebrow: `WEBSITES • SOFTWARE • AUTOMATION`
- H1: `Fast Websites for Growing Businesses. Launch Yours in 48 Hours.`
- Subheading: `From high-converting business websites to custom software and
  automation, I build digital systems that help businesses launch faster,
  operate efficiently and win more customers.`
- Primary CTA: `Get Your Website`
- Secondary CTA: `Build Custom Software`
- Trust strip: `48-Hour Website Delivery · Fixed One-Time Pricing · Custom Software · International Experience`
- Qualification line (small text near trust strip):
  `48-hour delivery begins after receiving the required business information, content and photographs.`

Structural inspiration ONLY: ignytlabs.com (speed promise, visible projects,
clear process, fixed-price clarity, trust indicators). No copied wording,
branding, or visual design.

## 3. Site map (6 pages)

1. **Home** — hero, two paths, proof, process, testimonials, FAQ teaser, CTA
2. **Websites** — the 48-hour website service (this is what demo prospects check)
3. **Software & Automation** — custom builds, portals, lead tracking
4. **Projects** — real work with screenshots and short case studies
5. **About** — Karan's story, photo, LinkedIn, how he works
6. **Contact** — form + email; no fake office address, honest service model

Blog: carried over from the old site (existing posts preserved, same URLs
where possible for SEO).

## 4. Homepage section order

1. Hero (locked, above)
2. Two clear paths — card A: "Need a business website? Launch in 48 hours."
   card B: "Need something custom? Software, portals, automation, lead tracking."
3. Proof strip — 3–4 real project screenshots (browser-frame mockups)
4. How it works — 4 steps: `Share your business details → I build and show you
   the site → You review and request changes → Launch on your domain`
5. What's included / what's not — honest inclusion list (design, mobile,
   SEO basics, contact forms, analytics) and exclusions (content writing beyond
   provided info, paid ads, guaranteed rankings — NEVER promise rankings)
6. Testimonials — genuine only, each shown once: Abinay Mandla, Saloni (Happy
   Invites), Dhivya (Lime Fresh). Wording verified with Karan before publish.
7. Pricing clarity band — fixed one-time fee positioning, no compulsory
   subscription; exact figures added when Karan locks pricing
8. FAQ — 5–6 honest questions (Where are you based? How does payment work?
   What if I don't like it? Who owns the website? What about hosting/domain?)
9. Final CTA + footer (current year, auto-generated)

## 5. Design system (anti-template, anti-AI-slop)

- **Layout**: asymmetric editorial grid — NOT the centered-hero SaaS template
  look. Generous whitespace, strong left-aligned typographic hierarchy.
- **Typography**: display serif or high-character grotesque for headings
  (e.g. "Instrument Serif" / "Space Grotesk" pairing), clean humanist sans for
  body. No Poppins (the old template font), no Inter-everywhere look.
- **Colour**: warm paper background (off-white), near-black ink text, ONE
  confident accent (deep green or burnt orange — Codex proposes, Claude
  reviews). No purple-gradient SaaS clichés, no glassmorphism.
- **Imagery**: real project screenshots in simple browser frames; Karan's real
  photograph on About and footer card. No stock people, no 3D illustrations.
- **Motion**: minimal — subtle scroll reveals only. No parallax circus.
- **Feel target**: a confident independent studio, not a startup template.

## 6. Trust & honesty rules (from handoff, non-negotiable)

- Show: real projects, genuine testimonials (once each), transparent process,
  fixed pricing where possible, founder involvement, personal photo, LinkedIn,
  honest what's-included.
- Never: invented client counts, fake years of experience, fabricated
  guarantees, Google-ranking promises, actuarial credentials (FIA/FIAI/CERA/
  IFRS 17 — those are Rushabh's, not Karan's).

## 7. Tech stack (proposed by Claude, Codex to confirm)

- Next.js 15 (App Router), TypeScript, Tailwind CSS
- Static-first (no CMS — content in markdown/TSX; blog posts as .md files
  migrated from old repo)
- Deployed on Vercel, connected to the existing domain after approval
- Lighthouse targets: 95+ performance, 100 accessibility/SEO basics,
  LocalBusiness/Person structured data, sitemap, OG images

## 8. Needed from Karan before final publish

1. Which projects to feature (names, URLs, permission to screenshot)
2. His personal photo
3. LinkedIn URL (and any other verifiable profile)
4. Testimonial wording confirmation (3 existing ones)
5. Final pricing figures (can launch with "fixed quote" wording until locked)

## 9. Build workflow

1. Karan approves this spec →
2. Claude scaffolds repo with AGENTS.md (Codex briefing) + this spec →
3. Codex builds section by section, committing as it goes →
4. Claude reviews every page against this spec (design QA + honesty QA) →
5. Karan reviews preview URL → changes → approval →
6. Deploy to imkaransangoi.com (old site archived, not deleted)
