import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HeroSliderV2 from "@/components/homes/home-slider-v2/HeroSliderV2";
import PortfolioHomeSliderV2 from "@/components/homes/home-slider-v2/PortfolioHomeSliderV2";

export const metadata = {
  title: "Home Slider V2 | Maryna Cake Studio",
};

export default function HomeSliderV2() {
  return (
    <>
      <Header />
      <HeroSliderV2 />
      <PortfolioHomeSliderV2 />
      <Footer />
    </>
  );
}
