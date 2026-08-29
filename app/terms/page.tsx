import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the VisionXAI website and engaging our website, photography and videography services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 10 }}>
        <div className="wrap">
          <div className="page-hero-content" style={{ maxWidth: "100%" }}>
            <div className="eyebrow">Legal</div>
            <h1 className="headline">
              Terms &amp; <span className="accent">Conditions.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="legal-content reveal">
            <p className="updated">Last updated: August 29, 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website or engaging VisionXAI (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;our&rdquo;) for any service, you agree to
              these Terms &amp; Conditions. If you do not agree, please do not
              use this website or our services.
            </p>

            <h2>2. About Our Services</h2>
            <p>
              VisionXAI is a Bengaluru-based creative digital studio offering
              website design and development, photography, videography and
              related digital content services, as described on our{" "}
              <a href="/services">Services</a> page. Package names, inclusions
              and prices shown on the website are indicative and may be
              adjusted based on the final scope discussed with you.
            </p>

            <h2>3. Getting Started</h2>
            <p>
              Enquiries submitted through our contact form or WhatsApp are the
              starting point of a conversation, not a binding order. A project
              begins only once we&apos;ve agreed on scope, pricing and
              timeline with you directly, whether over email, WhatsApp or a
              call.
            </p>

            <h2>4. Pricing &amp; Payment</h2>
            <p>
              Prices listed on the Services page are one-time charges,
              inclusive of GST, unless stated otherwise at the time of
              agreement. Payment terms (advance, milestones, or full payment)
              will be confirmed with you before work begins. We do not
              process payments directly on this website.
            </p>

            <h2>5. Revisions</h2>
            <p>
              Each plan includes a set number of revision rounds as listed on
              the Services page. Additional revisions beyond what&apos;s
              included may be chargeable and will be discussed with you
              beforehand.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              Ownership of final deliverables (e.g. your website code, edited
              photos/videos) transfers to you once payment is received in
              full. Until then, all work remains the property of VisionXAI.
              We retain the right to reuse general techniques, tools and
              non-confidential know-how developed during a project for other
              clients.
            </p>

            <h2>7. Portfolio &amp; Showcase Rights</h2>
            <p>
              Unless you request otherwise in writing, we may showcase
              completed work in our portfolio, on our website, or on our
              social media (e.g. Instagram) for promotional purposes.
            </p>

            <h2>8. Client Responsibilities</h2>
            <p>
              You&apos;re responsible for providing accurate information,
              timely feedback, and any content (text, images, brand assets)
              needed to complete your project. Delays in providing these may
              affect delivery timelines.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              We aim to keep this website accurate and available, but we
              don&apos;t guarantee it will always be error-free or
              uninterrupted. To the extent permitted by law, VisionXAI is not
              liable for indirect or consequential losses arising from use of
              this website or our services.
            </p>

            <h2>10. Third-Party Services</h2>
            <p>
              This website links to third-party services including WhatsApp
              and Instagram. We&apos;re not responsible for the content,
              policies or practices of these third-party platforms once
              you leave our site.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These terms are governed by the laws of India, with courts in
              Bengaluru, Karnataka having exclusive jurisdiction over any
              disputes.
            </p>

            <h2>12. Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of
              the website after changes are posted means you accept the
              updated terms.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              Questions about these terms? Reach us at{" "}
              <a href="mailto:visionxaisolutions@gmail.com">
                visionxaisolutions@gmail.com
              </a>{" "}
              or via our <a href="/contact">Contact</a> page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
