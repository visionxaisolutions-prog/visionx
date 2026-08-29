"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="page-hero" style={{ paddingBottom: 40 }}>
      <div className="wrap">
        <div className="page-hero-content" style={{ maxWidth: "100%" }}>
          <div className="eyebrow">Something Went Wrong</div>
          <h1 className="headline">
            An Error <span className="accent">Occurred.</span>
          </h1>
          <p className="sub">
            Sorry about that — something broke on our end. You can try again,
            or head back to the homepage.
          </p>
          <div className="hero-ctas">
            <button type="button" className="btn btn-primary" onClick={() => retry()}>
              Try Again
            </button>
            <Link href="/" className="btn btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
