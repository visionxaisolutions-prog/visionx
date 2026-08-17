import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "VisionXAI's portfolio is coming soon — stay tuned for our upcoming website, photography and videography projects.",
};

export default function WorkPage() {
  return (
    <section className="page-hero work-hero">
      <div className="wrap work-grid">
        <div className="page-hero-content">
          <div className="eyebrow">Our Work</div>
          <h1 className="headline">
            Great Work is <span className="accent">On the Way.</span>
          </h1>
          <p className="sub">
            We&apos;re putting our passion and skills into creating
            exceptional digital experiences.
          </p>
          <p className="sub">Stay tuned for our upcoming projects.</p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary">
              Let&apos;s Connect →
            </Link>
          </div>
        </div>
        <div className="work-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/work-visual.svg" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
