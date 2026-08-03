import Header from "@/components/header/Header";
import Parallax from "@/components/portfolio/parallax/ParallaxAlternative";
import PortfolioAlternative from "@/components/portfolio/grid/PortfolioAlternative";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Portfolio Alternative | Maryna Cake Studio",
};

export default function PortfolioAlternativePage() {
  return (
    <>
      <Header />
      <Parallax />
      <PortfolioAlternative />
      <Footer />
    </>
  );
}
