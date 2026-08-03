import Header from "@/components/header/Header";
import Parallax from "@/components/pages/services/Parallax";
import Services from "@/components/pages/services/Services";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Our Services | Maryna Cake Studio",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <Parallax />
      <Services />
      <Footer />
    </>
  );
}
