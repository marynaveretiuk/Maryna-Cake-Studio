import Header from "@/components/header/Header";
import Parallax from "@/components/about/about-me/Parallax";
import Experience from "@/components/about/about-me/Experience";
import Features from "@/components/about/about-me/Features";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "About Me | Maryna Cake Studio",
};

export default function AboutMe() {
  return (
    <>
      <Header />
      <Parallax />
      <Experience />
      <Features />
      <Footer />
    </>
  );
}
