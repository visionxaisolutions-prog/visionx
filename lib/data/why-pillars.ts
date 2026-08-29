export type Pillar = {
  title: string;
  description: string;
  icon: "compass" | "code" | "workflow" | "video" | "rocket";
};

export const WHY_PILLARS: Pillar[] = [
  {
    title: "Strategy",
    description: "We understand your business before we build anything.",
    icon: "compass",
  },
  {
    title: "Design",
    description: "We create a visual experience that actually reflects your brand.",
    icon: "code",
  },
  {
    title: "Technology",
    description:
      "Modern development, automation and AI — used where they provide real value.",
    icon: "workflow",
  },
  {
    title: "Media",
    description:
      "Photography, UGC and 3D experiences that strengthen your digital presence.",
    icon: "video",
  },
  {
    title: "Growth",
    description:
      "We launch, measure and improve — not treat the website as a one-time deliverable.",
    icon: "rocket",
  },
];
