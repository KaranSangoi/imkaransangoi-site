# DESIGN_SPEC_V4_DARK.md — Dark navy + gold identity re-skin

Status: ACTIVE. Karan locked this direction (DECISIONS.md D24). Reference:
the approved Claude Design homepage ("Karan Sangoi Premium Website Design").
KEEP the V3 them-first copy and section structure exactly — this spec changes
the visual identity only, plus the few component upgrades listed in §4.

## 1. Colour tokens (replace warm-paper palette everywhere)

--bg:        #0F1418   /* page background, deep navy-charcoal */
--bg-alt:    #131B20   /* alternating section band */
--panel:     #161F25   /* cards / glass panels */
--panel-2:   #1B252C   /* raised card, hover state */
--line:      rgba(255,255,255,.10)
--ink:       #F3F0EA   /* primary text, warm white */
--muted:     #9BA6A4   /* secondary text */
--gold:      #C9A24D   /* primary accent */
--gold-soft: #E4C687   /* hover / highlight */
--gold-dim:  rgba(201,162,77,.14)  /* tinted fills, chips */
--success:   #6FA97F   /* subtle status dot only */

Rules: never pure black (#000) or pure white (#fff) for large areas. Cards use
--panel with 1px --line border and soft dark shadow (0 24px 60px rgba(0,0,0,.45)).
Section bands alternate --bg / --bg-alt for rhythm. Gradient washes become very
subtle radial glows of --gold-dim and deep teal-navy, never bright.

## 2. Typography

- Display: keep Fraunces (serif) — large, tight leading, warm white.
  Emphasis phrases set in gold ITALIC (e.g. "Let's make it yours.").
- Body/UI: keep Space Grotesk, colour --muted, generous line-height.
- Eyebrows: uppercase, .72rem, letter-spacing .16em, colour --gold.

## 3. Components

- Header: dark translucent bar (backdrop blur), wordmark "KARAN SANGOI" in
  letterspaced caps + small "INDEPENDENT DEVELOPER" line beneath. Nav links in
  --ink at .85rem. CTA = solid --gold pill with #12181C text: "Complete my website".
- Buttons: primary = gold fill/dark text; secondary = transparent with --line
  border and --ink text; hover lifts 2px and brightens to --gold-soft.
- Chips (trust strip): pill, 1px --line border, --ink text, --panel background.
- Cards: --panel, radius 20px, 1px --line, dark shadow; hover → --panel-2.
- Icon tiles: rounded square, --gold-dim background, gold stroke icon.
- Browser-frame sample concepts: keep light interiors (they are sample
  websites and should look like real light websites) but sit them on dark
  panels with stronger shadow and a thin --line frame.
- FAQ accordion, testimonial cards, pricing card: same dark treatment.
- Footer: --bg-alt with --line top border.

## 4. Component upgrades ported from the approved design

1. HERO RIGHT PANEL: replace floating mockups with a single large browser
   frame titled `your-business-preview.com`, containing a designed placeholder
   ("Drop the preview screenshot you sent them" / AWAITING-KARAN), and a small
   overlapping status card in the lower-left of the frame:
   label "Preview status" + gold text "Active — reserved for 7 days".
2. TRUST BAR under hero: left label "BUILT FOR OWNERS CHECKING THEIR PREVIEW
   IS LEGIT" then three items with small icons: "Clear written scope every
   project" · "Secure invoiced payments" · "Live video calls, no ghosting".
3. HERO CHIPS: "48-Hour Website Activation" · "Fixed One-Time Pricing" ·
   "21-Day Software MVPs" · "Direct Founder Involvement".
4. Nav labels: Examples · How It Works · Software · About · FAQ.

## 5. Unchanged (do not touch)

- All V3 copy, section order, the 7-day expiry section, MVP problem cards,
  FAQ questions, honesty rules (no invented stats/logos/people, no ranking
  promises, samples labelled "Sample concept", designed placeholders only).
- Blog, sitemap, metadata, structured data.

## 6. QA gate (hard)

- Contrast: body text ≥ 4.5:1 on its background; gold on dark ≥ 4.5:1 for text
  use (use --gold-soft where needed); never gold text on gold fill.
- No overflow and correct grid collapse at 390 / 768 / 1024 / 1280 / 1680.
- prefers-reduced-motion respected; reveal fallback timer kept.
- Production build passes; Lighthouse a11y not regressed.
