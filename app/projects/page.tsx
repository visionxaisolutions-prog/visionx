import type { Metadata } from "next";
import Link from "next/link";
import GlowCard from "@/components/GlowCard";
import { PROJECTS } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real clients VisionXAI is currently working with, across social media, WhatsApp automation, content and web development.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="decor">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-wave.svg" alt="" aria-hidden="true" />
        </div>
        <div className="wrap">
          <div className="page-hero-content">
            <div className="eyebrow">Work</div>
            <h1 className="headline">
              Real Clients. <span className="accent">Real Work.</span>
            </h1>
            <p className="sub">
              Brands we&apos;re currently working with.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="project-grid stagger">
            {PROJECTS.map((project) => (
              <GlowCard className="project-card reveal" key={project.slug}>
                <span className="status-badge">{project.status}</span>
                <h3>{project.title}</h3>
                {project.industry && (
                  <div className="industry">{project.industry}</div>
                )}
                <div className="services-tags">
                  {project.services.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <p className="summary">{project.summary}</p>
                {project.reportedPerformance && (
                  <p className="result-metric">{project.reportedPerformance}</p>
                )}
                <Link href={`/projects/${project.slug}`} className="view-link">
                  View Case Study →
                </Link>
              </GlowCard>
            ))}
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "40px",
              color: "var(--gray-med)",
              fontSize: "14.5px",
            }}
          >
            More projects will be added here as they launch.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h3>Have a similar project?</h3>
              <p>Tell us what you&apos;re building and we&apos;ll help you scope it.</p>
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
