import Link from "next/link";
import { CSSProperties } from "react";

/* Shared dark design-system chrome (matches the Claude Design homepage).
   Used by every page brought up to the new look so header/footer stay consistent. */

export const DISPLAY = "var(--font-display), Georgia, serif";
export const BODY = "var(--font-body), 'Manrope', sans-serif";
export const GOLD = "#c9a24b";

export const eyebrow: CSSProperties = { fontSize: 12, letterSpacing: "0.14em", color: GOLD, textTransform: "uppercase" };
export const browserBar: CSSProperties = { display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", background: "#171c28", borderBottom: "1px solid rgba(255,255,255,0.08)" };
export const dot = (c: string): CSSProperties => ({ width: 10, height: 10, borderRadius: "50%", background: c });

export function DSStyle() {
  return (
    <style>{`
      @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
      .dc-home *{box-sizing:border-box}
      .dc-home section{max-width:none;margin:0;padding:0;background:none}
      .dc-home footer{background:none;border:0;color:inherit}
      .dc-home h1,.dc-home h2,.dc-home h3,.dc-home h4,.dc-home p,.dc-home figure{margin:0}
      .dc-home a{color:inherit;text-decoration:none}
      .dc-home button{font:inherit}
      .dc-home .dc-nav a.navlink:hover{color:${GOLD}}
      .dc-home .sw-card:hover,.dc-home .sw-card:focus-visible{transform:translateY(-4px);border-color:rgba(201,162,75,0.6) !important;background:#141b26 !important}
      .dc-home ::selection{background:${GOLD};color:#0b0e14}
      @media(prefers-reduced-motion:reduce){.dc-home *{animation:none !important}}
      @media(max-width:640px){
        .dc-home .dc-nav{gap:12px !important}
        .dc-home .dc-nav a.navlink{font-size:13px}
        .dc-home .three-grid{grid-template-columns:1fr !important}
      }
    `}</style>
  );
}

export function Slot({ caption, height }: { caption: string; height: number }) {
  return (
    <div style={{ width: "100%", height, minHeight: 160, background: "linear-gradient(135deg,#12161f,#0e121a)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, color: "#6d7280" }}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.6" /><path d="M21 15l-5-5L5 21" />
      </svg>
      <span style={{ fontSize: 12, letterSpacing: "0.06em" }}>{caption}</span>
    </div>
  );
}

export function DSShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DSStyle />
      <div className="dc-home" style={{ background: "#0b0e14", color: "#f5f3ee", fontFamily: BODY, width: "100%", overflowX: "hidden" }}>
        {children}
      </div>
    </>
  );
}

export function SiteHeader() {
  const link: CSSProperties = { color: "#e5e2da", fontSize: 14, fontWeight: 500 };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", rowGap: 14, padding: "16px clamp(20px,4vw,48px)", background: "rgba(11,14,20,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <Link href="/" style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
        <span style={{ fontFamily: DISPLAY, fontSize: 20, letterSpacing: "0.06em", color: "#f5f3ee" }}>KARAN SANGOI</span>
        <span style={{ fontSize: 10, letterSpacing: "0.18em", color: "#9aa4b2", textTransform: "uppercase", marginTop: 2 }}>Independent Developer</span>
      </Link>
      <nav className="dc-nav" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "clamp(14px,2.5vw,36px)" }}>
        <Link className="navlink" href="/#work" style={link}>Examples</Link>
        <Link className="navlink" href="/#steps" style={link}>How It Works</Link>
        <Link className="navlink" href="/software" style={link}>Software</Link>
        <Link className="navlink" href="/#about" style={link}>About</Link>
        <Link className="navlink" href="/#faq" style={link}>FAQ</Link>
        <Link href="/websites" style={{ background: GOLD, color: "#0b0e14", padding: "11px 22px", borderRadius: 3, fontSize: 13, fontWeight: 700, letterSpacing: "0.02em" }}>Complete My Website</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  const l: CSSProperties = { color: "#9aa4b2", fontSize: 13 };
  return (
    <footer style={{ padding: "clamp(40px,6vw,64px) clamp(20px,5vw,48px) 60px", maxWidth: 1400, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div>
          <span style={{ fontFamily: DISPLAY, fontSize: 18, color: "#f5f3ee" }}>KARAN SANGOI</span>
          <div style={{ fontSize: 13, color: "#8b909a", marginTop: 8 }}>imkaransangoi.com</div>
          <div style={{ fontSize: 13, color: "#8b909a", marginTop: 4 }}>hello@imkaransangoi.com</div>
        </div>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          <Link href="/#work" style={l}>Examples</Link>
          <Link href="/#steps" style={l}>How It Works</Link>
          <Link href="/software" style={l}>Software</Link>
          <Link href="/#faq" style={l}>FAQ</Link>
        </div>
        <div style={{ fontSize: 12, color: "#5f636d" }}>© 2026 Karan Sangoi. All rights reserved.</div>
      </div>
    </footer>
  );
}
