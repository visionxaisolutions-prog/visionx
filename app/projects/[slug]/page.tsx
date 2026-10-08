import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://visionxai.com";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/projects` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${SITE_URL}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="page-hero" style={{ paddingBottom: 10 }}>
        <div className="wrap">
          <div className="page-hero-content" style={{ maxWidth: "100%" }}>
            <span className="status-badge">{project.status}</span>
            <h1 className="headline" style={{ marginTop: "16px" }}>
              {project.title}
            </h1>
            <p className="sub">{project.summary}</p>
            <div className="services-tags" style={{ marginTop: "16px" }}>
              {project.industry && <span>{project.industry}</span>}
              {project.services.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="legal-content reveal">
            <h2>Overview</h2>
            <p>{project.summary}</p>

            <h2>Objective</h2>
            <p>{project.objective}</p>

            <h2>Starting Point</h2>
            <p>{project.startingPoint}</p>

            <h2>What We Did</h2>
            <ul>
              {project.whatWeDid.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <h2>Content Delivered</h2>
            <ul>
              {project.contentDelivered.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <h2>Timeline</h2>
            <p>{project.timeline}</p>

            {project.reportedPerformance && (
              <>
                <h2>Reported Performance</h2>
                <p>{project.reportedPerformance}</p>
              </>
            )}

            <h2>Current Status</h2>
            <p>{project.currentStatus}</p>
          </div>
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
