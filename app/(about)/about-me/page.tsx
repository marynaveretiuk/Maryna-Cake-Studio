import Header from "@/components/header/Header";
import AboutMaryna from "@/components/about/about-me/AboutMaryna";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "About Maryna | Maryna Cake Studio",
  description:
    "Meet Maryna, founder and cake artist behind Maryna Cake Studio in Massachusetts.",
};

export default function AboutMePage() {
  return (
    <>
      <Header />
      <AboutMaryna />
      <Footer />
    </>
  );
}
