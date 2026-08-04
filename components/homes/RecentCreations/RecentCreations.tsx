import Image from "next/image";
import SlideLink from "@/components/common/SlideLink";

const recentCreations = [
  {
    id: 1,
    title: "Elegant Birthday Cake",
    image: "/assets/cakes/recent-01.jpeg",
    href: "/birthday-cakes",
  },
  {
    id: 2,
    title: "Floral Celebration Cake",
    image: "/assets/cakes/recent-02.jpeg",
    href: "/birthday-cakes",
  },
  {
    id: 3,
    title: "First Birthday Cake",
    image: "/assets/cakes/recent-03.jpeg",
    href: "/kids-cakes",
  },
  {
    id: 4,
    title: "Luxury Custom Cake",
    image: "/assets/cakes/recent-04.jpeg",
    href: "/custom-cakes",
  },
  {
    id: 5,
    title: "Kids' Birthday Cake",
    image: "/assets/cakes/recent-05.jpeg",
    href: "/kids-cakes",
  },
  {
    id: 6,
    title: "Graduation Cake",
    image: "/assets/cakes/recent-06.jpeg",
    href: "/graduation-cakes",
  },
];

export default function RecentCreations() {
  return (
    <section className="recent-creations space">
      <div className="container">
        <div className="recent-creations__heading">
          <p>Latest Work</p>
          <h2>Recent Creations</h2>
        </div>

        <div className="row g-4">
          {recentCreations.map((creation) => (
            <div key={creation.id} className="col-12 col-sm-6 col-lg-4">
              <SlideLink href={creation.href} className="recent-card">
                <div className="recent-card__image">
                  <Image
                    src={creation.image}
                    alt={creation.title}
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                  />
                </div>

                <h3>{creation.title}</h3>
              </SlideLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
