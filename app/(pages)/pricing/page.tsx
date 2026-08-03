import Header from "@/components/header/Header";
import Parallax from "@/components/pages/pricing/Parallax";
import Pricing from "@/components/pages/pricing/Pricing";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Pricing | Maryna Cake Studio",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <Parallax />
      <Pricing />
      <Footer />
    </>
  );
}
