import Header from "@/components/header/Header";
import Parallax from "@/components/pages/testimonial-slider/Parallax";
import Testimonials from "@/components/pages/testimonial-slider/Testimonials";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Testimonial Slider | Maryna Cake Studio",
};

export default function TestimonialSlider() {
  return (
    <>
      <Header />
      <Parallax />
      <Testimonials />
      <Footer />
    </>
  );
}
