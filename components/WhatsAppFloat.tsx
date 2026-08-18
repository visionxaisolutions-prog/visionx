import { WhatsAppIcon } from "@/components/icons";

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/917676520441?text=Hi%20VisionXAI%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
