import Header from "@/components/header/Header";
import ContactV1 from "@/components/contact/ContactV1";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Contact | Maryna Cake Studio",
  description:
    "Contact Maryna Cake Studio to inquire about custom cakes for weddings, birthdays, baptisms, and special celebrations in Massachusetts.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <ContactV1 />

      <Footer />
    </>
  );
}
