// Pricing plans / cards. Edit title, price, feature list, and the "Buy" link.
export interface PricingPlan {
  id: number;
  title: string;
  description: string;
  price: number;
  href: string;
  features: string[];
}

export const pricingPlans = [
  {
    id: 1,
    title: "Starter",
    description: "For teams that need to create sales plans with confidence.",
    price: 19,
    href: "/contact-v1",
    features: [
      "Ad management",
      "Live chat",
      "Conversational bots",
      "Forms",
      "Pop-up forms",
      "Contact website activity",
      "List segmentation",
      "Email marketing",
      "Ad retargeting",
    ],
  },
  {
    id: 2,
    title: "Professional",
    description: "For teams that need to create sales plans with confidence.",
    price: 59,
    href: "/contact-v1",
    features: [
      "Marketing automation",
      "Smart content",
      "Content creation tools",
      "SEO & content strategy",
      "Social media",
      "A/B testing",
      "Landing pages",
      "Calls-to-action",
      "Video hosting",
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    description: "For teams that need to create sales plans with confidence.",
    price: 159,
    href: "/contact-v1",
    features: [
      "Content partitioning",
      "Hierarchical teams",
      "Single sign-on",
      "Social permissions",
      "Additional domains",
      "Email send frequency cap",
      "Calculated properties",
      "CMS membership",
      "Filtered analytics view",
    ],
  },
] satisfies PricingPlan[];