// Team members (name, role, photo) and their social links.
export interface SocialLink {
  title: string;
  href: string;
  iconClass: string;
}

export interface TeamMember {
  id: number;
  imageSrc: string;
  name: string;
  description: string;
  socialLinks: SocialLink[];
}

const socialLinks: SocialLink[] = [
  {
    title: "X",
    href: "https://www.x.com/",
    iconClass: "fa-brands fa-x-twitter",
  },
  {
    title: "Facebook",
    href: "https://facebook.com/",
    iconClass: "fa-brands fa-facebook",
  },
  {
    title: "Dribbble",
    href: "https://www.dribbble.com/",
    iconClass: "fa-brands fa-dribbble",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
    iconClass: "fa-brands fa-instagram",
  },
];

export const teamData = [
  {
    id: 1,
    imageSrc: "/assets/img/team/team-1.jpg",
    name: "PAUL TORRES",
    description:
      "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.",
    socialLinks,
  },
  {
    id: 2,
    imageSrc: "/assets/img/team/team-2.jpg",
    name: "JULIANA ANDERSON",
    description:
      "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.",
    socialLinks,
  },
  {
    id: 3,
    imageSrc: "/assets/img/team/team-3.jpg",
    name: "JONATHAN DOE",
    description:
      "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.",
    socialLinks,
  },
  {
    id: 4,
    imageSrc: "/assets/img/team/team-4.jpg",
    name: "PAUL TORRES",
    description:
      "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.",
    socialLinks,
  },
  {
    id: 5,
    imageSrc: "/assets/img/team/team-5.jpg",
    name: "JONATHAN DOE",
    description:
      "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.",
    socialLinks,
  },
  {
    id: 6,
    imageSrc: "/assets/img/team/team-6.jpg",
    name: "EMILY JACKSON",
    description:
      "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos.",
    socialLinks,
  },
] satisfies TeamMember[];
