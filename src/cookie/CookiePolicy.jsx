// src/pages/CookiePolicy.jsx
import React from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function CookiePolicy() {
  const lastUpdated = "August 29, 2025";

  return (
    <>
      <Breadcrumb
        title=" Cookie Policy – Digital Signage Solutions (DSS)"
        items={[
          { label: "Home", link: "/" },
          { label: "Cookie Policy", link: "/cookie-policy" },
        ]}
      />

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="prose prose-neutral max-w-none">
          <p className="text-lg text-neutral-700">
            This Cookie Policy explains how{" "}
            <strong>Digital Signage Solutions (DSS) </strong> 
            uses cookies and similar technologies on{" "}
            <a
              href="https://www.dssup.co.in"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.dssup.co.in
            </a> 
            . By using our website and accepting cookies, you consent to the
            collection of certain technical information such as{" "}
            <strong>location, device details, and network information</strong>.
          </p>

          <h2 className="text-2xl font-semibold">1) What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your browser or device. They
            help us recognize your device, remember preferences, improve website
            performance, and measure marketing effectiveness.
          </p>

          <h2 className="text-2xl font-semibold">2) Types of Cookies We Use</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Essential Cookies:</strong> Required for core site
              functionality (login, navigation, forms).
            </li>
            <li>
              <strong>Performance & Analytics Cookies:</strong> Collect
              aggregated data on visits, pages viewed, and site performance.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Help us deliver relevant ads
              and measure campaign success.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> Remember user preferences,
              saved forms, and previous interactions.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">
            3) Information Collected Through Cookies
          </h2>
          <p>
            When you accept cookies on our website, we may collect the following
            technical details:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Device Information:</strong> type, operating system,
              browser version.
            </li>
            <li>
              <strong>Location Data:</strong> approximate location derived from
              IP address or browser settings.
            </li>
            <li>
              <strong>Network Information:</strong> ISP, connection type,
              performance metrics.
            </li>
            <li>
              <strong>User Interaction:</strong> pages visited, time spent,
              clicks, referring sources.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">4) How We Use This Data</h2>
          <ul className="list-disc pl-6">
            <li>Improve website usability, speed, and design.</li>
            <li>
              Optimize digital signage, LED display, and advertising solutions
              for customers.
            </li>
            <li>
              Enhance SEO and marketing campaigns by understanding visitor
              behavior.
            </li>
            <li>
              Provide location-specific content, offers, and support services.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">5) Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings.
            Most browsers allow you to block or delete cookies. However, some
            site features may not function properly if cookies are disabled.
          </p>

          <h2 className="text-2xl font-semibold">6) Third-Party Cookies</h2>
          <p>
            We may use trusted third-party services such as{" "}
            <strong>Google Analytics</strong> or <strong>advertising partners</strong> 
            that also place cookies to analyze traffic and deliver targeted ads.
          </p>

          <h2 className="text-2xl font-semibold">7) Consent</h2>
          <p>
            By clicking “Accept” on our cookie banner, you agree to the use of
            cookies and the processing of your technical information (location,
            device, network) as described in this policy.
          </p>

          <h2 className="text-2xl font-semibold">8) Updates to Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect
            changes in law, technology, or our practices. Updates will be
            posted on this page with a new “Last Updated” date.
          </p>

          <p className="mt-6 text-sm text-neutral-600">
            <em>Last Updated: {lastUpdated}</em>
          </p>
        </div>
      </section>
    </>
  );
}
