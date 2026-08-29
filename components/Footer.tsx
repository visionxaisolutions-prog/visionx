import Link from "next/link";
import { EmailIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer>
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
