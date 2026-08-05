import Header from "@/components/header/Header";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Cake Gallery | Maryna Cake Studio",
  description:
    "Explore custom wedding cakes, birthday cakes, kids’ cakes, baptism cakes, mousse cakes, and desserts by Maryna Cake Studio.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />

      <main>
        <GalleryHero />
        <GalleryGrid />
      </main>

      <Footer />
    </>
  );
}
