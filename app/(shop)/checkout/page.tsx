import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Checkout from "@/components/shop/checkout/Checkout";

export const metadata = {
  title: "Checkout | Maryna Cake Studio",
};

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <Checkout />
      <Footer />
    </>
  );
}
