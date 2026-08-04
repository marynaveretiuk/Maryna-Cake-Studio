import Image from "next/image";
import SlideLink from "@/components/common/SlideLink";

export default function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-preview__grid">
          <div className="about-preview__image">
            <Image
              src="/assets/cakes/about-maryna3.jpg"
              alt="Maryna, founder of Maryna Cake Studio"
              fill
              sizes="(max-width: 991px) 100vw, 50vw"
            />
          </div>

          <div className="about-preview__content">
            <p className="eyebrow">Meet the Baker</p>

            <h2>Every Cake Tells a Story</h2>

            <p>
              Behind every cake is a passion for creating beautiful moments. I'm
              Maryna, founder of Maryna Cake Studio, where every design is
              handcrafted from scratch using premium ingredients and thoughtful
              details. Whether it's a wedding, birthday, or baptism, my goal is
              to create a centerpiece that's as memorable as the celebration
              itself.
            </p>

            <p>— Maryna</p>

            <SlideLink href="/about" className="brand-button">
              My Story
            </SlideLink>
          </div>
        </div>
      </div>
    </section>
  );
}
