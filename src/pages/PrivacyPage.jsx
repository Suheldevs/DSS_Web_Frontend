// src/pages/PrivacyPolicy.jsx
import React from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function PrivacyPolicy() {
  const lastUpdated = "August 29, 2025";

  return (
   <>
      <Breadcrumb 
     title=" Privacy Policy – Digital Signage Solutions (DSS)"
  items={[
    { label: 'Home', link: '/' },
    { label: 'Privacy & Policy', link: '/privacy-policy' }
  ]}
  />

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg text-neutral-700">
            Welcome to <strong>Digital Signage Solutions (DSS)</strong> (“we”, “us”, “our”). 
            This Privacy Policy explains how we collect, use, disclose, and protect your
            information when you visit <a href="https://www.dssup.co.in" className="underline">www.dssup.co.in</a> 
            and use our digital signage, LED display, and advertising display solutions.
          </p>

          <h2 id="info-we-collect" className="text-2xl font-semibold">1) Information We Collect</h2>
          <ul className="list-disc pl-6">
            <li><strong>Contact & Business Details:</strong> name, email, phone, company, job title.</li>
            <li><strong>Project Inputs:</strong> signage requirements, specifications, brand assets you share.</li>
            <li><strong>Technical Data:</strong> IP address, device/browser, pages viewed, UTM/source data, approximate location (via IP), cookies.</li>
            <li><strong>Files & Media:</strong> artwork, logos, documents uploaded for quotes or production.</li>
          </ul>

          <h2 id="how-we-use" className="text-2xl font-semibold">2) How We Use Your Information</h2>
          <ul className="list-disc pl-6">
            <li>Provide quotes, design support, manufacturing & installation for signage projects.</li>
            <li>Improve website UX, performance, and <strong>SEO</strong> through analytics insights.</li>
            <li>Send service updates, proposals, invoices, and—with your consent—marketing emails.</li>
            <li>Prevent fraud, enforce terms, and comply with legal obligations.</li>
          </ul>

          <h2 id="legal-bases" className="text-2xl font-semibold">3) Legal Bases (GDPR where applicable)</h2>
          <ul className="list-disc pl-6">
            <li><strong>Contract:</strong> to deliver requested DSS services.</li>
            <li><strong>Consent:</strong> for marketing and certain cookies.</li>
            <li><strong>Legitimate Interests:</strong> site security, service improvement, B2B outreach.</li>
            <li><strong>Legal Obligation:</strong> invoices, taxation, and compliance records.</li>
          </ul>

          <h2 id="sharing" className="text-2xl font-semibold">4) Sharing & Disclosure</h2>
          <p>
            We do <strong>not sell</strong> your personal data. We may share limited data with:
          </p>
          <ul className="list-disc pl-6">
            <li>Trusted vendors (hosting, analytics, payment, logistics, installation partners).</li>
            <li>Design/production vendors solely to execute your signage project.</li>
            <li>Authorities when required by law or to protect our rights.</li>
          </ul>

          <h2 id="cookies" className="text-2xl font-semibold">5) Cookies & Tracking</h2>
          <p>
            We use cookies and similar technologies to remember preferences, analyze traffic,
            and measure marketing effectiveness. You can manage cookies in your browser.
            Some features may not function without essential cookies.
          </p>

          <h2 id="data-security" className="text-2xl font-semibold">6) Data Security</h2>
          <p>
            We implement administrative, technical, and physical safeguards to protect your data.
            No method of transmission or storage is 100% secure; we continuously improve our controls.
          </p>

          <h2 id="retention" className="text-2xl font-semibold">7) Data Retention</h2>
          <p>
            We keep information only as long as necessary for the purposes described above,
            including legal, accounting, and reporting requirements.
          </p>

          <h2 id="your-rights" className="text-2xl font-semibold">8) Your Rights</h2>
          <p>
            Subject to local law, you may request access, correction, deletion, or restriction of your data,
            and opt out of marketing at any time. To exercise rights, contact us using the details below.
          </p>

          <h2 id="third-parties" className="text-2xl font-semibold">9) Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. DSS is not responsible for their privacy practices.
            Review their policies before sharing information.
          </p>

          <h2 id="children" className="text-2xl font-semibold">10) Children’s Privacy</h2>
          <p>
            Our services are intended for business users and are not directed to children under 13.
            We do not knowingly collect children’s personal information.
          </p>

          <h2 id="intl-transfers" className="text-2xl font-semibold">11) International Transfers</h2>
          <p>
            Your information may be processed outside your country. We use appropriate safeguards
            (contractual and technical) where required by law.
          </p>

          <h2 id="updates" className="text-2xl font-semibold">12) Policy Updates</h2>
          <p>
            We may update this Privacy Policy to reflect changes in our services or laws.
            Updates will be posted on this page with a new “Last Updated” date.
          </p>

        </div>
      </section>

    </>
  );
}
