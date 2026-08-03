import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HeroSlider from "@/components/homes/home-slider/HeroSlider";
import PortfolioHomeSlider from "@/components/homes/home-slider/PortfolioHomeSlider";

export const metadata = {
  title: "Home Slider | Maryna Cake Studio",
};

export default function HomeSlider() {
  return (
    <>
      <Header />
      <HeroSlider />
      <PortfolioHomeSlider />
      <Footer />
    </>
  );
}
