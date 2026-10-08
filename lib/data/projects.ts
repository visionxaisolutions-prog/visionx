export type Project = {
  slug: string;
  title: string;
  industry?: string;
  services: string[];
  summary: string;
  status: "Client Project" | "Concept Project";
  objective: string;
  startingPoint: string;
  whatWeDid: string[];
  contentDelivered: string[];
  timeline: string;
  // Always labeled conservatively as "Reported Instagram Professional
  // Dashboard performance" — never relabeled as reach, views, impressions or
  // accounts reached, since that's not what this figure actually measures.
  reportedPerformance?: string;
  // Short form of reportedPerformance for compact cards — same figure, same
  // caveat (always shown alongside the full label).
  headlineMetric?: string;
  // One-line summary for compact homepage cards.
  cardLine: string;
  currentStatus: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "sri-basaveshwara-trust",
    title: "Sri Basaveshwara Trust",
    industry: "Temple Trust",
    services: ["Social Media", "UGC Content", "Website"],
    summary:
      "An ongoing partnership with Sri Basaveshwara Trust, whose temple is currently under construction — running their social media and producing UGC video content, with their website in development.",
    status: "Client Project",
    objective:
      "Build a social media presence for a temple trust whose temple is currently under construction.",
    startingPoint: "New social media presence, built from the ground up.",
    whatWeDid: [
      "Produced and published short-form video content",
      "Managed the trust's ongoing social media presence",
      "Began work on the trust's website",
    ],
    contentDelivered: ["12–13 videos published"],
    timeline: "Ongoing.",
    reportedPerformance: "Reported Instagram Professional Dashboard performance: 400K+.",
    headlineMetric: "400K+",
    cardLine: "12–13 videos published",
    currentStatus:
      "Active engagement. Website is in development and not yet finalized.",
  },
  {
    slug: "de-clothing",
    title: "De Clothing",
    industry: "Fashion / D2C Brand",
    services: ["Social Media", "WhatsApp Automation", "UGC Content", "Website"],
    summary:
      "An ongoing partnership with a clothing brand — running their social media and WhatsApp automation, and producing UGC video content, with their website currently in development.",
    status: "Client Project",
    objective:
      "Take over day-to-day management of an existing Instagram account and automate customer replies on WhatsApp.",
    startingPoint:
      "De Clothing already had an Instagram account before VisionXAI began managing it.",
    whatWeDid: [
      "Took over day-to-day management of the existing Instagram account",
      "Produced UGC-style video content",
      "Set up WhatsApp Business automation for customer replies and order confirmations",
      "Began work on the brand's website",
    ],
    contentDelivered: ["UGC video content, produced on an ongoing basis"],
    timeline: "Ongoing — approximately 15 days of account management so far.",
    reportedPerformance:
      "Reported Instagram Professional Dashboard performance: approximately 50K.",
    headlineMetric: "~50K",
    cardLine: "Account management & UGC",
    currentStatus:
      "Active engagement. Website is in development and not yet finalized.",
  },
  {
    slug: "rishi-on-wheels",
    title: "Rishi on Wheels",
    services: ["Social Media", "UGC Content"],
    summary:
      "Built and managed an Instagram account from scratch for Rishi on Wheels, publishing short-form reels on an ongoing basis.",
    status: "Client Project",
    objective: "Launch and grow a new Instagram account from zero.",
    startingPoint: "New account, built from scratch.",
    whatWeDid: [
      "Created and managed the Instagram account from scratch",
      "Produced and published short-form reels",
    ],
    contentDelivered: ["8–10 reels published"],
    timeline: "Approximately 20 days.",
    reportedPerformance: "Reported Instagram Professional Dashboard performance: 200K+.",
    headlineMetric: "200K+",
    cardLine: "8–10 reels in ~20 days",
    currentStatus: "Active engagement.",
  },
  {
    slug: "with-cs",
    title: "With CS",
    services: ["Social Media", "UGC Content"],
    summary:
      "Launched and managed a new Instagram account for With CS, publishing short-form reels.",
    status: "Client Project",
    objective: "Launch a new Instagram account and begin building an audience.",
    startingPoint: "New account.",
    whatWeDid: [
      "Created and managed a new Instagram account",
      "Produced and published short-form reels",
    ],
    contentDelivered: ["3–4 reels published"],
    timeline: "Approximately 2 weeks.",
    reportedPerformance:
      "Reported Instagram Professional Dashboard performance: approximately 20K.",
    headlineMetric: "~20K",
    cardLine: "3–4 reels in ~2 weeks",
    currentStatus: "Active engagement.",
  },
];
