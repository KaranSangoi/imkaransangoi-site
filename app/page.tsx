"use client";
import Link from "next/link";
import { useState, CSSProperties } from "react";

/* ------------------------------------------------------------------ *
 * Homepage — faithful implementation of the approved Claude Design
 * "Karan Sangoi Homepage.dc.html" (dark navy / gold, Newsreader/Manrope).
 * Fonts resolve through the next/font CSS variables wired in layout.tsx.
 * Image slots render as tasteful branded placeholders (real photo,
 * preview screenshots and demo captures are AWAITING-KARAN).
 * ------------------------------------------------------------------ */

const DISPLAY = "var(--font-display), Georgia, serif";
const BODY = "var(--font-body), 'Manrope', sans-serif";
const GOLD = "#c9a24b";

const niches = [
  {
    label: "Pest Control",
    demoUrl: "pestcontrol-preview.com",
    caption: "Pest control concept",
    headline: 'Turn "who do I call" into a booked job in under 60 seconds.',
    bullets: [
      "Instant quote request form above the fold",
      "Click-to-call sticky bar on mobile",
      "Google reviews pulled in live",
    ],
  },
  {
    label: "HVAC",
    demoUrl: "hvac-preview.com",
    caption: "HVAC concept",
    headline: "Emergency repair requests routed straight to your phone.",
    bullets: [
      "24/7 emergency banner with live availability",
      "Financing calculator built in",
      "Service-area map for every zip you cover",
    ],
  },
  {
    label: "Movers",
    demoUrl: "movers-preview.com",
    caption: "Moving company concept",
    headline: "Instant moving quotes that convert browsers into deposits.",
    bullets: [
      "3-step quote wizard, no phone tag needed",
      "Photo gallery of trucks and crews for trust",
      "Deposit checkout built into the site",
    ],
  },
];

const outcomes = [
  ["01", "Customers find you from their phone", "A fast, mobile-first site keeps you visible wherever they're searching."],
  ["02", "They call instead of scrolling past", "Clear calls-to-action and click-to-call turn visits into phone calls."],
  ["03", "Your reviews finally work for you", "Real reviews shown up front build trust before they even call."],
  ["04", "You look as credible as the biggest name in town", "A polished site puts you on equal footing with bigger competitors."],
];

const steps = [
  ["01", "Send your photos & details", "A short form — takes about 15 minutes of your time."],
  ["02", "Review it and request changes", "Tell me what to adjust; I make it match your business exactly."],
  ["03", "It goes live on your domain", "Connected, published, and ready for customers within 48 hours."],
];

const software = [
  ["Leads lost in WhatsApp chats", "A simple system that captures every lead automatically."],
  ["Quotes written by hand every night", "Instant quote calculators built into your site."],
  ["Spreadsheets nobody trusts", "A dashboard showing the real numbers, always up to date."],
  ["The same customer questions eating your day", "A booking or FAQ flow that answers before they call."],
];

const faqs = [
  ["Is my preview really free?", "Yes. Looking at it costs nothing. You only pay if you decide to make it live as your real website."],
  ["What happens after 7 days?", "It quietly expires. No calls, no follow-up, no pressure — just an honest deadline so I can keep building previews for other owners."],
  ["Who owns the website once it's live?", "You do. Your domain, your content, your site — it's yours, not a rental."],
  ["How do payments work safely?", "Invoices only. No wire transfers, no gift cards, no crypto, and never before you've seen and approved the work."],
  ["Where are you based?", "I work with US-based small businesses full time and keep hours that overlap every US timezone. Happy to hop on a video call before you decide anything."],
];

const testimonials = [
  ["Add a real client quote here — something specific about the result, like calls booked or time saved.", "Client Name", "Owner, Pest Control Co.", "CN"],
  ["Swap this placeholder for feedback from an actual HVAC or moving client once you have it.", "Client Name", "Owner, HVAC Co.", "CN"],
  ["A short, specific testimonial builds more trust than a long generic one — keep it concrete.", "Client Name", "Owner, Moving Co.", "CN"],
];

const pricing = [
  ["Starter Website", "One location, ready to convert", false, ["5-page conversion-focused site", "Mobile-first, fast-loading", "Your own domain", "Contact & quote forms"]],
  ["Growth Website", "Multi-service, built to convert", true, ["Everything in Starter", "Service-area & multi-location pages", "Analytics & call tracking", "Reviews & before/after galleries"]],
  ["Custom Software MVP", "Built around your bottleneck", false, ["Scoped on one call", "Dashboards, booking, automation", "Working MVP in 21 days", "Ongoing support available"]],
] as const;

const browserBar: CSSProperties = {
  display: "flex", alignItems: "center", gap: 8, padding: "12px 16px",
  background: "#171c28", borderBottom: "1px solid rgba(255,255,255,0.08)",
};
const dot = (c: string): CSSProperties => ({ width: 10, height: 10, borderRadius: "50%", background: c });
const chip: CSSProperties = {
  fontSize: 13, color: "#c3c7cf", border: "1px solid rgba(201,162,75,0.35)",
  borderRadius: 999, padding: "8px 16px",
};
const eyebrow: CSSProperties = {
  fontSize: 12, letterSpacing: "0.14em", color: GOLD, textTransform: "uppercase",
};

function Slot({ caption, height }: { caption: string; height: number }) {
  return (
    <div style={{
      width: "100%", height, minHeight: 160,
      background: "linear-gradient(135deg,#12161f,#0e121a)",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", gap: 12, color: "#6d7280",
    }}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={GOLD}
        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.6" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span style={{ fontSize: 12, letterSpacing: "0.06em" }}>{caption}</span>
    </div>
  );
}

export default function Home() {
  const [activeNiche, setActiveNiche] = useState(0);
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const [openFaq, setOpenFaq] = useState(0);
  const niche = niches[activeNiche];

  return (
    <>
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

      <div className="dc-home" style={{ background: "#0b0e14", color: "#f5f3ee", fontFamily: BODY, width: "100%", overflowX: "hidden" }}>

        {/* HEADER */}
        <header style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", rowGap: 14, padding: "16px clamp(20px,4vw,48px)", background: "rgba(11,14,20,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontFamily: DISPLAY, fontSize: 20, letterSpacing: "0.06em", color: "#f5f3ee" }}>KARAN SANGOI</span>
            <span style={{ fontSize: 10, letterSpacing: "0.18em", color: "#9aa4b2", textTransform: "uppercase", marginTop: 2 }}>Independent Developer</span>
          </div>
          <nav className="dc-nav" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "clamp(14px,2.5vw,36px)" }}>
            <a className="navlink" href="#work" style={{ color: "#e5e2da", fontSize: 14, fontWeight: 500 }}>Examples</a>
            <a className="navlink" href="#steps" style={{ color: "#e5e2da", fontSize: 14, fontWeight: 500 }}>How It Works</a>
            <a className="navlink" href="#software" style={{ color: "#e5e2da", fontSize: 14, fontWeight: 500 }}>Software</a>
            <a className="navlink" href="#about" style={{ color: "#e5e2da", fontSize: 14, fontWeight: 500 }}>About</a>
            <a className="navlink" href="#faq" style={{ color: "#e5e2da", fontSize: 14, fontWeight: 500 }}>FAQ</a>
            <Link href="/websites" style={{ background: GOLD, color: "#0b0e14", padding: "11px 22px", borderRadius: 3, fontSize: 13, fontWeight: 700, letterSpacing: "0.02em" }}>Complete My Website</Link>
          </nav>
        </header>

        {/* HERO */}
        <section style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "clamp(36px,5vw,60px)", padding: "clamp(56px,10vw,100px) clamp(20px,5vw,48px) clamp(50px,8vw,90px)", maxWidth: 1400, margin: "0 auto", alignItems: "center" }}>
          <div style={{ position: "absolute", top: -120, left: -200, width: 600, height: 600, background: "radial-gradient(circle, rgba(201,162,75,0.14), transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1, animation: "fadeUp 0.8s ease both" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(201,162,75,0.4)", borderRadius: 999, padding: "7px 16px", marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD }} />
              <span style={{ fontSize: 12, letterSpacing: "0.06em", color: "#e0c27a" }}>Received a website preview from me? Start here.</span>
            </div>
            <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(32px,5.5vw,54px)", lineHeight: 1.12, fontWeight: 500, margin: "0 0 26px", color: "#f7f5f0" }}>
              {"Your new website is already built. "}
              <em style={{ fontStyle: "italic", color: GOLD }}>{"Let's make it yours."}</em>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#b7bcc4", maxWidth: 520, margin: "0 0 32px" }}>
              {"You've seen the preview. In 48 hours it can carry your real photos, your services, your phone number and your own domain — and start bringing you customers."}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 14, flexWrap: "wrap" }}>
              <Link href="/websites" style={{ background: GOLD, color: "#0b0e14", padding: "16px 30px", borderRadius: 3, fontSize: 15, fontWeight: 700 }}>Complete My Website</Link>
              <a href="#work" style={{ color: "#f5f3ee", fontSize: 15, fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 3 }}>{"I'm new here — show me examples"}</a>
            </div>
            <p style={{ fontSize: 13, color: "#e0c27a", margin: "0 0 40px", maxWidth: 480 }}>Your preview stays live for 7 days. After that, it expires.</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28 }}>
              <span style={chip}>48-Hour Website Activation</span>
              <span style={chip}>Fixed One-Time Pricing</span>
              <span style={chip}>21-Day Software MVPs</span>
              <span style={chip}>Direct Founder Involvement</span>
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", background: "#12161f", boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)" }}>
              <div style={browserBar}>
                <span style={dot("#e05c4a")} /><span style={dot("#e0b04a")} /><span style={dot("#4ae08c")} />
                <span style={{ marginLeft: 12, fontSize: 12, color: "#6d7280", background: "#0e121a", padding: "4px 14px", borderRadius: 4 }}>your-business-preview.com</span>
              </div>
              <Slot caption="Your website preview" height={460} />
            </div>
            <div style={{ marginTop: -24, marginLeft: 24, position: "relative", zIndex: 2, display: "inline-block", background: "#171c28", border: "1px solid rgba(201,162,75,0.35)", borderRadius: 8, padding: "14px 20px", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
              <div style={{ fontSize: 12, color: "#8b909a", marginBottom: 4 }}>Preview status</div>
              <div style={{ fontFamily: DISPLAY, fontSize: 18, color: GOLD }}>Active — reserved for 7 days</div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section style={{ padding: "24px clamp(20px,5vw,48px)", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "#0e121a" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
            <span style={{ fontSize: 12, letterSpacing: "0.1em", color: "#6d7280", textTransform: "uppercase" }}>Built for owners checking their preview is legit</span>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "#b7bcc4" }}>🔒 Clear written scope every project</span>
              <span style={{ fontSize: 13, color: "#b7bcc4" }}>💳 Secure invoiced payments</span>
              <span style={{ fontSize: 13, color: "#b7bcc4" }}>🎥 Live video calls, no ghosting</span>
            </div>
          </div>
        </section>

        {/* WHAT IT DOES FOR YOU */}
        <section style={{ padding: "clamp(60px,10vw,120px) clamp(20px,5vw,48px)", maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, marginBottom: 56 }}>
            <span style={eyebrow}>Once it&apos;s live</span>
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, margin: "14px 0 16px", color: "#f7f5f0" }}>What your website does for you.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 24 }}>
            {outcomes.map((o) => (
              <div key={o[0]} style={{ background: "#12161f", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "32px 26px" }}>
                <div style={{ fontFamily: DISPLAY, fontSize: 26, color: GOLD, marginBottom: 18 }}>{o[0]}</div>
                <h4 style={{ fontSize: 17.5, fontWeight: 700, color: "#f5f3ee", margin: "0 0 12px", lineHeight: 1.35 }}>{o[1]}</h4>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#b7bcc4", margin: 0 }}>{o[2]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT BECOMES YOURS */}
        <section id="steps" style={{ padding: "clamp(60px,10vw,120px) clamp(20px,5vw,48px)", background: "#0e121a", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div style={{ maxWidth: 640, marginBottom: 64 }}>
              <span style={eyebrow}>Three steps</span>
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, margin: "14px 0 16px", color: "#f7f5f0" }}>How it becomes yours.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 32, position: "relative", marginBottom: 24 }}>
              <div style={{ position: "absolute", top: 22, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.1)" }} />
              {steps.map((s) => (
                <div key={s[0]} style={{ position: "relative" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#0e121a", border: `1px solid ${GOLD}`, color: GOLD, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: DISPLAY, fontSize: 16, marginBottom: 24, position: "relative", zIndex: 1 }}>{s[0]}</div>
                  <h4 style={{ fontSize: 18, fontWeight: 700, color: "#f5f3ee", margin: "0 0 12px" }}>{s[1]}</h4>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#b7bcc4", margin: 0 }}>{s[2]}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12.5, color: "#6d7280", margin: 0 }}>The 48-hour clock starts after your information arrives.</p>
          </div>
        </section>

        {/* THE 7 DAY WINDOW */}
        <section style={{ padding: "clamp(60px,10vw,120px) clamp(20px,5vw,48px)", maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
          <div>
            <span style={eyebrow}>Why previews expire</span>
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(26px,3.5vw,36px)", fontWeight: 500, margin: "14px 0 22px", color: "#f7f5f0" }}>The 7-day window.</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#b7bcc4", margin: "0 0 18px" }}>Every preview is built individually for one business — yours — and reserved for you alone while I hold it live.</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#b7bcc4", margin: 0 }}>If you love it, claim it and it becomes your real website. If it&apos;s not for you, it quietly disappears after 7 days. No calls, no follow-up, no pressure — just an honest deadline so I can keep building for owners who want theirs.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[["Day 1", "Your preview goes live", "#f5f3ee", "rgba(255,255,255,0.08)"], ["Day 2 – 7", "Reserved and waiting for you", GOLD, "rgba(201,162,75,0.35)"], ["Day 8", "Preview expires quietly", "#8b909a", "rgba(255,255,255,0.08)"]].map((r) => (
              <div key={r[0]} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#12161f", border: `1px solid ${r[3]}`, borderRadius: 8, padding: "18px 24px" }}>
                <span style={{ fontSize: 14, color: "#c3c7cf" }}>{r[0]}</span>
                <span style={{ fontSize: 14, color: r[2], fontWeight: 600 }}>{r[1]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CUSTOM SOFTWARE MVPs */}
        <section id="software" style={{ padding: "clamp(56px,9vw,100px) clamp(20px,5vw,48px)", maxWidth: 1400, margin: "60px auto" }}>
          <div style={{ background: "linear-gradient(135deg, #171c28, #12161f)", border: "1px solid rgba(201,162,75,0.25)", borderRadius: 14, padding: "clamp(28px,5vw,64px)" }}>
            <div style={{ maxWidth: 680, marginBottom: 48 }}>
              <span style={eyebrow}>Beyond the website</span>
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(26px,3.5vw,34px)", fontWeight: 500, margin: "14px 0 16px", color: "#f7f5f0" }}>Custom software MVPs in 21 days.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "#c7ccd4", margin: 0 }}>Click a card — you probably recognize the problem.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 22, marginBottom: 48 }}>
              {software.map((c, i) => {
                const isF = !!flipped[i];
                return (
                  <div key={i} role="button" tabIndex={0} className="sw-card" aria-pressed={isF}
                    onClick={() => setFlipped((s) => ({ ...s, [i]: !s[i] }))}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlipped((s) => ({ ...s, [i]: !s[i] })); } }}
                    style={{ background: isF ? "#141b26" : "#0e121a", border: `1px solid ${isF ? "rgba(201,162,75,0.45)" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, padding: "26px 24px", cursor: "pointer", minHeight: 194, display: "flex", flexDirection: "column", justifyContent: "space-between", outline: "none", transition: "transform .2s, border-color .2s, background .2s" }}>
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.1em", color: isF ? GOLD : "#9aa4b2", textTransform: "uppercase", marginBottom: 12 }}>{isF ? "The fix" : "The problem"}</div>
                      <div style={{ fontSize: 17.5, fontWeight: 500, color: isF ? "#ffffff" : "#e7e4dc", lineHeight: 1.5 }}>{isF ? c[1] : c[0]}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 600, color: isF ? "#e0bd77" : "#9aa4b2", marginTop: 20 }}>
                      <span style={{ fontSize: 15, lineHeight: 1 }}>↻</span> Tap to {isF ? "see the problem" : "see the fix"}
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#f5f3ee", marginBottom: 8 }}>One call. One clear scope. One fixed price.</div>
                <div style={{ fontSize: 15.5, color: "#b7bcc4" }}>A working MVP in your hands in 21 days.</div>
              </div>
              <Link href="/software" style={{ background: GOLD, color: "#0b0e14", padding: "15px 28px", borderRadius: 3, fontSize: 15, fontWeight: 700, flexShrink: 0 }}>Tell Me Your Bottleneck</Link>
            </div>
          </div>
        </section>

        {/* EXAMPLES / SHOWCASE */}
        <section id="work" style={{ padding: "clamp(60px,10vw,120px) clamp(20px,5vw,48px)", maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, marginBottom: 56 }}>
            <span style={eyebrow}>Concept previews</span>
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, margin: "14px 0 16px", color: "#f7f5f0" }}>See what owners like you received.</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "#b7bcc4" }}>These are concept previews built across a few industries. Yours would be built around your business specifically.</p>
          </div>
          <div style={{ display: "flex", gap: 12, marginBottom: 36, borderBottom: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap" }}>
            {niches.map((n, i) => (
              <button key={n.label} onClick={() => setActiveNiche(i)} style={{ background: "none", border: "none", padding: "14px 22px", cursor: "pointer", fontSize: 14, fontWeight: 600, color: i === activeNiche ? GOLD : "#8b909a", borderBottom: `2px solid ${i === activeNiche ? GOLD : "transparent"}`, marginBottom: -1 }}>{n.label}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px,1fr))", gap: "clamp(32px,5vw,56px)", alignItems: "center" }}>
            <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", background: "#12161f", boxShadow: "0 30px 60px -20px rgba(0,0,0,0.55)" }}>
              <div style={browserBar}>
                <span style={dot("#e05c4a")} /><span style={dot("#e0b04a")} /><span style={dot("#4ae08c")} />
                <span style={{ marginLeft: 12, fontSize: 12, color: "#6d7280", background: "#0e121a", padding: "4px 14px", borderRadius: 4 }}>{niche.demoUrl}</span>
                <span style={{ marginLeft: "auto", fontSize: 10, letterSpacing: "0.06em", color: GOLD, textTransform: "uppercase", border: "1px solid rgba(201,162,75,0.4)", borderRadius: 999, padding: "3px 10px" }}>Concept</span>
              </div>
              <Slot caption={niche.caption} height={420} />
            </div>
            <div>
              <h3 style={{ fontFamily: DISPLAY, fontSize: 28, fontWeight: 500, margin: "0 0 20px", color: "#f7f5f0" }}>{niche.headline}</h3>
              {niche.bullets.map((b) => (
                <div key={b} style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "flex-start" }}>
                  <span style={{ color: GOLD, fontSize: 16, marginTop: 1 }}>✓</span>
                  <span style={{ fontSize: 15, lineHeight: 1.5, color: "#c3c7cf" }}>{b}</span>
                </div>
              ))}
              <Link href="/websites" style={{ display: "inline-block", marginTop: 16, color: GOLD, fontSize: 14, fontWeight: 700, borderBottom: "1px solid rgba(201,162,75,0.4)", paddingBottom: 2 }}>Get a preview for your business →</Link>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ padding: "clamp(60px,10vw,120px) clamp(20px,5vw,48px)", maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
          <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
            <Slot caption="Karan at work" height={460} />
          </div>
          <div>
            <span style={eyebrow}>About Karan</span>
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(26px,3.5vw,36px)", fontWeight: 500, margin: "14px 0 22px", color: "#f7f5f0" }}>Yes, I&apos;m a real developer.</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#b7bcc4", margin: "0 0 18px" }}>You got a working preview of your own website, unprompted, and Googled me before replying. Smart. I&apos;m an independent developer who builds websites and software for small businesses across the US — and every preview I send out is a real, working site, not a mockup.</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#b7bcc4", margin: "0 0 30px" }}>If you&apos;d rather see my face before deciding, I&apos;m always happy to hop on a short video call.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 20 }}>
              {[["Written agreement", "Scope, timeline, and price fixed up front."], ["US-friendly hours", "I overlap with every US timezone."], ["Secure payments", "Invoiced. No wires, no crypto, no gift cards."], ["Free preview first", "You see the work before you pay anything."]].map((x) => (
                <div key={x[0]} style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#f5f3ee" }}>{x[0]}</div>
                  <div style={{ fontSize: 13, color: "#8b909a", marginTop: 4 }}>{x[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ padding: "clamp(60px,10vw,120px) clamp(20px,5vw,48px)", background: "#0e121a", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div style={{ maxWidth: 640, marginBottom: 56 }}>
              <span style={eyebrow}>What clients say</span>
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, margin: "14px 0 16px", color: "#f7f5f0" }}>Placeholder quotes — swap in real ones anytime.</h2>
            </div>
            <div className="three-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 28 }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{ background: "#171c28", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 32 }}>
                  <div style={{ color: GOLD, fontSize: 14, marginBottom: 16 }}>★★★★★</div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "#c3c7cf", margin: "0 0 24px", fontStyle: "italic" }}>&ldquo;{t[0]}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#0e121a", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: GOLD, fontWeight: 700 }}>{t[3]}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#f5f3ee" }}>{t[1]}</div>
                      <div style={{ fontSize: 12, color: "#8b909a" }}>{t[2]}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section style={{ padding: "clamp(60px,10vw,120px) clamp(20px,5vw,48px)", maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, marginBottom: 56 }}>
            <span style={eyebrow}>Investment</span>
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, margin: "14px 0 16px", color: "#f7f5f0" }}>Every quote is custom — here&apos;s what&apos;s always included.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#9aa4b2" }}>Pricing depends on scope. Every package below includes these fundamentals.</p>
          </div>
          <div className="three-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 28 }}>
            {pricing.map((p) => (
              <div key={p[0]} style={{ border: p[2] ? `1px solid ${GOLD}` : "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: 36, background: p[2] ? "#171c28" : "#12161f", boxShadow: p[2] ? "0 20px 50px -15px rgba(201,162,75,0.25)" : "none" }}>
                {p[2] && <div style={{ fontSize: 11, letterSpacing: "0.1em", color: GOLD, textTransform: "uppercase", marginBottom: 10 }}>Most popular</div>}
                <h3 style={{ fontFamily: DISPLAY, fontSize: 22, color: "#f5f3ee", margin: "0 0 6px" }}>{p[0]}</h3>
                <p style={{ fontSize: 13, color: "#8b909a", margin: "0 0 24px" }}>{p[1]}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {p[3].map((f) => (<span key={f} style={{ fontSize: 14, color: "#c3c7cf" }}>✓ {f}</span>))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ padding: "clamp(60px,10vw,120px) clamp(20px,5vw,48px)", background: "#0e121a", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            <div style={{ marginBottom: 48 }}>
              <span style={eyebrow}>Straight answers</span>
              <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, margin: "14px 0 0", color: "#f7f5f0" }}>Questions people ask about their preview.</h2>
            </div>
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <button onClick={() => setOpenFaq(open ? -1 : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, background: "none", border: "none", padding: "24px 0", textAlign: "left", cursor: "pointer" }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: "#f5f3ee" }}>{f[0]}</span>
                    <span style={{ color: GOLD, fontSize: 20, flexShrink: 0 }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && <p style={{ fontSize: 15, lineHeight: 1.7, color: "#9aa4b2", margin: "0 0 24px" }}>{f[1]}</p>}
                </div>
              );
            })}
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contact" style={{ padding: "clamp(56px,9vw,110px) clamp(20px,5vw,48px) 60px", maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 70 }}>
            <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(28px,5vw,44px)", fontWeight: 500, margin: "0 0 20px", color: "#f7f5f0" }}>Claim your website before it expires.</h2>
            <p style={{ fontSize: 16, color: "#9aa4b2", margin: "0 0 36px" }}>Reply to the email that brought you here, or complete it below.</p>
            <Link href="/websites" style={{ display: "inline-block", background: GOLD, color: "#0b0e14", padding: "18px 36px", borderRadius: 3, fontSize: 15, fontWeight: 700 }}>Complete My Website</Link>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <div>
              <span style={{ fontFamily: DISPLAY, fontSize: 18, color: "#f5f3ee" }}>KARAN SANGOI</span>
              <div style={{ fontSize: 13, color: "#8b909a", marginTop: 8 }}>imkaransangoi.com</div>
              <div style={{ fontSize: 13, color: "#8b909a", marginTop: 4 }}>hello@imkaransangoi.com</div>
            </div>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              <a href="#work" style={{ color: "#9aa4b2", fontSize: 13 }}>Examples</a>
              <a href="#steps" style={{ color: "#9aa4b2", fontSize: 13 }}>How It Works</a>
              <a href="#software" style={{ color: "#9aa4b2", fontSize: 13 }}>Software</a>
              <a href="#faq" style={{ color: "#9aa4b2", fontSize: 13 }}>FAQ</a>
            </div>
            <div style={{ fontSize: 12, color: "#5f636d" }}>© 2026 Karan Sangoi. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </>
  );
}
