import type { Metadata } from "next";
import SolutionPageLayout from "@/components/SolutionPageLayout";
import { SOLUTION_PAGES } from "@/lib/data/solutions";

const DATA = SOLUTION_PAGES.find((s) => s.slug === "social-media")!;

export const metadata: Metadata = {
  title: { absolute: DATA.metaTitle },
  description: DATA.metaDescription,
  alternates: { canonical: "/social-media" },
};

export default function SocialMediaPage() {
  return <SolutionPageLayout data={DATA} />;
}
