export type WhatWeDoItem = {
  num: string;
  title: string;
  description: string;
  icon: "code" | "video" | "camera" | "cube" | "workflow" | "sparkle";
};

export const WHAT_WE_DO: WhatWeDoItem[] = [
  {
    num: "01",
    title: "Websites",
    description:
      "Modern, responsive websites designed around your business goals, not just a template.",
    icon: "code",
  },
  {
    num: "02",
    title: "Content & UGC",
    description:
      "Content that makes your brand easier to discover, understand and remember.",
    icon: "video",
  },
  {
    num: "03",
    title: "Product Photography",
    description:
      "Professional visual assets for websites, social media and digital campaigns.",
    icon: "camera",
  },
  {
    num: "04",
    title: "3D Experiences",
    description:
      "Interactive property and product experiences where visual depth matters.",
    icon: "cube",
  },
  {
    num: "05",
    title: "Automation",
    description:
      "Workflows that cut repetitive work and help you respond to customers faster.",
    icon: "workflow",
  },
  {
    num: "06",
    title: "AI Solutions",
    description:
      "Practical AI integrations and custom intelligent solutions built for real business needs.",
    icon: "sparkle",
  },
];
