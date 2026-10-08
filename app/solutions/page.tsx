import type { Metadata } from "next";
import Link from "next/link";
import GlowCard from "@/components/GlowCard";
import { TickIcon } from "@/components/icons";
import { PLANS } from "@/lib/data/packages";
import { CORE_SOLUTIONS } from "@/lib/data/solutions";
import {
  CodeIcon,
  VideoIcon,
  WorkflowIcon,
  SparkleIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Our Solutions",
  description:
    "Social media, websites & e-commerce, AI & automation and custom technology — the four pillars VisionXAI builds growth around.",
  alternates: { canonical: "/solutions" },
};

const ICON_MAP = {
  code: CodeIcon,
  video: VideoIcon,
  workflow: WorkflowIcon,
  sparkle: SparkleIcon,
  camera: VideoIcon,
  cube: SparkleIcon,
} as const;

const ADDONS = [
  { title: "Extra Reels & Shoot Days", description: "Additional content beyond your package" },
  { title: "Virtual Staging", description: "Digitally furnish empty spaces" },
  { title: "Floor Plans", description: "2D/3D layouts for listings" },
  { title: "Website Maintenance", description: "Updates, backups & monitoring" },
  { title: "Rush Delivery", description: "Priority turnaround on request" },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="page-hero services-hero">
        <div className="decor">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-wave.svg" alt="" aria-hidden="true" />
        </div>
        <div className="wrap">
          <div className="page-hero-content">
            <div className="eyebrow">Our Solutions</div>
            <h1 className="headline">
              Four Pillars. <span className="accent">One Partner.</span>
            </h1>
            <p className="sub">
              Social Media, Websites &amp; E-commerce, AI &amp; Automation and
              Custom Technology — pick what you need, or let us put them
              together.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="wwd-grid stagger">
            {CORE_SOLUTIONS.map((solution) => {
              const Icon = ICON_MAP[solution.icon];
              return (
                <Link href={solution.href} key={solution.title} style={{ textDecoration: "none", color: "inherit" }}>
                  <GlowCard className="wwd-card reveal">
                    <div className="icon">
                      <Icon size={22} />
                    </div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </GlowCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">Packages</div>
            <h2>
              Built Around{" "}
              <span className="accent" style={{ color: "var(--primary-text)" }}>
                Your Growth Stage.
              </span>
            </h2>
            <p>
              Essential, Growth and Business are social-media-first packages
              that scale up in scope and duration. Pricing is confirmed once
              we understand what you need.
            </p>
          </div>
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
                  <div className="custom-price">{plan.duration}</div>
                  <p className="custom-price-note">
                    {plan.custom
                      ? "Fully scoped to what you need — tell us what you're building and we'll quote it."
                      : "Exact pricing confirmed once we've scoped your project."}
                  </p>
                  <Link
                    href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                    className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                  >
                    {plan.custom ? "Contact Us" : "Get a Quote"}
                  </Link>
                </div>
              </GlowCard>
            ))}
          </div>
          <p className="price-note">
            Revision limits, shoot days, platforms and any ad spend are
            confirmed per project before you commit — nothing here is
            unlimited.
          </p>
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
            <p>Build on any package with focused add-ons.</p>
          </div>
          <div className="addon-grid stagger">
            {ADDONS.map((addon) => (
              <GlowCard className="addon-chip reveal" key={addon.title}>
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
              <h3>Not sure which solution fits?</h3>
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
