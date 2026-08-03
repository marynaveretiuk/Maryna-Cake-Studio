"use client";

import { useMemo } from "react";
import Image from "next/image";
import SlideLink from "@/components/common/SlideLink";
import ProductPrice from "@/components/shop/ProductPrice";
import { productsData } from "@/data/products";

const TOP_COUNT = 5;

// Shop sidebar widget - top-rated products.
export default function WidgetTopRated() {
  const topRated = useMemo(
    () => [...productsData].sort((a, b) => b.rating - a.rating).slice(0, TOP_COUNT),
    []
  );

  return (
    <section className="widget widget_top_rated_products">
      <h5 className="widget-title">Top rated products</h5>
      <ul className="product_list_widget">
        {topRated.map((product) => {
          const href = `/shop-details/${product.slug}`;
          return (
            <li key={product.id}>
              <SlideLink href={href}>
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={300}
                  height={370}
                  className="attachment-shop_thumbnail"
                />
                <span className="product-title">{product.title}</span>
              </SlideLink>

              <ProductPrice product={product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
