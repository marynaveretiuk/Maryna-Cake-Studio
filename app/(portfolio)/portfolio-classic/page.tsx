import Header from "@/components/header/Header";
import Parallax from "@/components/portfolio/parallax/ParallaxClassic";
import PortfolioClassic from "@/components/portfolio/grid/PortfolioClassic";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Portfolio Classic | Maryna Cake Studio",
};

export default function PortfolioClassicPage() {
  return (
    <>
      <Header />
      <Parallax />
      <PortfolioClassic />
      <Footer />
    </>
  );
}
