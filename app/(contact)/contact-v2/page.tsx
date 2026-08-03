import Header from "@/components/header/Header";
import ContactV2 from "@/components/contact/ContactV2";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Contact V2 | Maryna Cake Studio",
};

export default function Contact() {
  return (
    <>
      <Header />
      <ContactV2 />
      <Footer />
    </>
  );
}
