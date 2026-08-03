import Header from "@/components/header/Header";
import Intro from "@/components/homes/home-text/Intro";
import PortfolioHomeText from "@/components/homes/home-text/PortfolioHomeText";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Home Text | Maryna Cake Studio",
};

export default function HomeText() {
  return (
    <>
      <Header />
      <Intro />
      <PortfolioHomeText />
      <Footer />
    </>
  );
}
