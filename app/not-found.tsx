import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ paddingBottom: 40 }}>
      <div className="wrap">
        <div className="page-hero-content" style={{ maxWidth: "100%" }}>
          <div className="eyebrow">404</div>
          <h1 className="headline">
            Page Not <span className="accent">Found.</span>
          </h1>
          <p className="sub">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved.
          </p>
          <div className="hero-ctas">
            <Link href="/" className="btn btn-primary">
              Back to Home →
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
