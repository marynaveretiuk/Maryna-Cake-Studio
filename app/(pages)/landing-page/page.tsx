import Header from "@/components/header/Header";
import Parallax from "@/components/pages/landing-page/Parallax";
import Features from "@/components/pages/landing-page/Features";
import Services from "@/components/pages/landing-page/Services";
import Info from "@/components/pages/landing-page/Info";
import Pricing from "@/components/pages/landing-page/Pricing";
import ActionImage from "@/components/pages/landing-page/ActionImage";
import Contact from "@/components/pages/landing-page/Contact";
import ActionText from "@/components/pages/landing-page/ActionText";
import Partners from "@/components/pages/landing-page/Partners";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Landing Page | Maryna Cake Studio",
};

export default function LandingPage() {
  return (
    <>
      <Header />
      <Parallax />
      <Features />
      <Services />
      <Info />
      <Pricing />
      <ActionImage />
      <Contact />
      <ActionText />
      <Partners />
      <Footer />
    </>
  );
}
