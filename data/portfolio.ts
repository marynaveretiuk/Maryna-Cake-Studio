// Portfolio works. Each entry in `portfolioData` (below) is one work: tile
// fields (title, image, size, categories) plus single-project-page fields
// (description, details, gallery, layout, optional parallax hero). Add here.
export interface ProjectImage {
  image: string;
  src?: string; // Fancybox lightbox source override (video / YouTube / Vimeo URL)
  col?: string; // Bootstrap column class for multi-image galleries (e.g. "col-md-4")
}

export interface ProjectParallax {
  image?: string; // background image (also the video poster)
  title?: string; // big animated heading over the parallax
  video?: string; // jarallax video src (YouTube / Vimeo / file) — overrides the image
}

// How the gallery and the text block are arranged on the single project page.
export type ProjectLayout =
  | "gallery-left" // gallery + text side by side (col-md-6 each)
  | "gallery-right" // text + gallery side by side
  | "gallery-top" // full-width gallery above a full-width text block
  | "gallery-bottom" // full-width text block above a full-width gallery
  | "content-only"; // full-width text block, no side gallery

export interface Work {
  id: number;
  slug: string;
  title: string;
  image: string;
  categories: string[];
  // Single project page
  description?: string; // HTML body (may embed images / iframes)
  author?: string;
  website?: { url: string; label: string };
  client?: string;
  date?: string;
  location?: string;
  layout?: ProjectLayout;
  gallery?: ProjectImage[];
  parallax?: ProjectParallax;
}

// Unique category list in display order — drives the filter bar ("All" is added by the UI).
export const portfolioCategories = ["Branding", "Design", "Illustration"];

export const portfolioData = [
  {
    id: 1,
    slug: "cups",
    title: "Cups",
    image: "/assets/img/portfolio/portfolio-item-1.jpg",
    categories: ["Branding", "Design"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Envato",
    date: "31 December 2025",
    location: "California, USA",
    layout: "gallery-left",
    gallery: [
      { image: "/assets/img/portfolio/portfolio-item-1.jpg", src: "/assets/video/big_buck_bunny.mp4" },
    ],
  },
  {
    id: 2,
    slug: "cactus",
    title: "Cactus",
    image: "/assets/img/portfolio/portfolio-item-2.jpg",
    categories: ["Branding", "Design"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Elon Musk",
    date: "10 December 2025",
    location: "Melbourne, Australia",
    layout: "gallery-right",
    gallery: [{ image: "/assets/img/portfolio/portfolio-item-2.jpg" }],
  },
  {
    id: 3,
    slug: "dance",
    title: "Dance",
    image: "/assets/img/portfolio/portfolio-item-3.jpg",
    categories: ["Design"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p><p class="text-center"><img src="/assets/img/portfolio/portfolio-item-3.jpg" alt="Dance" /></p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Elon Musk",
    date: "15 December 2025",
    location: "Melbourne, Australia",
    layout: "content-only",
  },
  {
    id: 4,
    slug: "bottles",
    title: "Bottles",
    image: "/assets/img/portfolio/portfolio-item-4.jpg",
    categories: ["Illustration"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Elon Musk",
    date: "12 December 2025",
    location: "Melbourne, Australia",
    layout: "gallery-top",
    gallery: [
      { image: "/assets/img/blog/blog-11.jpg", src: "https://www.youtube.com/watch?v=mRvqcvqB4EI", col: "col-md-4" },
      { image: "/assets/img/blog/blog-12.jpg", src: "/assets/video/big_buck_bunny.mp4", col: "col-md-4" },
      { image: "/assets/img/blog/blog-13.jpg", col: "col-md-4" },
    ],
  },
  {
    id: 5,
    slug: "tree",
    title: "Tree",
    image: "/assets/img/portfolio/portfolio-item-5.jpg",
    categories: ["Branding"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p><br /><p><iframe src="https://player.vimeo.com/video/50522981" width="640" height="546" frameborder="0" allowfullscreen></iframe></p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Envato",
    date: "12 December 2025",
    location: "Melbourne, Australia",
    layout: "content-only",
  },
  {
    id: 6,
    slug: "dream",
    title: "Dream",
    image: "/assets/img/portfolio/portfolio-item-6.jpg",
    categories: ["Design", "Illustration"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Elon Musk",
    date: "31 December 2025",
    location: "California, USA",
    layout: "gallery-left",
    gallery: [{ image: "/assets/img/portfolio/portfolio-item-6.jpg" }],
  },
  {
    id: 7,
    slug: "logo",
    title: "Logo",
    image: "/assets/img/portfolio/portfolio-item-7.jpg",
    categories: ["Branding", "Design", "Illustration"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Elon Musk",
    date: "15 December 2025",
    location: "Melbourne, Australia",
    layout: "gallery-bottom",
    gallery: [
      { image: "/assets/img/portfolio/portfolio-item-7.jpg", col: "col-md-6" },
      { image: "/assets/img/portfolio/portfolio-item-10.jpg", col: "col-md-6" },
    ],
  },
  {
    id: 8,
    slug: "music-album",
    title: "Music album",
    image: "/assets/img/portfolio/portfolio-item-8.jpg",
    categories: ["Illustration"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Elon Musk",
    date: "12 December 2025",
    location: "Melbourne, Australia",
    layout: "gallery-top",
    gallery: [
      { image: "/assets/img/portfolio/portfolio-item-8.jpg", col: "col-md-6" },
      { image: "/assets/img/portfolio/portfolio-item-6.jpg", col: "col-md-6" },
    ],
  },
  {
    id: 9,
    slug: "book",
    title: "Book",
    image: "/assets/img/portfolio/portfolio-item-9.jpg",
    categories: ["Design"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Elon Musk",
    date: "31 December 2025",
    location: "California, USA",
    layout: "gallery-left",
    parallax: { image: "/assets/img/parallax/parallax-blog.jpg", title: "awesome book" },
    gallery: [{ image: "/assets/img/portfolio/portfolio-item-13.jpg" }],
  },
  {
    id: 10,
    slug: "photo",
    title: "Photo",
    image: "/assets/img/portfolio/portfolio-item-10.jpg",
    categories: ["Branding"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Elon Musk",
    date: "12 December 2025",
    location: "Melbourne, Australia",
    layout: "gallery-top",
    gallery: [
      { image: "/assets/img/portfolio/portfolio-item-10.jpg", col: "col-md-4" },
      { image: "/assets/img/portfolio/portfolio-item-7.jpg", col: "col-md-4" },
      { image: "/assets/img/portfolio/portfolio-item-9.jpg", col: "col-md-4" },
    ],
  },
  {
    id: 11,
    slug: "hand",
    title: "Hand",
    image: "/assets/img/portfolio/portfolio-item-11.jpg",
    categories: ["Illustration"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Elon Musk",
    date: "10 December 2025",
    location: "Melbourne, Australia",
    layout: "gallery-right",
    parallax: {
      video: "mp4:/assets/video/envato.mp4",
    },
    gallery: [{ image: "/assets/img/portfolio/portfolio-item-11.jpg", src: "https://vimeo.com/50522981" }],
  },
  {
    id: 12,
    slug: "package",
    title: "Package",
    image: "/assets/img/portfolio/portfolio-item-12.jpg",
    categories: ["Branding", "Design"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Elon Musk",
    date: "31 December 2025",
    location: "California, USA",
    layout: "gallery-top",
    gallery: [{ image: "/assets/img/parallax/parallax-home.jpg" }],
  },
  {
    id: 13,
    slug: "phone",
    title: "Phone",
    image: "/assets/img/portfolio/portfolio-item-13.jpg",
    categories: ["Branding", "Design"],
    description: `<p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p><p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>`,
    author: "John Smith",
    website: { url: "https://themeforest.net/user/mountain-themes", label: "envato.com" },
    client: "Elon Musk",
    date: "31 December 2025",
    location: "California, USA",
    layout: "content-only",
    parallax: { image: "/assets/img/parallax/parallax-about-us.jpg", title: "Project" },
  },
] satisfies Work[];
