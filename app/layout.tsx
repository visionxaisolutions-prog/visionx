import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieConsent from "@/components/CookieConsent";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://visionxai.com";
const SITE_DESCRIPTION =
  "VisionXAI is a Bengaluru-based creative digital studio building websites, brands and digital content that connect, engage and grow.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s — VisionXAI",
    default: "VisionXAI — Mind to Media",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "VisionXAI — Mind to Media",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "VisionXAI",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VisionXAI — Mind to Media",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(poppins.variable, inter.variable, "font-sans")}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
        <ScrollReveal />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
