import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Cart from "@/components/shop/cart/Cart";

export const metadata = {
  title: "Cart | Maryna Cake Studio",
};

export default function CartPage() {
  return (
    <>
      <Header />
      <Cart />
      <Footer />
    </>
  );
}
