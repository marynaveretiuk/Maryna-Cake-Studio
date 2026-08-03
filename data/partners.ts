// Partner / client logos shown in the partners marquee. Swap names + logo paths.
export interface Partner {
  id: number;
  name: string;
  logo: string;
  url?: string;
}

export const partners = [
  {
    id: 1,
    name: "Partner 1",
    logo: "/assets/img/partners/partners-1.png",
    url: "https://themeforest.net/user/mountain-themes",
  },
  {
    id: 2,
    name: "Partner 2",
    logo: "/assets/img/partners/partners-2.png",
    url: "https://themeforest.net/user/mountain-themes",
  },
  {
    id: 3,
    name: "Partner 3",
    logo: "/assets/img/partners/partners-3.png",
    url: "https://themeforest.net/user/mountain-themes",
  },
  {
    id: 4,
    name: "Partner 4",
    logo: "/assets/img/partners/partners-4.png",
    url: "https://themeforest.net/user/mountain-themes",
  },
  {
    id: 5,
    name: "Partner 5",
    logo: "/assets/img/partners/partners-5.png",
    url: "https://themeforest.net/user/mountain-themes",
  },
  {
    id: 6,
    name: "Partner 6",
    logo: "/assets/img/partners/partners-6.png",
    url: "https://themeforest.net/user/mountain-themes",
  },
] satisfies Partner[];