import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "What cookies and local storage VisionXAI's website uses — and what we don't use.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 10 }}>
        <div className="wrap">
          <div className="page-hero-content" style={{ maxWidth: "100%" }}>
            <div className="eyebrow">Legal</div>
            <h1 className="headline">
              Cookie <span className="accent">Policy.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="legal-content reveal">
            <p className="updated">Last updated: August 29, 2026</p>

            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small pieces of data a website can store in your
              browser, typically used to remember who you are or track your
              activity across visits.
            </p>

            <h2>2. What We Actually Use</h2>
            <p>
              This website does not use tracking, analytics, or advertising
              cookies. The only client-side storage we use is a single item
              in your browser&apos;s local storage that remembers you&apos;ve
              seen our cookie notice, so we don&apos;t show it to you again.
              It doesn&apos;t identify you, doesn&apos;t track your activity,
              and isn&apos;t shared with anyone.
            </p>

            <h2>3. Third-Party Cookies</h2>
            <p>
              If you click through to WhatsApp or Instagram from this site,
              those platforms may set their own cookies once you&apos;re on
              their pages. That&apos;s governed by their policies, not ours —
              see WhatsApp&apos;s and Instagram&apos;s own privacy and cookie
              policies for details.
            </p>

            <h2>4. Managing Your Preferences</h2>
            <p>
              Since we don&apos;t run tracking cookies, there&apos;s nothing
              to opt out of on this site today. If that changes — for
              example, if we add analytics in the future — we&apos;ll update
              this page and ask for your consent before anything new is set.
              You can also clear your browser&apos;s local storage at any
              time via your browser&apos;s settings, which will reset the
              cookie notice.
            </p>

            <h2>5. Changes to This Policy</h2>
            <p>
              We&apos;ll update this page and the &ldquo;Last updated&rdquo;
              date whenever what we actually use changes.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              Questions? Reach us at{" "}
              <a href="mailto:visionxaisolutions@gmail.com">
                visionxaisolutions@gmail.com
              </a>{" "}
              or via our <a href="/contact">Contact</a> page. See also our{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
