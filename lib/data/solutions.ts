export type IconKey =
  | "code"
  | "video"
  | "camera"
  | "cube"
  | "workflow"
  | "sparkle";

export type CoreSolution = {
  title: string;
  description: string;
  href: string;
  icon: IconKey;
};

// The four pillars VisionXAI is positioned around. Shown on the homepage and
// linked from /solutions. "Websites & E-commerce" spans two dedicated pages
// (/web-development, /ecommerce) — this card links to the primary one.
export const CORE_SOLUTIONS: CoreSolution[] = [
  {
    title: "Social Media",
    description: "Content creation, reels, management and growth.",
    href: "/social-media",
    icon: "video",
  },
  {
    title: "Websites & E-commerce",
    description:
      "Business websites, landing pages, online stores and digital experiences.",
    href: "/web-development",
    icon: "code",
  },
  {
    title: "AI & Automation",
    description:
      "AI assistants, WhatsApp automation, CRM workflows and business automation.",
    href: "/ai-automation",
    icon: "workflow",
  },
  {
    title: "Custom Technology",
    description:
      "Web apps, custom software, computer vision, 3D and custom AI solutions.",
    href: "/custom-solutions",
    icon: "sparkle",
  },
];

export type SolutionPage = {
  slug: string;
  pillar: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  sub: string;
  services: string[];
};

export const SOLUTION_PAGES: SolutionPage[] = [
  {
    slug: "social-media",
    pillar: "Social Media",
    metaTitle: "Social Media Management & Reels Marketing | VisionXAI",
    metaDescription:
      "Social media account audits, content strategy, reels, UGC-style content and ongoing management that help brands build an audience.",
    eyebrow: "Social Media",
    headline: "Content and Management That Builds Your Audience.",
    sub: "We plan, produce and publish the content your accounts need to grow, and manage the day-to-day running of the account.",
    services: [
      "Account audit",
      "Content strategy",
      "Competitor research",
      "Content calendar",
      "Reels & short-form videos",
      "Product videos",
      "Promotional videos",
      "UGC-style content",
      "Photography",
      "Graphic creatives",
      "Festival campaigns",
      "Posting & scheduling",
      "Captions & hashtags",
      "Profile optimization",
      "Community management",
      "Performance analysis",
      "Content optimization",
      "Campaign planning",
      "Lead generation",
    ],
  },
  {
    slug: "web-development",
    pillar: "Websites & E-commerce",
    metaTitle: "Website & E-commerce Development | VisionXAI",
    metaDescription:
      "Business websites, landing pages, portfolio and service websites, and web applications built around your actual goals.",
    eyebrow: "Web Development",
    headline: "Websites Built Around Your Business, Not a Template.",
    sub: "From a single landing page to a full business website or web application — responsive, fast and built to turn visitors into enquiries.",
    services: [
      "Business websites",
      "Landing pages",
      "Portfolio & service websites",
      "Web applications",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
    ],
  },
  {
    slug: "ecommerce",
    pillar: "Websites & E-commerce",
    metaTitle: "E-commerce Website Development | VisionXAI",
    metaDescription:
      "Online stores built to sell — product catalogs, secure checkout, order management and WhatsApp-integrated commerce.",
    eyebrow: "E-commerce",
    headline: "Online Stores Built to Sell, Not Just List Products.",
    sub: "Product catalogs, secure checkout and order management — as a website or app, built to scale with your product range.",
    services: [
      "Product catalog & inventory management",
      "Secure payment gateway integration",
      "Order tracking & admin dashboard",
      "Web or native mobile storefront",
      "WhatsApp-integrated order updates",
    ],
  },
  {
    slug: "ai-automation",
    pillar: "AI & Automation",
    metaTitle: "AI & Business Automation Solutions | VisionXAI",
    metaDescription:
      "AI assistants, WhatsApp automation, CRM workflows and business automation that cut repetitive work and respond to customers faster.",
    eyebrow: "AI & Automation",
    headline: "Automation That Responds to Customers Faster Than You Can.",
    sub: "AI assistants, WhatsApp automation and CRM workflows that handle the repetitive work, so your team only steps in when a human touch is actually needed.",
    services: [
      "AI assistants",
      "WhatsApp Business automation",
      "CRM workflows",
      "Automated replies & FAQ handling",
      "Order confirmations & updates",
      "Broadcast campaigns",
      "Business process automation",
    ],
  },
  {
    slug: "custom-solutions",
    pillar: "Custom Technology",
    metaTitle: "Custom Software & AI Solutions | VisionXAI",
    metaDescription:
      "Custom software, computer vision, 3D experiences and custom AI solutions built for requirements outside standard packages.",
    eyebrow: "Custom Technology",
    headline: "For Requirements Outside the Standard Packages.",
    sub: "Custom software, computer vision, video analytics, 3D experiences and custom AI — scoped individually around what you actually need.",
    services: [
      "Custom software development",
      "Computer vision",
      "Video analytics",
      "3D experiences",
      "Custom AI solutions",
      "API integrations",
    ],
  },
];
