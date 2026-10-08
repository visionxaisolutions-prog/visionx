import Link from "next/link";
import type { ReactNode } from "react";
import { TickIcon } from "@/components/icons";
import type { SolutionPage } from "@/lib/data/solutions";
import { SITE_URL } from "@/lib/site";

const SERVICE_JSON_LD_TYPE = "Service" as const;

export default function SolutionPageLayout({
  data,
  children,
}: {
  data: SolutionPage;
  children?: ReactNode;
}) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": SERVICE_JSON_LD_TYPE,
    name: data.eyebrow,
    description: data.metaDescription,
    provider: { "@type": "Organization", name: "VisionXAI" },
    areaServed: "IN",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
      {
        "@type": "ListItem",
        position: 3,
        name: data.eyebrow,
        item: `${SITE_URL}/${data.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="page-hero">
        <div className="decor">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-wave.svg" alt="" aria-hidden="true" />
        </div>
        <div className="wrap">
          <div className="page-hero-content">
            <div className="eyebrow">{data.eyebrow}</div>
            <h1 className="headline">{data.headline}</h1>
            <p className="sub">{data.sub}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">What&apos;s Included</div>
            <h2>Scope of This Solution.</h2>
          </div>
          <ul className="plan-list" style={{ maxWidth: 680 }}>
            {data.services.map((service) => (
              <li key={service}>
                <span className="tick">
                  <TickIcon />
                </span>{" "}
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {children}

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h3>Need this for your business?</h3>
              <p>Tell us what you&apos;re building and we&apos;ll scope it.</p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
