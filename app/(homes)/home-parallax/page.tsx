import Header from "@/components/header/Header";
import Parallax from "@/components/homes/home-parallax/Parallax";
import PortfolioClassic from "@/components/portfolio/grid/PortfolioClassic";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Home Parallax | Maryna Cake Studio",
};

export default function HomeParallax() {
  return (
    <>
      <Header />
      <Parallax />
      <PortfolioClassic />
      <Footer />
    </>
  );
}
