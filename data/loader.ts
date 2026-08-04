// Intro loading screen config (toggle + main word + rotating words).
export interface Loader {
  enabled: boolean;
  mainWord: string;
  words: readonly string[];
}

export const loader = {
  enabled: false, // set false to skip the intro loader
  mainWord: "Glacier",
  words: [
    "Art Direction",
    "Graphic Design",
    "UI/UX Design",
    "Web Development",
    "Product Design",
  ],
} satisfies Loader;
