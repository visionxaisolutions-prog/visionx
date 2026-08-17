import type { Metadata } from "next";
import Link from "next/link";
import { TickIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Website, photography and videography packages from VisionXAI — Essential, Growth and Premium plans for every stage of growth.",
};

const PLANS = [
  {
    name: "Essential",
    features: ["Website"],
    oldPrice: "₹16,400",
    discount: "27% OFF",
    price: "₹11,999",
    popular: false,
  },
  {
    name: "Growth",
    features: ["Website", "UGC Videos & Photos"],
    oldPrice: "₹29,800",
    discount: "33% OFF",
    price: "₹19,999",
    popular: false,
  },
  {
    name: "Premium",
    features: [
      "Website",
      "1 Free Service (Your Choice)",
      "3D Property Tour",
      "Product Photography",
      "UGC Videos / Social Media Presence",
    ],
    oldPrice: "₹83,300",
    discount: "40% OFF",
    price: "₹49,999",
    popular: true,
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

export default function ServicesPage() {
  return (
    <>
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
              <div
                className={`price-card reveal${plan.popular ? " popular" : ""}`}
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
                  <span className="price-old">{plan.oldPrice}</span>
                  <span className="discount-badge">{plan.discount}</span>
                  <div className="price-new">{plan.price}</div>
                  <div className="price-unit">/ one-time</div>
                  <Link
                    href="/contact"
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    Choose Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="price-note">
            * All plans are one-time payment with no hidden charges.
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
              >
                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>{" "}
              Prices are including GST.
            </span>
          </p>
        </div>
      </section>

      <section className="section addons" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Add-ons</div>
            <h2>
              Need Something{" "}
              <span className="accent" style={{ color: "var(--primary)" }}>
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
              <div className="addon-chip reveal" key={addon.title}>
                <div className="icon">{addon.icon}</div>
                <div className="txt">
                  <strong>{addon.title}</strong>
                  <span>{addon.description}</span>
                </div>
              </div>
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
              Let&apos;s Talk →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
