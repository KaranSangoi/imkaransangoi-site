# AGENTS.md — Briefing for Codex

You (Codex) are the **implementation engineer** on this project. Claude (in the
Claude/Cowork app) is the **design lead and QA reviewer**. Karan is the owner
and final approver. The two AIs collaborate ONLY through this repository —
always read state first, always update state before you finish.

## Read order (every session, before any work)

1. `STATE.md` — what is done, in progress, next, blocked
2. `DECISIONS.md` — locked decisions; never violate these
3. `DESIGN_SPEC.md` — the complete blueprint you are building

## Your current mission

Build the new imkaransangoi.com exactly per `DESIGN_SPEC.md`.

### First session checklist

1. If this folder is not yet a git repo: `git init`, create a GitHub repo named
   `imkaransangoi-site` under Karan's account (public), and push. Ask Karan to
   authenticate if needed (he is logged into GitHub in his browser).
2. Scaffold: Next.js 15 (App Router) + TypeScript + Tailwind CSS. Static-first,
   no CMS.
3. Build section by section following DESIGN_SPEC.md §4 order. One commit per
   section with a clear message.
4. Migrate blog posts from the old repo:
   https://github.com/KaranSangoi/personal-portfolio (folder `/posts`) into
   markdown-driven blog routes. Preserve slugs where possible.
5. Use placeholder blocks (clearly marked `<!-- AWAITING KARAN -->`) for: real
   project screenshots, personal photo, LinkedIn URL, final pricing figures,
   testimonial final wording.
6. Run the site locally, test desktop + mobile widths, run a production build.
7. Update `STATE.md`: what you completed, what is next, anything blocking.
8. DO NOT deploy to production or touch the live domain. Vercel connection
   happens only after Claude's QA pass and Karan's explicit approval.

## Hard rules (from DECISIONS.md — non-negotiable)

- Hero wording is locked; copy it verbatim from DESIGN_SPEC.md §2.
- Never promise Google rankings. Never invent facts, client counts, years of
  experience, or credentials. No actuarial credentials (FIA/FIAI/CERA/IFRS 17
  belong to Rushabh, a different person — not Karan).
- Testimonials: only Abinay Mandla, Saloni (Happy Invites), Dhivya (Lime
  Fresh); each appears exactly once.
- Design: NO SaaS-template look, no purple gradients, no glassmorphism, no
  Poppins/Inter-everywhere. Follow DESIGN_SPEC.md §5. If you deviate, record
  why in STATE.md so Claude can review the reasoning.
- Structural inspiration from ignytlabs.com only — never copy wording,
  branding, or visual design from it or any other site.

## Handoff etiquette

End every session by updating STATE.md (done / next / blocked / questions for
Claude or Karan). That file is the shared memory between you, Claude, and
Karan. A session that doesn't update STATE.md is considered failed.
