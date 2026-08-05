import Header from "@/components/header/Header";
import Faq from "@/components/pages/faq/Faq";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "FAQ | Maryna Cake Studio",
  description:
    "Answers about custom cake ordering, deposits, delivery, flavors, design, and booking with Maryna Cake Studio.",
};

export default function FaqPage() {
  return (
    <>
      <Header />

      <main>
        <Faq />
      </main>

      <Footer />
    </>
  );
}
