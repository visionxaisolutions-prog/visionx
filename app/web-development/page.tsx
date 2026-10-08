import type { Metadata } from "next";
import SolutionPageLayout from "@/components/SolutionPageLayout";
import { SOLUTION_PAGES } from "@/lib/data/solutions";

const DATA = SOLUTION_PAGES.find((s) => s.slug === "web-development")!;

export const metadata: Metadata = {
  title: { absolute: DATA.metaTitle },
  description: DATA.metaDescription,
  alternates: { canonical: "/web-development" },
};

export default function WebDevelopmentPage() {
  return <SolutionPageLayout data={DATA} />;
}
