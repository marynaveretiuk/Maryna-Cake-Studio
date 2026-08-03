import Header from "@/components/header/Header";
import Parallax from "@/components/shop/Parallax";
import Shop from "@/components/shop/Shop";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Shop | Maryna Cake Studio",
};

export default function ShopPage() {
  return (
    <>
      <Header />
      <Parallax />
      <Shop />
      <Footer />
    </>
  );
}
