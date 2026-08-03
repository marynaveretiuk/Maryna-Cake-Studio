import Header from "@/components/header/Header";
import Parallax from "@/components/about/about-us/Parallax";
import Features from "@/components/about/about-us/Features";
import Portfolio from "@/components/about/about-us/Portfolio";
import Team from "@/components/about/about-us/Team";
import Partners from "@/components/about/about-us/Partners";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "About Us | Maryna Cake Studio",
};

export default function AboutUs() {
  return (
    <>
      <Header />
      <Parallax />
      <Features />
      <Portfolio />
      <Team />
      <Partners />
      <Footer />
    </>
  );
}
