import { productsData } from "@/data/products";
import SlideLink from "@/components/common/SlideLink";

// Category list (with counts) derived once from the products, sorted A–Z.
const categories = Object.entries(
  productsData.reduce<Record<string, number>>((acc, p) => {
    p.categories.forEach((name) => {
      acc[name] = (acc[name] ?? 0) + 1;
    });
    return acc;
  }, {})
).sort(([a], [b]) => a.localeCompare(b));

// Shop sidebar widget - category list. Each item is a plain link to the shop
export default function WidgetProductCategories() {
  return (
    <section className="widget widget_product_categories">
      <h5 className="widget-title">Product categories</h5>
      <ul className="product-categories">
        {categories.map(([name, count]) => (
          <li key={name} className="cat-item">
            <SlideLink href="/shop">
              <div className="btn-reveal">
                <span>
                  {name} <span>({count})</span>
                </span>
                <span className="reveal">
                  {name} <span>({count})</span>
                </span>
              </div>
            </SlideLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
