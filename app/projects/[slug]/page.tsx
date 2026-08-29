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
      { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
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
              <span>{project.industry}</span>
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

            {project.challenge && (
              <>
                <h2>The Challenge</h2>
                <p>{project.challenge}</p>
              </>
            )}

            {project.approach && (
              <>
                <h2>The Approach</h2>
                <p>{project.approach}</p>
              </>
            )}

            {project.deliverables && project.deliverables.length > 0 && (
              <>
                <h2>What We&apos;ve Delivered</h2>
                <ul>
                  {project.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </>
            )}

            {project.inProgress && project.inProgress.length > 0 && (
              <>
                <h2>Currently In Progress</h2>
                <ul>
                  {project.inProgress.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </>
            )}
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
