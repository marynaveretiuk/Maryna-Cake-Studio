import Header from "@/components/header/Header";
import Features2 from "@/components/about/about-us/Features2";
import Team2 from "@/components/about/about-us/Team2";
import Partners2 from "@/components/about/about-us/Partners2";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "About Us V2 | Maryna Cake Studio",
};

export default function AboutUsV2() {
  return (
    <>
      <Header />
      <Features2 />
      <Team2 />
      <Partners2 />
      <Footer />
    </>
  );
}
