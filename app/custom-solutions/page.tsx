import type { Metadata } from "next";
import SolutionPageLayout from "@/components/SolutionPageLayout";
import { SOLUTION_PAGES } from "@/lib/data/solutions";

const DATA = SOLUTION_PAGES.find((s) => s.slug === "custom-solutions")!;

export const metadata: Metadata = {
  title: { absolute: DATA.metaTitle },
  description: DATA.metaDescription,
  alternates: { canonical: "/custom-solutions" },
};

export default function CustomSolutionsPage() {
  return <SolutionPageLayout data={DATA} />;
}
