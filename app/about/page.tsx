import type { Metadata } from "next";
import Link from "next/link";
import { UserIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind VisionXAI — a Bengaluru-based creative digital studio turning ideas into digital experiences.",
};

const TEAM = [
  {
    name: "Shashank CS",
    role: "AI Engineer at QPi AI",
    bio: "AI Engineer with a passion for building intelligent systems that solve real world problems. Focused on innovation, automation and the future of AI-driven solutions.",
  },
  {
    name: "Pavan S",
    role: "Full Stack Intern",
    bio: "Computer Science student passionate about web development and security. Always learning, building and securing the digital world.",
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
              Connecting <span className="accent">Minds.</span> Creating
              Impact.
            </h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 26 }}>
        <div className="wrap about-grid">
          <div className="about-copy reveal">
            <p>
              We are two tech enthusiasts who believe in building a better
              world through technology and creativity. Our mission is to turn
              ideas into digital experiences that connect people, brands and
              opportunities.
            </p>
            <div className="quote-block">
              <div className="mark">&ldquo;</div>
              <p>
                We don&apos;t just build websites, we connect your{" "}
                <span className="accent">mind to media.</span>
              </p>
            </div>
          </div>

          <div className="team-col stagger">
            <div className="badge-decor">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about-badge.svg" alt="" aria-hidden="true" />
            </div>

            {TEAM.map((member) => (
              <div className="team-card reveal" key={member.name}>
                <div className="avatar">
                  <UserIcon />
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <div className="role">{member.role}</div>
                  <p className="bio">{member.bio}</p>
                </div>
              </div>
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
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
