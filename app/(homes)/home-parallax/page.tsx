import Header from "@/components/header/Header";
import Parallax from "@/components/homes/home-parallax/Parallax";
import PortfolioClassic from "@/components/portfolio/grid/PortfolioClassic";
import Footer from "@/components/footer/Footer";
import RecentCreations from "@/components/homes/RecentCreations/RecentCreations";
import AboutPreview from "@/components/homes/AboutPreview";

export const metadata = {
  title: "Maryna Cake Studio",
  description:
    "Luxury custom cakes handcrafted for weddings, birthdays, and special celebrations in Massachusetts.",
};

export default function HomeParallax() {
  return (
    <>
      <Header />
      <Parallax />
      <PortfolioClassic />
      <RecentCreations />
      <AboutPreview />
      <Footer />
    </>
  );
}
