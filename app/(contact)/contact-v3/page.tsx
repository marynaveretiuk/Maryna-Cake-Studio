import Header from "@/components/header/Header";
import Parallax2 from "@/components/contact/Parallax2";
import ContactV3 from "@/components/contact/ContactV3";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Contact V2 | Maryna Cake Studio",
};

export default function Contact() {
  return (
    <>
      <Header />
      <Parallax2 />
      <ContactV3 />
      <Footer />
    </>
  );
}
