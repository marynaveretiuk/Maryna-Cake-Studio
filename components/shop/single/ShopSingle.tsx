import WidgetProductCategories from "@/components/shop/widget/WidgetProductCategories";
import WidgetCart from "@/components/shop/widget/WidgetCart";
import WidgetTopRated from "@/components/shop/widget/WidgetTopRated";
import CartNotice from "@/components/shop/single/CartNotice";
import ProductGallery from "@/components/shop/single/ProductGallery";
import ProductSummary from "@/components/shop/single/ProductSummary";
import ProductTabs from "@/components/shop/single/ProductTabs";
import RelatedProducts from "@/components/shop/single/RelatedProducts";
import type { Product } from "@/data/products";

// Single product page - gallery + summary, description/reviews tabs, related
// products, and a sidebar (categories, cart, top-rated — no price filter).
export default function ShopSingle({ product }: { product: Product }) {
  return (
    <section className="shop-section shop-single space">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <CartNotice />

            <div className="product-single">
              <div className="row">
                <div className="col-md-6">
                  <ProductGallery product={product} />
                </div>
                <div className="col-md-6">
                  <ProductSummary product={product} />
                </div>
              </div>

              <ProductTabs product={product} />
            </div>

            <RelatedProducts product={product} />
          </div>

          <div className="col-md-3 shop-sidebar--right">
            {/* Widgets */}
            <aside id="sidebar" className="widget-area" role="complementary">
              <WidgetProductCategories />
              <WidgetCart />
              <WidgetTopRated />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
