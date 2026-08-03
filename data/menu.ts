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
    subMenuItems: [
      { id: 11, label: "Parallax", href: "/" },
      { id: 12, label: "Text", href: "/home-text" },
      { id: 13, label: "Slider", href: "/home-slider" },
      { id: 14, label: "Slider V2", href: "/home-slider-v2" },
    ],
  },
  {
    id: 2,
    label: "About",
    subMenuItems: [
      { id: 21, label: "About Me", href: "/about-me" },
      { id: 22, label: "About Me V2", href: "/about-me-v2" },
      { id: 23, label: "About Us", href: "/about-us" },
      { id: 24, label: "About Us V2", href: "/about-us-v2" },
    ],
  },
  {
    id: 3,
    label: "Pages",
    subMenuItems: [
      { id: 31, label: "Landing Page", href: "/landing-page" },
      { id: 32, label: "Testimonial Slider", href: "/testimonial-slider" },
      { id: 33, label: "Countdown Timer", href: "/countdown-timer" },
      { id: 34, label: "Services", href: "/services" },
      { id: 35, label: "Pricing", href: "/pricing" },
      { id: 36, label: "FAQ", href: "/faq" },
    ],
  },
  {
    id: 4,
    label: "Portfolio",
    subMenuItems: [
      { id: 41, label: "Classic", href: "/portfolio-classic" },
      { id: 42, label: "Minimal", href: "/portfolio-minimal" },
      { id: 43, label: "Alternative", href: "/portfolio-alternative" },
      { id: 44, label: "Creative", href: "/portfolio-creative" },
      { id: 45, label: "Full Width", href: "/portfolio-full-width" },
      {
        id: 46,
        label: "Project Single",
        subMenuItems: [
          { id: 461, label: "Single v1", href: "/project-details/dream" },
          { id: 462, label: "Single v2", href: "/project-details/book" },
          { id: 463, label: "Single v3", href: "/project-details/photo" },
          { id: 464, label: "Single v4", href: "/project-details/hand" },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Blog",
    subMenuItems: [
      { id: 51, label: "Classic", href: "/blog-classic" },
      { id: 52, label: "Minimal", href: "/blog-minimal" },
      { id: 53, label: "Grid", href: "/blog-grid" },
      { id: 54, label: "Creative", href: "/blog-creative" },
      { id: 55, label: "Full Width", href: "/blog-full-width" },
      { id: 56, label: "Post Format", href: "/blog-post-format" },
    ],
  },
  {
    id: 6,
    label: "Contact",
    subMenuItems: [
      { id: 61, label: "Contact V1", href: "/contact-v1" },
      { id: 62, label: "Contact V2", href: "/contact-v2" },
      { id: 63, label: "Contact V3", href: "/contact-v3" },
    ],
  },
  {
    id: 7,
    label: "Shop",
    href: "/shop",
  },
] satisfies MenuItem[];