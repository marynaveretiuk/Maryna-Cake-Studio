import SlideLink from "@/components/common/SlideLink";

const flavors = [
  {
    name: "Pistachio Raspberry",
    description:
      "Vanilla sponge, raspberry confit, and smooth pistachio ganache.",
  },
  {
    name: "Chocolate Hazelnut",
    description:
      "Rich chocolate sponge, hazelnut cream, and silky chocolate ganache.",
  },
  {
    name: "Mango Passion Fruit",
    description:
      "Light vanilla sponge with bright mango and passion fruit filling.",
  },
  {
    name: "Vanilla Raspberry",
    description:
      "Classic vanilla layers, raspberry confit, and delicate vanilla cream.",
  },
];

export default function FlavorsPreview() {
  return (
    <section className="flavors-preview">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Signature Flavors</p>
          <h2>Made to Be Remembered</h2>
          <p className="description">
            Thoughtfully balanced flavors made with premium ingredients for a
            cake that tastes as beautiful as it looks.
          </p>
        </div>

        <div className="flavors-preview__grid">
          {flavors.map((flavor) => (
            <article className="flavor-card" key={flavor.name}>
              <span className="flavor-card__number" aria-hidden="true">
                01
              </span>

              <h3>{flavor.name}</h3>
              <p>{flavor.description}</p>
            </article>
          ))}
        </div>

        <div className="flavors-preview__button">
          <SlideLink href="/flavors" className="brand-button">
            Explore All Flavors
          </SlideLink>
        </div>
      </div>
    </section>
  );
}
