import Header from "@/components/header/Header";
import PortfolioFullWidth from "@/components/portfolio/grid/PortfolioFullWidth";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Portfolio Full Width | Maryna Cake Studio",
};

export default function PortfolioFullWidthPage() {
  return (
    <>
      <Header />
      <PortfolioFullWidth />
      <Footer />
    </>
  );
}
