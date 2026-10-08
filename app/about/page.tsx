import type { Metadata } from "next";
import Link from "next/link";
import { UserIcon } from "@/components/icons";
import GlowCard from "@/components/GlowCard";

export const metadata: Metadata = {
  title: { absolute: "About VisionXAI | Digital Growth & Technology" },
  description:
    "Meet the team behind VisionXAI — a digital growth and technology partner helping businesses build, grow and automate.",
  alternates: { canonical: "/about" },
};

const TEAM = [
  {
    name: "Shashank CS",
    role: "Co-Founder, VisionXAI",
    bio: "AI Engineer with a passion for building intelligent systems that solve real world problems. Focused on innovation, automation and the future of AI-driven solutions.",
  },
  {
    name: "Pavan S",
    role: "Co-Founder, VisionXAI",
    bio: "Computer Science student with a focus on web development and security. Always learning, building and securing the digital world.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="page-hero-content" style={{ maxWidth: "100%" }}>
            <div className="eyebrow">About Us</div>
            <h1 className="headline">
              A Digital Growth &amp; <span className="accent">Technology Partner.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 26 }}>
        <div className="wrap about-grid">
          <div className="about-copy reveal">
            <p>
              Growing a business today usually means juggling more than one
              thing at once — a social media presence, a website, and the
              repetitive admin that comes with both. We exist to bring those
              under one roof, so you&apos;re working with one team instead of
              coordinating several.
            </p>
            <p>
              We combine creative execution with practical technology, and we
              stay business-first about it — we&apos;d rather recommend what
              actually moves your business forward than sell you something
              bigger than you need. Most of our client relationships are
              ongoing rather than one-off projects, because growth doesn&apos;t
              stop at launch.
            </p>
          </div>

          <div className="team-col stagger">
            <div className="badge-decor">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about-badge.svg" alt="" aria-hidden="true" />
            </div>

            {TEAM.map((member) => (
              <GlowCard className="team-card reveal" key={member.name}>
                <div className="avatar">
                  <UserIcon />
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <div className="role">{member.role}</div>
                  <p className="bio">{member.bio}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h3>Want to work with us?</h3>
              <p>We&apos;re always happy to talk through a new idea, big or small.</p>
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
