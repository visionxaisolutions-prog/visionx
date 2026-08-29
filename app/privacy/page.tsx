import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How VisionXAI collects, uses and protects the personal information you share through our website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 10 }}>
        <div className="wrap">
          <div className="page-hero-content" style={{ maxWidth: "100%" }}>
            <div className="eyebrow">Legal</div>
            <h1 className="headline">
              Privacy <span className="accent">Policy.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="legal-content reveal">
            <p className="updated">Last updated: August 29, 2026</p>

            <h2>1. Introduction</h2>
            <p>
              This policy explains what personal information VisionXAI
              collects through this website, why, and how we handle it. We
              keep this simple on purpose — we&apos;re a small studio and we
              only collect what we actually need to respond to you.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              When you submit our <a href="/contact">contact form</a>, we
              collect your name, email address, the message you write, and
              (if applicable) the service plan you enquired about. We don&apos;t
              ask for or collect payment details, government IDs, or any
              other sensitive personal data through this website.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information you submit solely to respond to your
              enquiry and discuss your project. We don&apos;t use it for
              advertising, don&apos;t sell it, and don&apos;t share it with
              third parties except the service providers described below,
              which are strictly needed to deliver your message to us.
            </p>

            <h2>4. How We Store &amp; Protect Your Information</h2>
            <p>
              Contact form submissions are sent directly to our business
              email inbox via Gmail — we don&apos;t store submissions in a
              separate database on this website. Your message lives in our
              email inbox, protected the same way as the rest of our email
              account.
            </p>

            <h2>5. Third-Party Services We Use</h2>
            <p>Depending on how you reach us, your information may pass through:</p>
            <ul>
              <li>
                <strong>Google / Gmail</strong> — to deliver contact form
                submissions to our inbox.
              </li>
              <li>
                <strong>WhatsApp (Meta)</strong> — if you message us via the
                WhatsApp links on this site, that conversation is governed by
                WhatsApp&apos;s own privacy policy.
              </li>
              <li>
                <strong>Instagram (Meta)</strong> — our Instagram link takes
                you to Meta&apos;s platform, governed by their privacy policy.
              </li>
              <li>
                <strong>Our hosting provider</strong> — like any website, our
                host may log basic technical data (e.g. IP address, request
                timestamps) for security and reliability purposes.
              </li>
            </ul>

            <h2>6. Cookies</h2>
            <p>
              This website doesn&apos;t use analytics or advertising cookies.
              See our <a href="/cookies">Cookie Policy</a> for the full
              details of what little client-side storage we do use.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              You can ask us what information we hold about you, request a
              correction, or ask us to delete it, at any time. Just email{" "}
              <a href="mailto:visionxaisolutions@gmail.com">
                visionxaisolutions@gmail.com
              </a>
              . These rights are in line with India&apos;s Digital Personal
              Data Protection Act, 2023.
            </p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>
              This website and our services are intended for businesses and
              adults, not children. We don&apos;t knowingly collect
              information from anyone under 18.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              If we change how we handle your data — for example, if we add
              analytics in the future — we&apos;ll update this page and the
              &ldquo;Last updated&rdquo; date above.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              Questions about this policy? Reach us at{" "}
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
