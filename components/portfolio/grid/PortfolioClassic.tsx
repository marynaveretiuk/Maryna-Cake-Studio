import Image from "next/image";
import SlideLink from "@/components/common/SlideLink";

const collections = [
  {
    id: 1,
    title: "Birthday Cakes",
    href: "/birthday-cakes",
    image: "/assets/cakes/birthday-cakes.jpeg",
  },
  {
    id: 2,
    title: "Kids' Cakes",
    href: "/kids-cakes",
    image: "/assets/cakes/kids-cakes.jpeg",
  },
  {
    id: 3,
    title: "Wedding Cakes",
    href: "/wedding-cakes",
    image: "/assets/cakes/wedding-cakes1.jpeg",
  },
  {
    id: 4,
    title: "Baptism Cakes",
    href: "/baptism-cakes",
    image: "/assets/cakes/baptism-cakes.jpeg",
  },
  {
    id: 5,
    title: "Mousse Cakes",
    href: "/mousse-cakes",
    image: "/assets/cakes/mousse-cakes.jpeg",
  },
  {
    id: 6,
    title: "Desserts",
    href: "/desserts",
    image: "/assets/cakes/desserts.jpeg",
  },
];

export default function PortfolioClassic() {
  return (
    <section className="collections-section space">
      <div className="container">
        <div className="collections-heading">
          <p className="collections-eyebrow">Explore</p>
          <h2>Our Signature Collections</h2>
        </div>

        <div className="row g-4">
          {collections.map((collection) => (
            <div key={collection.id} className="col-12 col-sm-6 col-lg-4">
              <SlideLink href={collection.href} className="collection-card">
                <div
                  className="collection-card__image"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "520px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="collection-card__content">
                  <h3>{collection.title}</h3>
                  <span>View Collection</span>
                </div>
              </SlideLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
