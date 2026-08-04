import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "../public/assets/css/vendor.css";
import "../public/assets/sass/app.scss";

import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import Providers from "@/context/Providers";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--heading-font",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--body-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maryna Cake Studio",
  description:
    "Luxury custom cakes handcrafted for weddings, birthdays, and special celebrations in Massachusetts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`body ${cormorant.variable} ${manrope.variable}`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
