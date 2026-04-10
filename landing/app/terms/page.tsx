export default function TermsOfService() {
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
        <h1 style={{ fontFamily: "Lora, serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 600, color: "#e8edf3", marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ fontSize: 13, color: "#586374", marginBottom: 48 }}>Last updated: April 9, 2026</p>

        <p>These Terms of Service ("Terms") govern your use of prismiqlabs.ai and any services offered by PrismIQ ("we," "us," or "our"), a company incorporated in California. By accessing our website or submitting a pilot request, you agree to these Terms.</p>

        <h2>1. Services</h2>
        <p>PrismIQ provides AI-powered revenue cycle management software designed to help medical billing teams manage claim denials and generate appeal letters. During the pilot phase, access to PrismIQ's platform is by invitation only, subject to a separate pilot agreement and Business Associate Agreement (BAA) where applicable.</p>

        <h2>2. Eligibility</h2>
        <p>By using our site or submitting a pilot request, you represent that:</p>
        <ul>
          <li>You are at least 18 years old</li>
          <li>You have the authority to bind your organization to these Terms</li>
          <li>Your use will comply with all applicable laws and regulations, including HIPAA where applicable</li>
        </ul>

        <h2>3. Pilot Program</h2>
        <p>Submitting a pilot request does not guarantee access to PrismIQ's platform. We will review each request and reach out with next steps. Pilot participants will be required to sign a separate pilot agreement and BAA before any Protected Health Information (PHI) is shared with PrismIQ.</p>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use our site for any unlawful purpose</li>
          <li>Submit false or misleading information in pilot request forms</li>
          <li>Attempt to gain unauthorized access to any part of our systems</li>
          <li>Use automated tools to scrape or extract content from our site</li>
          <li>Transmit any PHI through the marketing site or pilot request form</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>All content on prismiqlabs.ai — including text, design, graphics, and software — is the property of PrismIQ and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

        <h2>6. HIPAA Compliance</h2>
        <p>PrismIQ is designed to operate in compliance with HIPAA. We do not accept PHI through this marketing website. If you are a covered entity or business associate, you must execute a BAA with PrismIQ before sharing any PHI. Contact hello@prismiqlabs.ai to initiate a BAA.</p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>Our website and any information provided are offered "as is" without warranty of any kind. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components. Nothing on this site constitutes legal, medical, or financial advice.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by California law, PrismIQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this site or our services, even if we have been advised of the possibility of such damages. Our total liability to you for any claim shall not exceed $100.</p>

        <h2>9. Indemnification</h2>
        <p>You agree to indemnify and hold PrismIQ harmless from any claims, losses, or damages arising from your violation of these Terms or your use of our site.</p>

        <h2>10. Governing Law</h2>
        <p>These Terms are governed by the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts of San Mateo County, California.</p>

        <h2>11. Changes to These Terms</h2>
        <p>We reserve the right to update these Terms at any time. We will notify you of significant changes by updating the date at the top of this page. Continued use of our site after changes constitutes acceptance of the updated Terms.</p>

        <h2>12. Contact</h2>
        <p>Questions about these Terms? Contact us at:</p>
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
