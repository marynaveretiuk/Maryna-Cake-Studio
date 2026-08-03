import type { Metadata } from "next";
import HomeParallax from "./(homes)/home-parallax/page";

export const metadata: Metadata = {
  title: "Maryna Cake Studio",
  description:
    "Luxury custom cakes handcrafted for weddings, birthdays, and special celebrations in Massachusetts.",
};

// Root route renders the Home Parallax page as the default homepage.
export default function Home() {
  return <HomeParallax />;
}
