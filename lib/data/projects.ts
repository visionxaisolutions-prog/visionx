export type Project = {
  slug: string;
  title: string;
  industry: string;
  services: string[];
  summary: string;
  status: "Client Project" | "Concept Project";
  deliverables?: string[];
  inProgress?: string[];
  challenge?: string;
  approach?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "de-clothing",
    title: "De Clothing",
    industry: "Fashion / D2C Brand",
    services: ["Social Media", "WhatsApp Automation", "UGC Content", "Website"],
    summary:
      "An ongoing partnership with a clothing brand — running their social media and WhatsApp automation, and producing UGC video content, with their website currently in development.",
    status: "Client Project",
    deliverables: [
      "Social media management",
      "WhatsApp Business automation",
      "UGC video content",
    ],
    inProgress: ["Website"],
  },
  {
    slug: "sri-basaveshwara-trust",
    title: "Sri Basaveshwara Trust",
    industry: "Temple Trust",
    services: ["Social Media", "UGC Content", "Website"],
    summary:
      "An ongoing partnership with Sri Basaveshwara Trust, whose temple is currently under construction — running their social media and producing UGC video content, with their website in development.",
    status: "Client Project",
    deliverables: ["Social media management", "UGC video content"],
    inProgress: ["Website"],
  },
];
