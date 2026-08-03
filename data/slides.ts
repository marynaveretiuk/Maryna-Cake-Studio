// Home hero slider. Each entry is one full-width slide: a title plus a
// background, which is one of (in priority order) a YouTube video, a local
// video file, or an image (image slides also get a Ken Burns zoom). Add here.
export interface HeroSlide {
  id: number;
  title: string;
  youtube?: string; // YouTube watch URL, share URL, or bare 11-char video ID
  video?: string; // local background video src
  image?: string; // background image
}

export const heroSlides = [
  {
    id: 1,
    title: "Minimal",
    image: "/assets/img/slides/slide-1.jpg",
  },
  {
    id: 2,
    title: "Clean",
    image: "/assets/img/slides/slide-2.jpg",
  },
  {
    id: 3,
    title: "Support Videos",
    video: "/assets/video/mountaineer.mp4",
    // For a youtube clip instead, drop "local" and use:
    // youtube: "https://www.youtube.com/watch?v=FZ-QSu9hbRI",
  },
  {
    id: 4,
    title: "Simple",
    image: "/assets/img/slides/slide-3.jpg",
  },
] satisfies HeroSlide[];

// Home hero slider V2. Each entry is one full-width image slide with a
// left-aligned caption: a multi-line heading, a multi-line paragraph, and a
// call-to-action button. `title` / `text` are arrays — one string per line.
export interface HeroSlideV2 {
  id: number;
  title: string[];
  text: string[];
  buttonLabel: string;
  buttonHref: string;
  image: string;
}

export const heroSlidesV2 = [
  {
    id: 1,
    title: ["We're wild people", "searching for the freedom"],
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "Soluta at rerum, quam eos porro corrupti laboriosam! Non quo",
      "laudantium, laboriosam nam molestias, adipisci in impedit",
    ],
    buttonLabel: "Join With The Community",
    buttonHref: "/contact-v2",
    image: "/assets/img/slides/slide-4.jpg",
  },
  {
    id: 2,
    title: ["After set in multiply", "the there living yielding"],
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "Soluta at rerum, quam eos porro corrupti laboriosam! Non quo",
      "laudantium, laboriosam nam molestias, adipisci in impedit",
    ],
    buttonLabel: "Join With The Community",
    buttonHref: "/contact-v2",
    image: "/assets/img/slides/slide-5.jpg",
  },
  {
    id: 3,
    title: ["She'd the herb heaven", "winged you'll fruit years"],
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "Soluta at rerum, quam eos porro corrupti laboriosam! Non quo",
      "laudantium, laboriosam nam molestias, adipisci in impedit",
    ],
    buttonLabel: "Join With The Community",
    buttonHref: "/contact-v2",
    image: "/assets/img/slides/slide-6.jpg",
  },
] satisfies HeroSlideV2[];
