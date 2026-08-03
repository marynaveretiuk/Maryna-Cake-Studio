import Header from "@/components/header/Header";
import Parallax from "@/components/contact/Parallax";
import ContactV1 from "@/components/contact/ContactV1";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Contact V1 | Maryna Cake Studio",
};

export default function Contact() {
  return (
    <>
      <Header />
      <Parallax />
      <ContactV1 />
      <Footer />
    </>
  );
}
