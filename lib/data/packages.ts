export type Plan = {
  name: string;
  features: string[];
  oldPrice?: string;
  discount?: string;
  price?: string;
  popular: boolean;
  custom?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Essential",
    features: [
      "Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Revision Round",
    ],
    oldPrice: "₹16,400",
    discount: "27% OFF",
    price: "₹11,999",
    popular: false,
  },
  {
    name: "Growth",
    features: [
      "Website",
      "UGC Videos & Photos",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "2 Revision Rounds",
    ],
    oldPrice: "₹29,800",
    discount: "33% OFF",
    price: "₹19,999",
    popular: false,
  },
  {
    name: "Premium",
    features: [
      "Website",
      "1 Free Service (Your Choice)",
      "3D Property Tour",
      "Product Photography",
      "UGC Videos / Social Media Presence",
    ],
    oldPrice: "₹83,300",
    discount: "40% OFF",
    price: "₹49,999",
    popular: true,
  },
  {
    name: "Custom",
    features: [
      "Fully Tailored Scope",
      "WhatsApp Business Automation",
      "E-Commerce App Development",
      "Custom Software & AI Integrations",
      "Dedicated Support",
    ],
    popular: false,
    custom: true,
  },
];
