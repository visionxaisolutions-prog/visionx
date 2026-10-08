import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/data/projects";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://visionxai.com";

const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/solutions", priority: 0.9 },
  { path: "/social-media", priority: 0.8 },
  { path: "/web-development", priority: 0.8 },
  { path: "/ecommerce", priority: 0.8 },
  { path: "/ai-automation", priority: 0.8 },
  { path: "/custom-solutions", priority: 0.8 },
  { path: "/projects", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/terms", priority: 0.3 },
  { path: "/privacy", priority: 0.3 },
  { path: "/cookies", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticEntries = ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
  const projectEntries = PROJECTS.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...staticEntries, ...projectEntries];
}
