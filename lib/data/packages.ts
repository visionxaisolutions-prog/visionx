export type Plan = {
  name: string;
  duration: string;
  features: string[];
  popular: boolean;
  custom?: boolean;
};

// No price figures yet — pricing is still being finalized, so plans show
// scope/duration and route to a quote via the contact form instead of a ₹
// figure. Do not add placeholder numbers here.
export const PLANS: Plan[] = [
  {
    name: "Essential",
    duration: "30 Days",
    features: [
      "10 short-form videos",
      "Social media management",
      "Content calendar",
      "Captions & hashtags",
      "Publishing & scheduling",
      "Monthly performance reporting",
    ],
    popular: false,
  },
  {
    name: "Growth",
    duration: "100 Days",
    features: [
      "25 short-form videos",
      "Social media management",
      "Content strategy & calendar",
      "Creative posts",
      "Google Business Profile support",
      "Basic SEO",
      "Landing page or basic website, where appropriate",
      "Performance reporting",
    ],
    popular: true,
  },
  {
    name: "Business",
    duration: "6 Months",
    features: [
      "48 short-form videos",
      "Full social media management",
      "Instagram, Facebook & YouTube Shorts, where appropriate",
      "Creative design",
      "Google Business Profile",
      "Website",
      "Basic SEO",
      "WhatsApp integration",
      "Lead-generation setup",
      "Performance reporting",
    ],
    popular: false,
  },
  {
    name: "Custom",
    duration: "Scoped to your project",
    features: [
      "Fully tailored scope",
      "WhatsApp Business automation",
      "E-commerce app development",
      "Custom software & AI integrations",
      "Dedicated support",
    ],
    popular: false,
    custom: true,
  },
];
