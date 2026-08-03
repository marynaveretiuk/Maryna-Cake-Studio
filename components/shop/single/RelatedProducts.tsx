import Product from "@/components/shop/Product";
import { productsData, type Product as ProductType } from "@/data/products";

const RELATED_COUNT = 4;

// Single product - "Related products" row: other products that share at least
// one category with the current one (excluding itself).
export default function RelatedProducts({ product }: { product: ProductType }) {
  const related = productsData
    .filter(
      (p) =>
        p.id !== product.id &&
        p.categories.some((cat) => product.categories.includes(cat))
    )
    .slice(0, RELATED_COUNT);

  if (related.length === 0) return null;

  return (
    <section className="related-products">
      <h2 className="related-products__title">Related products</h2>
      <div className="row shopContainer">
        {related.map((p) => (
          <div className="col-12 col-sm-6 col-lg-3" key={p.id}>
            <Product product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
