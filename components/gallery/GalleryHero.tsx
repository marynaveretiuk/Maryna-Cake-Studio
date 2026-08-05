import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="gallery-hero">
      <Image
        src="/assets/gallery/gallery-hero.jpeg"
        alt="Custom cakes by Maryna Cake Studio"
        fill
        priority
        sizes="100vw"
      />

      <div className="gallery-hero__overlay" />

      <div className="container gallery-hero__content">
        <h1>Cake Gallery</h1>
      </div>
    </section>
  );
}
