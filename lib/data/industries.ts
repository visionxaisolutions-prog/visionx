export type Industry = {
  title: string;
  description: string;
  icon: "building" | "store" | "storefront" | "rocket" | "compass";
};

export const INDUSTRIES: Industry[] = [
  {
    title: "Real Estate",
    description: "Websites, property showcases, 3D tours and lead generation.",
    icon: "building",
  },
  {
    title: "Restaurants",
    description: "Websites, menus, photography and social content.",
    icon: "storefront",
  },
  {
    title: "D2C Brands",
    description: "E-commerce, product photography, UGC and digital campaigns.",
    icon: "store",
  },
  {
    title: "Startups",
    description: "Websites, MVPs, AI and custom software.",
    icon: "rocket",
  },
  {
    title: "Local Businesses",
    description: "Websites, SEO, WhatsApp and digital presence.",
    icon: "compass",
  },
];
