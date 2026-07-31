import Link from "next/link";
import { DISPLAY, GOLD, eyebrow, browserBar, dot, Slot, DSShell, SiteHeader, SiteFooter } from "@/components/DarkSite";

export const metadata = { title: "Custom Software MVPs in 21 Days" };

const problems = [
  ["Leads lost in WhatsApp chats", "A simple system that captures every enquiry automatically, so nothing slips through the cracks."],
  ["Quotes written by hand every night", "A quote calculator that turns the pricing rules you already use into an instant, consistent estimate."],
  ["Spreadsheets nobody trusts", "One focused dashboard showing the real numbers, always up to date, in a place your team believes."],
  ["The same customer questions all day", "A booking or FAQ flow that answers the repeat questions before anyone picks up the phone."],
];

const builds = [
  ["01", "Booking portal", "Let customers choose from your real availability while your team works from one shared schedule."],
  ["02", "Quote calculator", "Turn your existing pricing logic into a guided quote or estimate flow on your site."],
  ["03", "Lead tracker", "Keep every enquiry, note, owner and next action together — without an oversized CRM."],
  ["04", "Customer portal", "Give customers a secure place for updates, documents, requests or repeat actions."],
];

const steps = [
  ["01", "One call", "Show me the bottleneck, who runs into it, and what a useful outcome looks like."],
  ["02", "One scope, one fixed price", "You get the smallest useful version, its boundaries, the fixed price and the inputs needed — in writing."],
  ["03", "A working MVP in 21 days", "You review a working first version, built around the scope you approved."],
];

const headH2 = { fontFamily: DISPLAY, fontSize: "clamp(28px,4vw,40px)", fontWeight: 500, margin: "14px 0 16px", color: "#f7f5f0" } as const;
const cardBase = { background: "#12161f", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10 } as const;

export default function Software() {
  return (
    <DSShell>
      <SiteHeader />

      {/* HERO */}
      <section style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))", gap: "clamp(36px,5vw,60px)", padding: "clamp(56px,10vw,100px) clamp(20px,5vw,48px) clamp(50px,8vw,90px)", maxWidth: 1400, margin: "0 auto", alignItems: "center" }}>
        <div style={{ position: "absolute", top: -120, left: -200, width: 600, height: 600, background: "radial-gradient(circle, rgba(201,162,75,0.14), transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, animation: "fadeUp 0.8s ease both" }}>
          <span style={eyebrow}>Custom software MVPs in 21 days</span>
          <h1 style={{ fontFamily: DISPLAY, fontSize: "clamp(32px,5.5vw,54px)", lineHeight: 1.12, fontWeight: 500, margin: "16px 0 26px", color: "#f7f5f0" }}>
            {"Your daily bottleneck can become "}<em style={{ fontStyle: "italic", color: GOLD }}>working software in 21 days.</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#b7bcc4", maxWidth: 520, margin: "0 0 32px" }}>
            Bring the repetitive task, the unreliable spreadsheet or the scattered customer journey that slows your business down. You leave with a focused first version your team can actually use.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: GOLD, color: "#0b0e14", padding: "16px 30px", borderRadius: 3, fontSize: 15, fontWeight: 700 }}>Tell me your bottleneck</Link>
            <a href="#build" style={{ color: "#f5f3ee", fontSize: 15, fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 3 }}>See what we could build</a>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", background: "#12161f", boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6)" }}>
            <div style={browserBar}>
              <span style={dot("#e05c4a")} /><span style={dot("#e0b04a")} /><span style={dot("#4ae08c")} />
              <span style={{ marginLeft: 12, fontSize: 12, color: "#6d7280", background: "#0e121a", padding: "4px 14px", borderRadius: 4 }}>your-tool-preview.com</span>
            </div>
            <Slot caption="Your custom tool" height={420} />
          </div>
          <div style={{ marginTop: -24, marginLeft: 24, position: "relative", zIndex: 2, display: "inline-block", background: "#171c28", border: "1px solid rgba(201,162,75,0.35)", borderRadius: 8, padding: "14px 20px", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
            <div style={{ fontSize: 12, color: "#8b909a", marginBottom: 4 }}>Build window</div>
            <div style={{ fontFamily: DISPLAY, fontSize: 18, color: GOLD }}>A working MVP in 21 days</div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section style={{ padding: "clamp(60px,10vw,120px) clamp(20px,5vw,48px)", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ maxWidth: 640, marginBottom: 56 }}>
          <span style={eyebrow}>The problems you&apos;ll recognise</span>
          <h2 style={headH2}>Start with the part of your day you want back.</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#b7bcc4" }}>You bring the recurring problem — no invented efficiency claims. The MVP is scoped around a real workflow you identify.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 22 }}>
          {problems.map((p) => (
            <div key={p[0]} style={{ ...cardBase, padding: "28px 26px" }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.1em", color: "#9aa4b2", textTransform: "uppercase", marginBottom: 12 }}>The problem</div>
              <div style={{ fontSize: 17.5, fontWeight: 500, color: "#e7e4dc", lineHeight: 1.4, marginBottom: 22, paddingBottom: 22, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>{p[0]}</div>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.1em", color: GOLD, textTransform: "uppercase", marginBottom: 10 }}>Your software answer</div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#b7bcc4" }}>{p[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE COULD BUILD */}
      <section id="build" style={{ padding: "clamp(60px,10vw,120px) clamp(20px,5vw,48px)", background: "#0e121a", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, marginBottom: 56 }}>
            <span style={eyebrow}>Examples, not case studies</span>
            <h2 style={headH2}>What we could build for you.</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#b7bcc4" }}>These are generic examples of buildable first versions — not claims about past clients or results.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 22 }}>
            {builds.map((b) => (
              <div key={b[0]} style={{ ...cardBase, padding: "32px 26px" }}>
                <div style={{ fontFamily: DISPLAY, fontSize: 26, color: GOLD, marginBottom: 18 }}>{b[0]}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f5f3ee", margin: "0 0 12px" }}>{b[1]}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#b7bcc4", margin: 0 }}>{b[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "clamp(60px,10vw,120px) clamp(20px,5vw,48px)", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ maxWidth: 640, marginBottom: 64 }}>
          <span style={eyebrow}>Simple onboarding</span>
          <h2 style={headH2}>A short path to a usable MVP.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 32, position: "relative", marginBottom: 24 }}>
          <div style={{ position: "absolute", top: 22, left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.1)" }} />
          {steps.map((s) => (
            <div key={s[0]} style={{ position: "relative" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#0b0e14", border: `1px solid ${GOLD}`, color: GOLD, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: DISPLAY, fontSize: 16, marginBottom: 24, position: "relative", zIndex: 1 }}>{s[0]}</div>
              <h4 style={{ fontSize: 18, fontWeight: 700, color: "#f5f3ee", margin: "0 0 12px" }}>{s[1]}</h4>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#b7bcc4", margin: 0 }}>{s[2]}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#6d7280", margin: 0 }}>The 21-day build window begins once your scope, access and inputs are agreed and received.</p>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "clamp(56px,9vw,110px) clamp(20px,5vw,48px)", maxWidth: 1400, margin: "0 auto", textAlign: "center" }}>
        <span style={eyebrow}>Your working MVP</span>
        <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(28px,5vw,44px)", fontWeight: 500, margin: "16px 0 18px", color: "#f7f5f0" }}>Put the recurring problem on the table.</h2>
        <p style={{ fontSize: 16, color: "#9aa4b2", margin: "0 auto 34px", maxWidth: 560 }}>One call, one scope document and one fixed price before your build begins.</p>
        <Link href="/contact" style={{ display: "inline-block", background: GOLD, color: "#0b0e14", padding: "18px 36px", borderRadius: 3, fontSize: 15, fontWeight: 700 }}>Tell me your bottleneck</Link>
      </section>

      <SiteFooter />
    </DSShell>
  );
}
