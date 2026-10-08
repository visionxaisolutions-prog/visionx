import Link from "next/link";
import { EmailIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-col footer-brand">
          <div className="brand">
            <span className="name">
              VISION<span className="x">XAI</span>
            </span>
            <small>— MIND TO MEDIA —</small>
          </div>
          <p>Social Media · Websites &amp; E-commerce · AI &amp; Automation · Custom Technology</p>
        </div>

        <div className="footer-col">
          <h3>Explore</h3>
          <Link href="/">Home</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/projects">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h3>Solutions</h3>
          <Link href="/social-media">Social Media</Link>
          <Link href="/web-development">Web Development</Link>
          <Link href="/ecommerce">E-commerce</Link>
          <Link href="/ai-automation">AI &amp; Automation</Link>
          <Link href="/custom-solutions">Custom Technology</Link>
        </div>

        <div className="footer-col">
          <h3>Connect</h3>
          <a href="https://wa.me/917676520441" target="_blank" rel="noopener">
            WhatsApp
          </a>
          <a href="mailto:visionxaisolutions@gmail.com">Email</a>
          <a
            href="https://www.instagram.com/visionxaisolutions?igsh=MXJpamh4Mjd5a2hlcw=="
            target="_blank"
            rel="noopener"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="wrap footer-row">
        <p>© 2026 VisionXAI. All rights reserved.</p>
        <div className="socials">
          <a
            href="https://www.instagram.com/visionxaisolutions?igsh=MXJpamh4Mjd5a2hlcw=="
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://wa.me/917676520441"
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a href="mailto:visionxaisolutions@gmail.com" aria-label="Email">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="wrap footer-legal">
        <Link href="/terms">Terms &amp; Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/cookies">Cookie Policy</Link>
      </div>
    </footer>
  );
}
