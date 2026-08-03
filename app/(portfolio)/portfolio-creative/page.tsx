import Header from "@/components/header/Header";
import Parallax from "@/components/portfolio/parallax/ParallaxCreative";
import PortfolioCreative from "@/components/portfolio/grid/PortfolioCreative";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Portfolio Creative | Maryna Cake Studio",
};

export default function PortfolioCreativePage() {
  return (
    <>
      <Header />
      <Parallax />
      <PortfolioCreative />
      <Footer />
    </>
  );
}
