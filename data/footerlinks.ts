// Footer social links (title + URL). Edit to change the links shown in the footer.
export interface LinkItem {
  id: number;
  href: string;
  title: string;
}

export const links = [
  { id: 1, href: "https://www.dribbble.com/", title: "Dribbble" },
  { id: 2, href: "https://behance.net/", title: "Behance" },
  { id: 3, href: "https://www.instagram.com/", title: "Instagram" },
  { id: 4, href: "https://github.com/", title: "GitHub" },
  { id: 5, href: "https://codepen.io/", title: "Codepen" },
] satisfies LinkItem[];