"use client";

import Image from "next/image";
import RevealImage from "@/components/common/animation/RevealImage";
import SlideLink from "@/components/common/SlideLink";
import { useCart } from "@/context/CartContext";
import ProductPrice from "@/components/shop/ProductPrice";
import { isOnSale, type Product } from "@/data/products";

// Shop product card (grid item) - image, price, add-to-cart.
export default function Product({ product }: { product: Product }) {
  const { addItem, items } = useCart();

  const inCart = items.some((item) => item.id === product.id);
  const onSale = isOnSale(product);
  const href = `/shop-details/${product.slug}`;
  const [firstImage, secondImage] = product.images;

  return (
    <article className="product">
      <div className="product-images">
        <SlideLink
          href={href}
          className="link-product-images"
          aria-label={product.title}
        />

        {onSale && <span className="onsale">Sale!</span>}

        <RevealImage
          src={firstImage}
          alt={product.title}
          className="first_image"
          width={600}
          height={740}
          start="top 95%"
        />

        {secondImage && (
          <div className="second_image">
            <Image
              src={secondImage}
              alt={product.title}
              width={600}
              height={740}
              className="attachment-shop_catalog"
            />
          </div>
        )}
      </div>

      <div className="shop_product-details">
        <h4 className="product-title">
          <SlideLink href={href}>{product.title}</SlideLink>
        </h4>

        <ProductPrice product={product} />

        <button
          type="button"
          className={`shop_cart-button${inCart ? " added" : ""}`}
          aria-label={`Add ${product.title} to your cart`}
          onClick={() => addItem(product)}
        >
          <span className="btn-reveal" aria-hidden="true">
            <span />
            <span className="reveal" />
          </span>
        </button>
      </div>
    </article>
  );
}
