import Link from "next/link";
import GlowCard from "@/components/GlowCard";
import {
  CodeIcon,
  VideoIcon,
  CameraIcon,
  CubeIcon,
  WorkflowIcon,
  SparkleIcon,
} from "@/components/icons";
import { CORE_SOLUTIONS } from "@/lib/data/solutions";
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
} as const;

const PROCESS = [
  { title: "Discover", description: "Your goals, audience and what's working today." },
  { title: "Plan", description: "A content and build plan scoped to your budget." },
  { title: "Create", description: "Reels, websites and automations, produced in-house." },
  { title: "Grow", description: "We publish, measure and keep improving." },
];

// The homepage only needs enough FAQ to remove first-contact hesitation;
// the rest is answered on /solutions and during scoping.
const HOME_FAQS = FAQS.slice(0, 5);

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-map-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/world-map-india.svg"
            alt=""
            aria-hidden="true"
            width={2777}
            height={1163}
            decoding="async"
          />
        </div>
        <div className="hero-wave">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-wave.svg" alt="" aria-hidden="true" decoding="async" />
        </div>

        <div className="wrap">
          <div className="hero-content">
            <div className="eyebrow">VisionXAI — Digital Growth &amp; Technology Partner</div>
            <h1 className="headline">
              BUILD. <span className="accent">GROW.</span> AUTOMATE.
            </h1>
            <p className="sub">
              We help businesses build their digital presence, grow through
              social media and automate their operations.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-primary">
                Start a Project →
              </Link>
              <Link href="/solutions" className="btn btn-outline">
                View Our Solutions
              </Link>
            </div>
          </div>

          <div className="feature-card">
            {CORE_SOLUTIONS.map((solution) => {
              const Icon = ICON_MAP[solution.icon];
              return (
                <GlowCard className="feature" key={solution.title}>
                  <div className="icon">
                    <Icon />
                  </div>
                  <h3>
                    <Link href={solution.href} className="stretched-link">
                      {solution.title}
                    </Link>
                  </h3>
                  <p>{solution.description}</p>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Real Results</div>
            <h2>Work That Speaks for Itself.</h2>
          </div>
          <div className="result-grid stagger">
            {PROJECTS.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                className="result-card reveal"
                key={project.slug}
              >
                <div className="result-figure">{project.headlineMetric}</div>
                <h3>{project.title}</h3>
                <p>{project.cardLine}</p>
                <span className="view-link">View case study →</span>
              </Link>
            ))}
          </div>
          <p className="result-footnote">
            Figures are reported Instagram Professional Dashboard performance
            for each client&apos;s account.
          </p>
        </div>
      </section>

      <section className="section section-band">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">How We Work</div>
            <h2>From First Call to Growth.</h2>
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

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">Packages</div>
            <h2>Built Around Your Growth Stage.</h2>
          </div>
          <div className="packages-teaser stagger">
            {PLANS.map((plan) => (
              <div
                className={`package-mini reveal${plan.popular ? " popular" : ""}`}
                key={plan.name}
              >
                <h3>{plan.name}</h3>
                <p className="price">{plan.duration}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/solutions" className="btn btn-outline">
              Compare Packages →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-band">
        <div className="wrap">
          <div className="section-head reveal" style={{ margin: "0 auto 32px", textAlign: "center" }}>
            <div className="eyebrow">FAQ</div>
            <h2>Questions You Might Have.</h2>
          </div>
          <div className="faq-wrap reveal">
            <Accordion type="single" collapsible>
              {HOME_FAQS.map((faq, i) => (
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

      <section className="section">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h3>Have an Idea? Let&apos;s Build It.</h3>
              <p>Tell us what you&apos;re working on and we&apos;ll help you scope it.</p>
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
