# DESIGN_SPEC_V3.md — Them-First Messaging Overhaul (supersedes V2 copy; keeps V2 visual system)

Status: ACTIVE. Ordered by Karan 2026-07-30 (see DECISIONS.md D19–D23).
Keep the V2 visual language (warm paper, deep green, Fraunces/Space Grotesk,
glass cards, browser-frame sample concepts, gradient atmospheres, reveal
motion). This spec replaces the MESSAGE of every section: the page talks to
the visitor about THEIR business, never about our process in the abstract.

Two offers everywhere: "Websites in 48 Hours · Custom Software MVPs in 21 Days".

## Homepage sections (rewrite copy, reuse/adapt V2 components)

1. HERO — written to the demo recipient as a continuation of the email:
   - Badge: "You received a website preview from me? Start here."
   - H1 (serif, large): "Your new website is already built. Let's make it
     yours."
   - Sub: "You've seen the preview. In 48 hours it can carry your real
     photos, your services, your phone number and your domain — and start
     bringing you customers."
   - Primary CTA: "Complete my website" → /websites (completion flow)
   - Secondary CTA: "I'm new here — show me examples" → sample showcase
   - Small line under CTAs (honest urgency, D21): "Your preview stays live
     for 7 days. After that it expires."
   - Keep floating browser-frame sample mockups visual.
2. WHAT YOUR WEBSITE DOES FOR YOU — 3-4 outcome cards, all "you/your":
   customers find you on their phone · they call instead of scrolling past ·
   your reviews finally work for you · you look as professional as the
   biggest competitor in town. No feature-speak (no "SEO metadata" talk).
3. HOW IT BECOMES YOURS — 3 tiny steps, them-centric: "Send your photos and
   business details (15 minutes)" → "Review your finished site — request any
   changes" → "It goes live on your domain in 48 hours." Qualifier retained.
4. THE 7-DAY WINDOW — short honest section: why previews expire (each is
   built individually and reserved for you), stated plainly: "If you love
   it, claim it. If not, it quietly disappears — no calls, no pressure."
5. CUSTOM SOFTWARE MVPs IN 21 DAYS — them-centric problem cards: "Leads
   lost in WhatsApp chats" · "Quotes made by hand every night" · "Spreadsheets
   nobody trusts" · "Repeat questions eating your day" → each flips (hover/
   tap) to the AI/software answer. Then: simple onboarding (one call, one
   scope doc, fixed price) → "a working MVP in your hands in 21 days."
   CTA: "Tell me your bottleneck".
6. SAMPLE SHOWCASE — keep V2's three labelled sample concepts, reframed
   header: "See what owners like you received." (for new visitors).
7. TESTIMONIALS — keep (pending Karan confirmation), reframed header:
   "People who trusted this work."
8. PRICING CLARITY — keep card; wording toward reader: "One clear project
   fee for your website. No subscription unless you want ongoing help."
9. FAQ — reorder to the demo recipient's real anxieties first: "Is my
   preview really free?" · "What happens after 7 days?" · "Who owns my
   website?" · "How do payments work safely?" · "Where are you based?"
10. FINAL CTA — "Your website is waiting. Make it yours." + expiry line.

## Inner pages

- /websites = the COMPLETION page (primary landing from emails): reiterate
  preview→completion flow, what's included, 48-hour clock qualifier, form
  asking for their preview link + business details.
- /software = the 21-day MVP page: problems→solutions→onboarding→examples
  of buildable MVPs (booking portal, quote calculator, lead tracker,
  customer portal — generic examples, not fake case studies).
- Projects/About/Contact/Blog: keep V2, sweep copy for me-first phrasing.

## Responsive QA (D23 — hard gate)

Fix all alignment/spacing issues found at 390, 768, 1024, 1280, 1680 px:
- No horizontal overflow at any width; marquee and hero mockups must scale.
- Grid collapses: cards 3→2→1 with even gutters; process rows stack cleanly;
  browser-concept frames never overlap text at tablet widths.
- Header: nav collapses to sheet at <1024 where crowding starts, not <768.
- Consistent section vertical rhythm (same top/bottom padding scale).
- Tap targets ≥44px on mobile; hero type scales without orphan single words.

## Honesty rules — unchanged and absolute

No invented stats/clients/logos; expiry urgency stated plainly (D21) with
no fake countdown timers; no ranking promises; samples labelled as concepts.
