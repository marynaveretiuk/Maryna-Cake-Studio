import Image from "next/image";
import SlideLink from "@/components/common/SlideLink";

const recentCreations = [
  {
    id: 1,
    title: "Modern Celebration Cake",
    image: "/assets/cakes/recent-01.jpeg",
    href: "/birthday-cakes",
    className: "recent-item recent-item--large",
  },
  {
    id: 2,
    title: " Floral Birthday Cake",
    image: "/assets/cakes/recent-02.jpeg",
    href: "/birthday-cakes",
    className: "recent-item recent-item--small",
  },
  {
    id: 3,
    title: "Girl's Birthday Cake",
    image: "/assets/cakes/recent-03.jpeg",
    href: "/kids-cakes",
    className: "recent-item recent-item--small",
  },
  {
    id: 4,
    title: "Birthday Cake for Women",
    image: "/assets/cakes/recent-04.jpeg",
    href: "/wedding-cakes",
    className: "recent-item recent-item--large",
  },
  {
    id: 5,
    title: "Boy's Birthday Cake",
    image: "/assets/cakes/recent-05.jpeg",
    href: "/baptism-cakes",
    className: "recent-item recent-item--medium",
  },
  {
    id: 6,
    title: "Graduation Cake",
    image: "/assets/cakes/recent-06.jpeg",
    href: "/mousse-cakes",
    className: "recent-item recent-item--medium",
  },
];

export default function RecentCreations() {
  return (
    <section className="recent-creations">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Latest Work</p>
          <h2>Recent Creations</h2>
          <p className="description">
            A curated selection of handcrafted cakes designed for unforgettable
            celebrations.
          </p>
        </div>

        <div className="recent-grid">
          {recentCreations.map((creation) => (
            <SlideLink
              key={creation.id}
              href={creation.href}
              className="recent-card"
            >
              <div className="recent-card__image">
                <Image
                  src={creation.image}
                  alt={creation.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              </div>

              <div className="recent-card__content">
                <h3>{creation.title}</h3>
                <span>View Collection</span>
              </div>
            </SlideLink>
          ))}
        </div>

        <div className="recent-creations__button">
          <SlideLink href="/gallery" className="brand-button">
            View Full Gallery
          </SlideLink>
        </div>
      </div>
    </section>
  );
}
