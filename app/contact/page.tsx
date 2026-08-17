import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with VisionXAI — a Bengaluru-based creative digital studio for websites, photography and videography.",
};

const CONTACT_INFO = [
  {
    label: "Phone",
    value: "76765 20441",
    href: "https://wa.me/917676520441",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "visionxaisolutions@gmail.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Bengaluru, Karnataka, India",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 10 }}>
        <div className="wrap">
          <div className="page-hero-content" style={{ maxWidth: "100%" }}>
            <div className="eyebrow">Contact Us</div>
            <h1 className="headline">
              Let&apos;s Build Something Great{" "}
              <span className="accent">Together.</span>
            </h1>
            <p className="sub">
              Have a project in mind or just want to say hi? We&apos;d love
              to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap contact-grid stagger">
          <div>
            <div className="contact-info-list stagger">
              {CONTACT_INFO.map((item) => (
                <div className="info-item reveal" key={item.label}>
                  <div className="icon">{item.icon}</div>
                  <div>
                    <div className="label">{item.label}</div>
                    {item.href ? (
                      <a
                        className="val"
                        href={item.href}
                        target="_blank"
                        rel="noopener"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="val">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
