import Link from "next/link";
import GlowCard from "@/components/GlowCard";
import {
  CodeIcon,
  VideoIcon,
  CameraIcon,
  CubeIcon,
  WorkflowIcon,
  SparkleIcon,
  CompassIcon,
  RocketIcon,
  BuildingIcon,
  StoreIcon,
  StorefrontIcon,
} from "@/components/icons";
import { WHAT_WE_DO } from "@/lib/data/what-we-do";
import { WHY_PILLARS } from "@/lib/data/why-pillars";
import { INDUSTRIES } from "@/lib/data/industries";
import { PROJECTS } from "@/lib/data/projects";
import { PLANS } from "@/lib/data/packages";
import { FAQS } from "@/lib/data/faqs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const ICON_MAP = {
  code: CodeIcon,
  video: VideoIcon,
  camera: CameraIcon,
  cube: CubeIcon,
  workflow: WorkflowIcon,
  sparkle: SparkleIcon,
  compass: CompassIcon,
  rocket: RocketIcon,
  building: BuildingIcon,
  store: StoreIcon,
  storefront: StorefrontIcon,
} as const;

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
    description: "We learn about your brand, goals and audience to shape the right strategy.",
  },
  {
    title: "Design",
    description: "We craft a look and feel that reflects your brand and connects with users.",
  },
  {
    title: "Build",
    description: "We develop a fast, responsive and secure website tailored to your needs.",
  },
  {
    title: "Launch",
    description: "We test, optimize and take your project live.",
  },
  {
    title: "Grow",
    description: "We keep improving the experience as your business evolves.",
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
            <div className="eyebrow">VisionXAI — Mind to Media</div>
            <h1 className="headline">
              We Turn Ideas Into <span className="accent">Digital</span>{" "}
              Experiences
            </h1>
            <p className="sub">
              Websites, content, automation and AI — designed to help
              businesses build a stronger digital presence and grow with
              technology.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-primary">
                Start a Project →
              </Link>
              <Link href="/projects" className="btn btn-outline">
                View Projects
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

      <section className="trust-strip">
        <div className="wrap">
          <span>Websites</span>
          <span className="dot" aria-hidden="true" />
          <span>Content &amp; UGC</span>
          <span className="dot" aria-hidden="true" />
          <span>Automation</span>
          <span className="dot" aria-hidden="true" />
          <span>AI Solutions</span>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">What We Do</div>
            <h2>Everything You Need to Build Your Digital Presence.</h2>
            <p>We combine creative execution and technology under one roof.</p>
          </div>
          <div className="wwd-grid stagger">
            {WHAT_WE_DO.map((item) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <GlowCard className="wwd-card reveal" key={item.title}>
                  <div className="num" aria-hidden="true">
                    {item.num}
                  </div>
                  <div className="icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Selected Projects</div>
            <h2>Work That Speaks for Itself.</h2>
            <p>Brands we&apos;re currently working with.</p>
          </div>
          <div className="project-grid stagger">
            {PROJECTS.map((project) => (
              <GlowCard className="project-card reveal" key={project.slug}>
                <span className="status-badge">{project.status}</span>
                <h3>{project.title}</h3>
                <div className="industry">{project.industry}</div>
                <div className="services-tags">
                  {project.services.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <p className="summary">{project.summary}</p>
                <Link href={`/projects/${project.slug}`} className="view-link">
                  View Case Study →
                </Link>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Why VisionXAI</div>
            <h2>One Partner. From Idea to Execution.</h2>
            <p>
              You don&apos;t have to coordinate multiple vendors — strategy,
              design, technology and media all come from the same team.
            </p>
          </div>
          <div className="pillar-grid stagger">
            {WHY_PILLARS.map((pillar) => {
              const Icon = ICON_MAP[pillar.icon];
              return (
                <div className="pillar-card reveal" key={pillar.title}>
                  <div className="icon">
                    <Icon size={24} />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Packages</div>
            <h2>Simple, Transparent Pricing.</h2>
            <p>Full deliverables and comparison on the Services page.</p>
          </div>
          <div className="packages-teaser stagger">
            {PLANS.map((plan) => (
              <div
                className={`package-mini reveal${plan.popular ? " popular" : ""}`}
                key={plan.name}
              >
                <h3>{plan.name}</h3>
                <p className="price">{plan.custom ? "Let's Talk" : plan.price}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/services" className="btn btn-outline">
              See Full Pricing →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">How We Work</div>
            <h2>
              From Idea to{" "}
              <span className="accent" style={{ color: "var(--primary-text)" }}>
                Launch
              </span>
              .
            </h2>
            <p>A simple, transparent process so you always know what&apos;s next.</p>
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

      <section className="section section-band">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Industries</div>
            <h2>Built for Businesses Like Yours.</h2>
          </div>
          <div className="industry-grid stagger">
            {INDUSTRIES.map((industry) => {
              const Icon = ICON_MAP[industry.icon];
              return (
                <div className="industry-card reveal" key={industry.title}>
                  <div className="icon">
                    <Icon size={20} />
                  </div>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ margin: "0 auto 32px", textAlign: "center" }}>
            <div className="eyebrow">FAQ</div>
            <h2>Questions You Might Have.</h2>
          </div>
          <div className="faq-wrap reveal">
            <Accordion type="single" collapsible>
              {FAQS.map((faq, i) => (
                <AccordionItem value={`faq-${i}`} key={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h3>Have an Idea? Let&apos;s Build It.</h3>
              <p>
                Tell us what you&apos;re building. We&apos;ll help turn it
                into a digital experience that works.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-primary">
                Start a Project →
              </Link>
              <a
                href="https://wa.me/917676520441?text=Hi%20VisionXAI%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener"
                className="btn btn-outline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
