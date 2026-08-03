import { formatPrice } from "@/context/CartContext";
import { isOnSale, type Product } from "@/data/products";

// Renders a product price, showing the struck-through original + sale price
// when the product is on sale. Shared by the product card and sidebar widgets.
export default function ProductPrice({ product }: { product: Product }) {
  return (
    <span className="price">
      {isOnSale(product) ? (
        <>
          <del aria-hidden="true">
            <span className="amount">{formatPrice(product.price)}</span>
          </del>{" "}
          <ins aria-hidden="true">
            <span className="amount">{formatPrice(product.salePrice!)}</span>
          </ins>
        </>
      ) : (
        <span className="amount">{formatPrice(product.price)}</span>
      )}
    </span>
  );
}
