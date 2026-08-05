// Main navigation menu used in the header. Add pages here, or nest items in
// `subMenuItems` to create dropdowns (up to 3 levels deep).
export interface MenuItem {
  id: number;
  label: string;
  href?: string;
  subMenuItems?: MenuItem[];
}
export const menuItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Gallery",
    href: "/gallery",
  },
  {
    id: 3,
    label: "Flavors",
    href: "/flavors",
  },
  {
    id: 4,
    label: "About",
    href: "/about-me",
  },
  {
    id: 5,
    label: "FAQ",
    href: "/faq",
  },
  {
    id: 6,
    label: "Contact",
    href: "/contact-v1",
  },
] satisfies MenuItem[];
