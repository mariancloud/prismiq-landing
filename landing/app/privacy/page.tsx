export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#0d1117", minHeight: "100vh", fontFamily: "DM Sans, -apple-system, sans-serif", color: "#e8edf3" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        h1, h2, h3 { font-family: 'Lora', serif; }
        p, li { line-height: 1.8; color: #8b949e; font-size: 15px; }
        h2 { font-size: 20px; font-weight: 600; color: #e8edf3; margin: 40px 0 12px; }
        h3 { font-size: 16px; font-weight: 600; color: #e8edf3; margin: 24px 0 8px; }
        ul { padding-left: 20px; }
        li { margin-bottom: 6px; }
        a { color: #00d4aa; text-decoration: none; }
      `}</style>

      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: "64px",
        background: "rgba(13,17,23,0.95)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)"
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "#1c2230", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <polygon points="16,3 29,26 3,26" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
              <line x1="10" y1="16" x2="20" y2="16" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" strokeDasharray="2 2"/>
              <line x1="20" y1="16" x2="28" y2="12" stroke="#ff6b6b" strokeWidth="1.2"/>
              <line x1="20" y1="16" x2="28" y2="14" stroke="#ffd93d" strokeWidth="1.2"/>
              <line x1="20" y1="16" x2="29" y2="16" stroke="#6bcb77" strokeWidth="1.2"/>
              <line x1="20" y1="16" x2="28" y2="18" stroke="#4d96ff" strokeWidth="1.2"/>
              <line x1="20" y1="16" x2="27" y2="20" stroke="#c77dff" strokeWidth="1.2"/>
              <circle cx="20" cy="16" r="1.5" fill="white" opacity="0.6"/>
            </svg>
          </div>
          <span style={{ fontWeight: 600, fontSize: 18, color: "#e8edf3" }}>PrismIQ</span>
        </a>
        <a href="/" style={{ fontSize: 13, color: "#8b949e" }}>← Back to home</a>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px 48px 80px" }}>
        <p style={{ fontSize: 12, color: "#586374", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>Legal</p>
        <h1 style={{ fontFamily: "Lora, serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 600, color: "#e8edf3", marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ fontSize: 13, color: "#586374", marginBottom: 48 }}>Last updated: April 9, 2026</p>

        <p>PrismIQ ("we," "us," or "our") is a California-based company that provides AI-powered revenue cycle management software for medical billing teams. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit prismiqlabs.ai or request a pilot.</p>

        <h2>1. Information We Collect</h2>
        <h3>Information you provide directly</h3>
        <p>When you fill out our pilot request form, we collect:</p>
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your practice or organization name</li>
          <li>Information you share about your denial volume and payer challenges</li>
        </ul>

        <h3>Information collected automatically</h3>
        <p>When you visit our site, we may automatically collect:</p>
        <ul>
          <li>IP address and general location data</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent on the site</li>
          <li>Referring URL</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your pilot request and communicate next steps</li>
          <li>Send you information about PrismIQ relevant to your inquiry</li>
          <li>Improve our website and understand how visitors use it</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p style={{ marginTop: 12 }}>We do not sell your personal information. We do not share it with third parties except as described in this policy.</p>

        <h2>3. HIPAA and Protected Health Information</h2>
        <p>PrismIQ's platform is designed to handle Protected Health Information (PHI) in compliance with the Health Insurance Portability and Accountability Act (HIPAA). We require a signed Business Associate Agreement (BAA) before any PHI is shared with us. The information collected on this marketing website — name, email, practice name — is not PHI and is governed by this Privacy Policy, not HIPAA.</p>

        <h2>4. Data Retention</h2>
        <p>We retain your contact information for as long as necessary to respond to your inquiry and maintain our business relationship, or until you ask us to delete it. You may request deletion at any time by emailing hello@prismiqlabs.ai.</p>

        <h2>5. Your Rights (California Residents)</h2>
        <p>Under the California Consumer Privacy Act (CCPA), California residents have the right to:</p>
        <ul>
          <li>Know what personal information we collect and how it is used</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of the sale of personal information (we do not sell personal information)</li>
          <li>Non-discrimination for exercising your privacy rights</li>
        </ul>
        <p style={{ marginTop: 12 }}>To exercise any of these rights, contact us at hello@prismiqlabs.ai.</p>

        <h2>6. Cookies</h2>
        <p>We use cookies and similar tracking technologies to understand how visitors interact with our site. You can control cookie settings through your browser. Disabling cookies may affect some functionality of the site.</p>

        <h2>7. Third-Party Services</h2>
        <p>We may use third-party services such as Vercel (hosting) and analytics tools. These services have their own privacy policies and may collect information about your use of our site in accordance with their policies.</p>

        <h2>8. Security</h2>
        <p>We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We encourage you to contact us immediately at hello@prismiqlabs.ai if you believe your information has been compromised.</p>

        <h2>9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this page. Continued use of our site after changes constitutes acceptance of the updated policy.</p>

        <h2>10. Contact Us</h2>
        <p>If you have questions about this Privacy Policy or how we handle your data, contact us at:</p>
        <p style={{ marginTop: 12, color: "#e8edf3" }}>
          PrismIQ<br />
          San Mateo, California<br />
          <a href="mailto:hello@prismiqlabs.ai">hello@prismiqlabs.ai</a>
        </p>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 48px", display: "flex", justifyContent: "center", gap: 24 }}>
        <a href="/privacy" style={{ fontSize: 13, color: "#586374" }}>Privacy Policy</a>
        <a href="/terms" style={{ fontSize: 13, color: "#586374" }}>Terms of Service</a>
        <span style={{ fontSize: 13, color: "#3a4150" }}>© 2026 PrismIQ</span>
      </div>
    </div>
  );
}
