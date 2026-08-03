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

import { Dosis, Source_Sans_3 } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import Providers from "@/context/Providers";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--title-font",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--body-font",
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
        <body className={`body ${dosis.variable} ${sourceSans3.variable}`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
