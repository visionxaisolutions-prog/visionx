import type { Metadata } from "next";
import Link from "next/link";
import SolutionPageLayout from "@/components/SolutionPageLayout";
import GlowCard from "@/components/GlowCard";
import { CartIcon, TickIcon } from "@/components/icons";
import { SOLUTION_PAGES } from "@/lib/data/solutions";

const DATA = SOLUTION_PAGES.find((s) => s.slug === "ecommerce")!;

export const metadata: Metadata = {
  title: { absolute: DATA.metaTitle },
  description: DATA.metaDescription,
  alternates: { canonical: "/ecommerce" },
};

const FEATURES = [
  "Product catalog & inventory management",
  "Secure payment gateway integration",
  "Order tracking & admin dashboard",
  "Web or native mobile app",
  "Built to scale with your product range",
];

export default function EcommercePage() {
  return (
    <SolutionPageLayout data={DATA}>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <GlowCard className="capability-card reveal">
              <div className="icon">
                <CartIcon size={26} />
              </div>
              <h3>E-Commerce App Development</h3>
              <p>
                A full online store built to actually sell — not just a
                catalog. Product listings, secure checkout and order
                management, built as a website or app depending on what your
                business needs.
              </p>
              <ul>
                {FEATURES.map((feature) => (
                  <li key={feature}>
                    <span className="tick">
                      <TickIcon />
                    </span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact?plan=E-Commerce" className="btn btn-outline">
                Enquire About This →
              </Link>
            </GlowCard>
          </div>
        </div>
      </section>
    </SolutionPageLayout>
  );
}
