import type { Metadata } from "next";
import Link from "next/link";
import { TickIcon, WhatsAppIcon, CartIcon } from "@/components/icons";
import GlowCard from "@/components/GlowCard";
import { PLANS } from "@/lib/data/packages";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Website, photography and videography packages from VisionXAI — Essential, Growth, Premium and Custom Enterprise plans for every stage of growth.",
  alternates: { canonical: "/services" },
};

// Comparison table is derived directly from PLANS' own feature lists so it
// can never drift out of sync with the pricing cards above.
const COMPARE_PLANS = PLANS.filter((plan) => !plan.custom);

function planHasFeature(plan: (typeof PLANS)[number], keyword: string) {
  return plan.features.some((f) => f.toLowerCase().includes(keyword.toLowerCase()));
}

function revisionLabel(plan: (typeof PLANS)[number]) {
  const match = plan.features.find((f) => f.toLowerCase().includes("revision"));
  return match || "—";
}

const COMPARE_ROWS = [
  { label: "Website", keyword: "website" },
  { label: "Mobile Responsive Design", keyword: "responsive" },
  { label: "Basic SEO Setup", keyword: "seo" },
  { label: "Contact Form Integration", keyword: "contact form" },
  { label: "UGC Videos & Photos", keyword: "ugc" },
  { label: "Product Photography", keyword: "photography" },
  { label: "3D Property Tour", keyword: "3d" },
  { label: "Social Media Presence", keyword: "social" },
  { label: "Revisions", keyword: "", revisionRow: true },
];

const CAPABILITIES = [
  {
    title: "WhatsApp Automation",
    icon: <WhatsAppIcon size={26} />,
    description:
      "Turn WhatsApp into a 24/7 sales and support channel. We set up automated flows so enquiries get answered instantly and orders get confirmed automatically — your team only steps in when a human touch is actually needed.",
    features: [
      "Automated replies & FAQ handling",
      "Order confirmations & shipping updates",
      "Product catalog inside WhatsApp",
      "Broadcast campaigns to your customer list",
      "WhatsApp Business API setup",
    ],
  },
  {
    title: "E-Commerce App Development",
    icon: <CartIcon size={26} />,
    description:
      "A full online store built to actually sell — not just a catalog. Product listings, secure checkout and order management, built as a website or app depending on what your business needs.",
    features: [
      "Product catalog & inventory management",
      "Secure payment gateway integration",
      "Order tracking & admin dashboard",
      "Web or native mobile app",
      "Built to scale with your product range",
    ],
  },
];

const ADDON_ICON_PROPS = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": "true" as const,
};

const ADDONS = [
  {
    title: "Virtual Staging",
    description: "Digitally furnish empty spaces",
    icon: (
      <svg {...ADDON_ICON_PROPS}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Floor Plans",
    description: "2D/3D layouts for listings",
    icon: (
      <svg {...ADDON_ICON_PROPS}>
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    title: "Social Media Retainer",
    description: "Ongoing monthly content & posting",
    icon: (
      <svg {...ADDON_ICON_PROPS}>
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    title: "Website Maintenance",
    description: "Updates, backups & monitoring",
    icon: (
      <svg {...ADDON_ICON_PROPS}>
        <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2z" />
      </svg>
    ),
  },
  {
    title: "Rush Delivery",
    description: "Priority turnaround on request",
    icon: (
      <svg {...ADDON_ICON_PROPS}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development, Content, Automation & AI Solutions",
  provider: {
    "@type": "Organization",
    name: "VisionXAI",
  },
  areaServed: "IN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "VisionXAI Packages",
    itemListElement: PLANS.filter((p) => !p.custom).map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price?.replace(/[₹,]/g, ""),
      priceCurrency: "INR",
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
      />
      <section className="page-hero services-hero">
        <div className="decor">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-wave.svg" alt="" aria-hidden="true" />
        </div>
        <div className="wrap">
          <div className="page-hero-content">
            <div className="eyebrow">Our Services</div>
            <h1 className="headline">
              Plans Designed for Every Stage of{" "}
              <span className="accent">Your Growth.</span>
            </h1>
            <p className="sub">
              Simple, transparent and powerful plans to build your online
              presence and elevate your brand.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="pricing-grid stagger">
            {PLANS.map((plan) => (
              <GlowCard
                className={`price-card reveal${plan.popular ? " popular" : ""}${plan.custom ? " custom" : ""}`}
                key={plan.name}
              >
                {plan.popular && (
                  <div className="ribbon-clip">
                    <div className="ribbon">POPULAR</div>
                  </div>
                )}
                <h3>{plan.name}</h3>
                <ul className="plan-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="tick">
                        <TickIcon />
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="price-row">
                  {plan.custom ? (
                    <>
                      <div className="custom-price">Let&apos;s Talk</div>
                      <p className="custom-price-note">
                        Enterprise-grade &amp; fully scoped to what you need —
                        tell us what you&apos;re building and we&apos;ll
                        quote it.
                      </p>
                    </>
                  ) : (
                    <>
                      <span className="price-old">{plan.oldPrice}</span>
                      <span className="discount-badge">{plan.discount}</span>
                      <div className="price-new">{plan.price}</div>
                      <div className="price-unit">/ one-time</div>
                    </>
                  )}
                  <Link
                    href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    {plan.custom ? "Contact Us" : "Choose Plan"}
                  </Link>
                </div>
              </GlowCard>
            ))}
          </div>

          <p className="price-note">
            * Essential, Growth and Premium are one-time payments with no
            hidden charges. Custom projects are scoped and quoted
            individually.
            <span className="gst">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>{" "}
              Prices are including GST.
            </span>
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Compare Plans</div>
            <h2>
              See What&apos;s{" "}
              <span className="accent" style={{ color: "var(--primary-text)" }}>
                Included.
              </span>
            </h2>
            <p>
              A side-by-side look at Essential, Growth and Premium — built
              directly from each plan&apos;s actual feature list, so this
              always matches the pricing above.
            </p>
          </div>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  {COMPARE_PLANS.map((plan) => (
                    <th scope="col" key={plan.name}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {COMPARE_PLANS.map((plan) => (
                      <td key={plan.name}>
                        {row.revisionRow ? (
                          revisionLabel(plan)
                        ) : planHasFeature(plan, row.keyword) ? (
                          <span className="compare-yes" aria-label="Included">
                            <TickIcon size={15} />
                          </span>
                        ) : (
                          <span className="compare-no" aria-hidden="true">
                            —
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="price-note" style={{ marginTop: "18px" }}>
            Need something not on this list? That&apos;s exactly what the
            Custom plan below is for.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Custom &amp; Enterprise</div>
            <h2>
              Built for{" "}
              <span className="accent" style={{ color: "var(--primary-text)" }}>
                Bigger Needs.
              </span>
            </h2>
            <p>
              Two capabilities we get asked for most under the Custom plan —
              here&apos;s what&apos;s actually included.
            </p>
          </div>
          <div className="capability-grid stagger">
            {CAPABILITIES.map((capability) => (
              <GlowCard className="capability-card reveal" key={capability.title}>
                <div className="icon">{capability.icon}</div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul>
                  {capability.features.map((feature) => (
                    <li key={feature}>
                      <span className="tick">
                        <TickIcon />
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?plan=${encodeURIComponent(capability.title)}`}
                  className="btn btn-outline"
                >
                  Enquire About This →
                </Link>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section addons section-band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Add-ons</div>
            <h2>
              Need Something{" "}
              <span className="accent" style={{ color: "var(--primary-text)" }}>
                Extra?
              </span>
            </h2>
            <p>
              Build on any plan with focused add-ons — pick only what your
              project needs.
            </p>
          </div>
          <div className="addon-grid stagger">
            {ADDONS.map((addon) => (
              <GlowCard className="addon-chip reveal" key={addon.title}>
                <div className="icon">{addon.icon}</div>
                <div className="txt">
                  <strong>{addon.title}</strong>
                  <span>{addon.description}</span>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h3>Not sure which plan fits?</h3>
              <p>Tell us about your project and we&apos;ll point you to the right package.</p>
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
