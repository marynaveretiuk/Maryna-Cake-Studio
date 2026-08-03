import Header from "@/components/header/Header";
import Parallax from "@/components/pages/faq/Parallax";
import Faq from "@/components/pages/faq/Faq";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Faq | Maryna Cake Studio",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <Parallax />
      <Faq />
      <Footer />
    </>
  );
}
