// FAQ questions & answers. Add, remove, or edit items to update the FAQ page.
export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems = [
  {
    id: 1,
    question: "How does the payment process work?",
    answer: "Leverage the intuitive super awesome software that saves you time and will help grow your business.",
  },
  {
    id: 2,
    question: "How much does a website cost?",
    answer: "Leverage the intuitive super awesome software that saves you time and will help grow your business.",
  },
  {
    id: 3,
    question: "What kind of businesses do you work with?",
    answer: "Leverage the intuitive super awesome software that saves you time and will help grow your business.",
  },
  {
    id: 4,
    question: "Who will I work with during the project?",
    answer: "Leverage the intuitive super awesome software that saves you time and will help grow your business.",
  },
  {
    id: 5,
    question: "What platform do you build your websites on?",
    answer: "Leverage the intuitive super awesome software that saves you time and will help grow your business.",
  },
  {
    id: 6,
    question: "Can you help me source photos for my website?",
    answer: "Leverage the intuitive super awesome software that saves you time and will help grow your business.",
  },
] satisfies FaqItem[];