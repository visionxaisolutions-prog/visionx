import Link from "next/link";
import GlowCard from "@/components/GlowCard";

const ICON_PROPS = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": "true" as const,
};

const FEATURES = [
  {
    title: "Custom Websites",
    description:
      "Modern, responsive and performance-driven websites tailored to your brand.",
    icon: (
      <svg {...ICON_PROPS}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Performance Focused",
    description:
      "We build fast, scalable and secure solutions that deliver real results.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    title: "Impactful Media",
    description:
      "High-quality content through UGC videos, photography and immersive experiences.",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M10 9l5 3-5 3z" />
      </svg>
    ),
  },
  {
    title: "Reliable & Secure",
    description:
      "Built with best practices to ensure security, stability and long-term reliability.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const PROCESS = [
  {
    title: "Discover",
    description:
      "We learn about your brand, goals and audience to shape the right strategy.",
  },
  {
    title: "Design",
    description:
      "We craft a look and feel that reflects your brand and connects with users.",
  },
  {
    title: "Build",
    description:
      "We develop a fast, responsive and secure website tailored to your needs.",
  },
  {
    title: "Launch & Grow",
    description:
      "We ship your project and stay on hand as your business grows.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-map-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/world-map-india.svg" alt="" aria-hidden="true" />
        </div>
        <div className="hero-wave">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-wave.svg" alt="" aria-hidden="true" />
        </div>

        <div className="wrap">
          <div className="hero-content">
            <div className="eyebrow">Welcome to VisionXAI</div>
            <h1 className="headline">
              We Turn Ideas Into <span className="accent">Digital</span>{" "}
              Experiences
            </h1>
            <p className="sub">
              We are a creative digital studio crafting websites, brands, and
              digital content that connect, engage and grow.
            </p>
            <div className="hero-ctas">
              <Link href="/services" className="btn btn-primary">
                Our Services →
              </Link>
              <Link href="/work" className="btn btn-outline">
                View Our Work
              </Link>
            </div>
          </div>

          <div className="feature-card">
            {FEATURES.map((feature) => (
              <GlowCard className="feature" key={feature.title}>
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">How We Work</div>
            <h2>
              From Idea to{" "}
              <span className="accent" style={{ color: "var(--primary-text)" }}>
                Launch
              </span>
            </h2>
            <p>
              A simple, transparent process so you always know what&apos;s
              next.
            </p>
          </div>
          <div className="process-grid stagger">
            {PROCESS.map((step, i) => (
              <div className="process-step reveal" key={step.title}>
                <div className="process-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h3>Ready to start your project?</h3>
              <p>Tell us about your idea and we&apos;ll help bring it to life.</p>
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
