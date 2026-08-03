import Header from "@/components/header/Header";
import Parallax from "@/components/pages/countdown-timer/Parallax";
import Countdown from "@/components/pages/countdown-timer/Countdown";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Countdown Timer | Maryna Cake Studio",
};

export default function CountdownTimer() {
  return (
    <>
      <Header />
      <Parallax />
      <Countdown />
      <Footer />
    </>
  );
}
