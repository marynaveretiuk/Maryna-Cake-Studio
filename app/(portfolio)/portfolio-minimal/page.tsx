import Header from "@/components/header/Header";
import Parallax from "@/components/portfolio/parallax/ParallaxMinimal";
import PortfolioMinimal from "@/components/portfolio/grid/PortfolioMinimal";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Portfolio Minimal | Maryna Cake Studio",
};

export default function PortfolioMinimalPage() {
  return (
    <>
      <Header />
      <Parallax />
      <PortfolioMinimal />
      <Footer />
    </>
  );
}
