# DESIGN_TOKENS_EXACT.md — measured from claude-design-homepage.html

Karan's finding: the implemented site's fonts, sizes, margins and padding do
not match the approved Claude Design page. These are the EXACT values read out
of `claude-design-homepage.html` (the approved reference committed in this
repo). Supersede DESIGN_SPEC_V4_DARK.md §1–2 with these. Match them exactly;
do not substitute "equivalent" fonts or round the numbers.

## Typefaces (only two — replace Fraunces/Space Grotesk entirely)

- Display/headings: **Newsreader**, serif — weight **500** (not 600/700).
- Body/UI: **Manrope**, sans-serif.
- Load both via next/font/google with the weights actually used.

## Type scale (exact)

| Element | Value |
|---|---|
| h1 | `font-size: clamp(32px,5.5vw,54px); line-height:1.12; font-weight:500; margin:0 0 26px; color:#f7f5f0` |
| h2 (major) | `clamp(28px,4vw,40px); font-weight:500; margin:14px 0 16px; color:#f7f5f0` |
| h2 (minor) | `clamp(26px,3.5vw,36px); font-weight:500; margin:14px 0 22px` |
| h3 (large) | `28px; font-weight:500; margin:0 0 20px; color:#f7f5f0` |
| h3 (card) | `22px; color:#f5f3ee; margin:0 0 6px` |
| body copy | `15px`–`16px` |
| secondary/meta | `13px`–`14px` (most common sizes on the page) |
| small labels | `11px`–`12px` |

Body text is SMALL and quiet (13–15px); headings carry the page. The current
implementation uses oversized body text and heavy heading weights — fix both.

Line-heights in use: 1.1, 1.12, 1.4, 1.5, 1.6, 1.7.
Letter-spacing in use: 0.02em, 0.06em, 0.08em, 0.1em, 0.14em, 0.18em
(the wide values are for uppercase eyebrows/labels only).

## Colour tokens (exact hex — replace my earlier approximations)

- Page background deepest: `#0b0e14`
- Section band: `#0e121a`
- Panel/card: `#12161f`
- Raised/hover panel: `#171c28`
- Gold accent: `#c9a24b`
- Heading text: `#f7f5f0`
- Body text on dark: `#c3c7cf`
- Secondary text: `#b7bcc4`
- Muted text: `#9aa4b2`
- Dim text: `#8b909a`
- Dimmest/labels: `#6d7280`

## Spacing & layout (exact)

- Section padding: `clamp(60px,10vw,120px) clamp(20px,5vw,48px)`
  (hero variant: `clamp(56px,10vw,100px) clamp(20px,5vw,48px)`)
- Header bar padding: `16px clamp(20px,4vw,48px)`
- Card padding: `36px` (large), `18px 24px` (compact)
- Chips/pills: `8px 16px`, `7px 16px`, `4px 14px`
- Buttons: `11px 22px`
- Container max-width: `1400px`; text measures: `480px`, `520px`, `640px`,
  `680px`, `820px` (never let paragraphs run wider than these)
- Gaps: 8/12/14/16/20/24/28/32px plus fluid `clamp(32px,5vw,56px)`,
  `clamp(32px,5vw,64px)`, `clamp(36px,5vw,60px)`, `clamp(14px,2.5vw,36px)`
- Border-radius: `3px`, `4px`, `8px`, `10px`, `14px`, `999px`, `50%`
  — NOT the 20–24px "soft" radii currently used. This design is tighter.

## Verification (hard gate)

After implementing, run a computed-style diff against the reference for:
h1/h2/h3 font-family, font-size, font-weight, line-height, margin; body
font-size and colour; section padding; card radius and padding. Report any
property that differs.
