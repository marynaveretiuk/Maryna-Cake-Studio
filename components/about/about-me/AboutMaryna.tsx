import Image from "next/image";
import SlideLink from "@/components/common/SlideLink";

export default function AboutMaryna() {
  return (
    <main className="about-maryna">
      <section className="about-maryna__hero">
        <div className="container">
          <div className="about-maryna__hero-grid">
            <div className="about-maryna__hero-image">
              <Image
                src="/assets/cakes/about-maryna3.JPG"
                alt="Maryna, founder of Maryna Cake Studio"
                fill
                priority
                sizes="(max-width: 991px) 100vw, 52vw"
              />
            </div>

            <div className="about-maryna__hero-content">
              <p className="about-maryna__eyebrow">Meet the Baker</p>

              <h1>
                Creating Beautiful
                <br />
                Moments Through Cake
              </h1>

              <p className="about-maryna__lead">
                I&apos;m Maryna, the founder and cake artist behind Maryna Cake
                Studio. I create handcrafted custom cakes for weddings,
                birthdays, baptisms, and life&apos;s most meaningful
                celebrations.
              </p>

              <p>
                Every cake is made from scratch with carefully selected
                ingredients, thoughtful flavor combinations, and close attention
                to every detail. My goal is to create a centerpiece that feels
                personal to your celebration and tastes just as beautiful as it
                looks.
              </p>

              <SlideLink href="/contact-v1" className="brand-button">
                Design Your Cake
              </SlideLink>
            </div>
          </div>
        </div>
      </section>

      <section className="about-maryna__story">
        <div className="container">
          <div className="about-maryna__story-grid">
            <div className="about-maryna__story-heading">
              <p className="about-maryna__eyebrow">My Philosophy</p>
              <h2>Every Cake Tells a Story</h2>
            </div>

            <div className="about-maryna__story-copy">
              <p>
                I believe a cake should be more than dessert. It should reflect
                the personality of the celebration, bring people together, and
                become part of the memories created that day.
              </p>

              <p>
                From elegant wedding cakes to joyful birthday designs, I work
                closely with every client to understand their vision, preferred
                colors, flavors, and meaningful details. Each creation is
                thoughtfully designed rather than copied, so the final cake
                feels truly yours.
              </p>

              <p className="about-maryna__signature">— Maryna</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-maryna__values">
        <div className="container">
          <div className="about-maryna__values-grid">
            <article>
              <span>01</span>
              <h3>Handcrafted</h3>
              <p>
                Every cake and filling is prepared with care, precision, and
                attention to detail.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Personal</h3>
              <p>
                Designs are created around your celebration, vision, and
                individual style.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Memorable</h3>
              <p>
                Beautiful presentation and balanced flavor come together in one
                unforgettable centerpiece.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}