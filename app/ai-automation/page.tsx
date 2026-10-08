import type { Metadata } from "next";
import Link from "next/link";
import SolutionPageLayout from "@/components/SolutionPageLayout";
import GlowCard from "@/components/GlowCard";
import { WhatsAppIcon, TickIcon } from "@/components/icons";
import { SOLUTION_PAGES } from "@/lib/data/solutions";

const DATA = SOLUTION_PAGES.find((s) => s.slug === "ai-automation")!;

export const metadata: Metadata = {
  title: { absolute: DATA.metaTitle },
  description: DATA.metaDescription,
  alternates: { canonical: "/ai-automation" },
};

const FEATURES = [
  "Automated replies & FAQ handling",
  "Order confirmations & shipping updates",
  "Product catalog inside WhatsApp",
  "Broadcast campaigns to your customer list",
  "WhatsApp Business API setup",
];

export default function AiAutomationPage() {
  return (
    <SolutionPageLayout data={DATA}>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <GlowCard className="capability-card reveal">
              <div className="icon">
                <WhatsAppIcon size={26} />
              </div>
              <h3>WhatsApp Automation</h3>
              <p>
                Turn WhatsApp into a 24/7 sales and support channel. We set up
                automated flows so enquiries get answered instantly and orders
                get confirmed automatically — your team only steps in when a
                human touch is actually needed.
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
              <Link href="/contact?plan=WhatsApp Automation" className="btn btn-outline">
                Enquire About This →
              </Link>
            </GlowCard>
          </div>
        </div>
      </section>
    </SolutionPageLayout>
  );
}
