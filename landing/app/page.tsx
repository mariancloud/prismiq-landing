"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ background: "#0d1117", minHeight: "100vh", fontFamily: "DM Sans, -apple-system, sans-serif", color: "#e8edf3" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .prism-beam {
          position: fixed; top: 0; left: 50%; transform: translateX(-50%);
          width: 2px; height: 100vh;
          background: linear-gradient(180deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff, #c77dff);
          opacity: 0.5; pointer-events: none; z-index: 0;
        }
        .badge-dot { animation: pulse 2s ease-in-out infinite; }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        .bar-fill { animation: load 2s ease-out forwards; }
        @keyframes load { from { width: 0%; } to { width: 85%; } }
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr !important; }
          .prism-beam { display: none; }
          .nav-tagline { display: none; }
        }
      `}</style>

      <div className="prism-beam" />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: "64px",
        background: "rgba(13,17,23,0.9)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: "#1c2230", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <polygon points="10,2 18,16 2,16" fill="none" stroke="url(#pg)" strokeWidth="1.5"/>
              <defs>
                <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ff6b6b"/>
                  <stop offset="50%" stopColor="#00d4aa"/>
                  <stop offset="100%" stopColor="#4d96ff"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span style={{ fontWeight: 600, fontSize: 18 }}>PrismIQ</span>
          <span className="nav-tagline" style={{ fontFamily: "Lora, serif", fontStyle: "italic", fontSize: 13, color: "#8b949e", marginLeft: 4 }}>
            Revenue belongs to the physicians who earned it.
          </span>
        </div>
        <a href="#pilot" style={{
          background: "#00d4aa", color: "#0d1117", fontSize: 13, fontWeight: 600,
          padding: "8px 20px", borderRadius: 8, textDecoration: "none"
        }}>Request a Pilot</a>
      </nav>

      {/* HERO */}
      <div className="hero" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        alignItems: "center", gap: 64,
        maxWidth: 1280, margin: "0 auto",
        padding: "80px 48px 48px", minHeight: "100vh",
        position: "relative", zIndex: 1
      }}>
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.3)",
            color: "#00d4aa", fontSize: 12, fontWeight: 500,
            padding: "5px 12px", borderRadius: 20, marginBottom: 32
          }}>
            <span className="badge-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#00d4aa", display: "inline-block" }}/>
            Now in Early Access
          </div>

          <h1 style={{
            fontFamily: "Lora, serif", fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 24
          }}>
            Overturn Denials<br />with Policy-Level<br />Precision
          </h1>

          <div style={{ width: 80, height: 3, background: "#00d4aa", borderRadius: 2, marginBottom: 24 }} />

          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#8b949e", fontWeight: 300, maxWidth: 480, marginBottom: 40 }}>
            Every month, a biller at a small orthopedic or spine surgery
            practice gets a remittance back from Anthem Blue Cross and
            makes a quiet decision: is this worth fighting? PrismIQ answers
            that question before she picks up the phone — and drafts the
            appeal before she finishes her coffee.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#pilot" style={{
              background: "#00d4aa", color: "#0d1117", fontSize: 15, fontWeight: 600,
              padding: "13px 28px", borderRadius: 10, textDecoration: "none", display: "inline-block"
            }}>Request a Pilot</a>
            <a href="#how" style={{
              background: "transparent", color: "#e8edf3", fontSize: 15, fontWeight: 500,
              padding: "13px 28px", borderRadius: 10, textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.12)", display: "inline-block"
            }}>See How It Works</a>
          </div>
        </div>

        {/* Demo Panel */}
        <div>
          <div style={{
            background: "#161b22", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16, overflow: "hidden", boxShadow: "0 32px 64px rgba(0,0,0,0.5)"
          }}>
            <div style={{
              display: "flex", gap: 10, padding: "14px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#1c2230"
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500,
                padding: "4px 10px", borderRadius: 6,
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#8b949e"
              }}>
                <span style={{ fontSize: 8 }}>●</span> 3 claims analyzed
              </div>
              <div style={{
                display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500,
                padding: "4px 10px", borderRadius: 6,
                background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.3)", color: "#00d4aa"
              }}>✓ 2 appealable</div>
            </div>

            <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ background: "#1c2230", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 11, color: "#586374" }}>CLM-2024-1847</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#00d4aa", background: "rgba(0,212,170,0.1)", padding: "2px 8px", borderRadius: 4 }}>Appeal Ready</span>
                </div>
                <p style={{ fontFamily: "Lora, serif", fontSize: 15, fontWeight: 600, marginBottom: 2 }}>Total Knee Arthroplasty</p>
                <p style={{ fontSize: 12, color: "#8b949e", marginBottom: 12 }}>Anthem Blue Cross</p>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontFamily: "Lora, serif", fontSize: 20, fontWeight: 600, color: "#00d4aa" }}>$24,000</span>
                  <span style={{ fontSize: 12, color: "#8b949e" }}>Win Prob <strong style={{ fontSize: 18, color: "#00d4aa" }}>72%</strong></span>
                </div>
                <div style={{ width: "100%", background: "#00d4aa", color: "#0d1117", fontSize: 13, fontWeight: 600, padding: 10, borderRadius: 8, textAlign: "center", cursor: "pointer" }}>View Appeal</div>
              </div>

              <div style={{ background: "#1c2230", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 11, color: "#586374" }}>CLM-2024-1901</span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#f5a623", background: "rgba(245,166,35,0.1)", padding: "2px 8px", borderRadius: 4 }}>In Review</span>
                </div>
                <p style={{ fontFamily: "Lora, serif", fontSize: 15, fontWeight: 600, marginBottom: 2 }}>Cervical Fusion</p>
                <p style={{ fontSize: 12, color: "#8b949e", marginBottom: 12 }}>UnitedHealthcare</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "Lora, serif", fontSize: 20, fontWeight: 600, color: "#00d4aa" }}>$18,500</span>
                  <span style={{ fontSize: 12, color: "#8b949e" }}>Win Prob <strong style={{ fontSize: 18, color: "#00d4aa" }}>68%</strong></span>
                </div>
              </div>

              <p style={{ fontSize: 11, color: "#586374", textAlign: "center" }}>+ 1 more claim pending analysis</p>
            </div>

            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#1c2230"
            }}>
              <div style={{ flex: 1, marginRight: 16 }}>
                <div style={{ fontSize: 12, color: "#8b949e", marginBottom: 6 }}>Appeal generated in</div>
                <div style={{ height: 3, background: "rgba(0,212,170,0.15)", borderRadius: 2, overflow: "hidden" }}>
                  {mounted && <div className="bar-fill" style={{ height: "100%", background: "#00d4aa", borderRadius: 2 }} />}
                </div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#00d4aa", fontFamily: "monospace" }}>00:47</span>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: "80px 48px", background: "#111827", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Lora, serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 600, textAlign: "center", marginBottom: 12 }}>How It Works</h2>
          <p style={{ color: "#8b949e", textAlign: "center", marginBottom: 48, fontSize: 16 }}>From denied claim to appeal letter in three simple steps.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { n: "01", icon: "↑", title: "Connect your ERA/835 feed", body: "Upload denied claims or connect your ERA/835 feed directly. We accept all major clearinghouse formats." },
              { n: "02", icon: "⌕", title: "PrismIQ analyzes payer policy", body: "Our AI cross-references the denial reason code against current payer policy language and medical necessity criteria." },
              { n: "03", icon: "≡", title: "Receive your appeal letter", body: "You receive a policy-cited, ready-to-send appeal letter within 24 hours. No templates — constructed arguments." },
            ].map((step) => (
              <div key={step.n} style={{ background: "#1c2230", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 28, position: "relative" }}>
                <div style={{ position: "absolute", top: -14, left: 24, background: "#00d4aa", color: "#0d1117", fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 6 }}>{step.n}</div>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "#00d4aa", marginBottom: 20, marginTop: 8 }}>{step.icon}</div>
                <h3 style={{ fontFamily: "Lora, serif", fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "#8b949e", lineHeight: 1.6 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILOT FORM */}
      <section id="pilot" style={{ padding: "80px 48px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Lora, serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 600, textAlign: "center", marginBottom: 16 }}>Request a Pilot</h2>
          <p style={{ color: "#8b949e", textAlign: "center", marginBottom: 40, fontSize: 15, lineHeight: 1.7 }}>
            Share a sample of your Anthem denied claims. We'll show you exactly what was recoverable — and return a ready-to-send appeal for your hardest denial within 24 hours.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, color: "#8b949e", display: "block", marginBottom: 6 }}>Name <span style={{ color: "#f85149" }}>*</span></label>
                <input placeholder="Your name" style={{ width: "100%", background: "#161b22", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 16px", color: "#e8edf3", fontSize: 14, outline: "none", fontFamily: "inherit" }}/>
              </div>
              <div>
                <label style={{ fontSize: 13, color: "#8b949e", display: "block", marginBottom: 6 }}>Email <span style={{ color: "#f85149" }}>*</span></label>
                <input placeholder="you@practice.com" style={{ width: "100%", background: "#161b22", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 16px", color: "#e8edf3", fontSize: 14, outline: "none", fontFamily: "inherit" }}/>
              </div>
            </div>
            <div>
              <label style={{ fontSize: 13, color: "#8b949e", display: "block", marginBottom: 6 }}>Practice Name <span style={{ color: "#f85149" }}>*</span></label>
              <input placeholder="Orthopedic Specialists of Virginia" style={{ width: "100%", background: "#161b22", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 16px", color: "#e8edf3", fontSize: 14, outline: "none", fontFamily: "inherit" }}/>
            </div>
            <div>
              <label style={{ fontSize: 13, color: "#8b949e", display: "block", marginBottom: 6 }}>Tell us about your denial volume <span style={{ color: "#f85149" }}>*</span></label>
              <textarea placeholder="How many denials do you handle per month? Which payers are most problematic?" rows={4} style={{ width: "100%", background: "#161b22", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 16px", color: "#e8edf3", fontSize: 14, outline: "none", fontFamily: "inherit", resize: "vertical" }}/>
            </div>
            <button style={{ width: "100%", background: "#00d4aa", color: "#0d1117", fontSize: 15, fontWeight: 600, padding: 14, borderRadius: 10, border: "none", cursor: "pointer", fontFamily: "inherit" }}>Request a Pilot</button>
            <div style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 8 }}>
              {["SOC 2", "HIPAA", "BAA Ready"].map(label => (
                <span key={label} style={{ fontSize: 12, color: "#586374", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: "#00d4aa" }}>✓</span> {label}
                </span>
              ))}
            </div>
            <p style={{ textAlign: "center", fontFamily: "Lora, serif", fontStyle: "italic", fontSize: 13, color: "#586374" }}>
              Every denial is a story. PrismIQ writes the rebuttal.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "20px 48px", display: "flex", justifyContent: "center", gap: 48, background: "#0d1117", position: "relative", zIndex: 1 }}>
        {["Built for orthopedic + spine billing teams", "24-hour appeal turnaround", "Anthem, UHC, Aetna policy coverage"].map(item => (
          <span key={item} style={{ fontSize: 13, color: "#586374", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ color: "#00d4aa" }}>✓</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
