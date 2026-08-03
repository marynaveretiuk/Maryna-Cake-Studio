import WidgetPriceFilter from "@/components/shop/widget/WidgetPriceFilter";
import WidgetProductCategories from "@/components/shop/widget/WidgetProductCategories";
import WidgetCart from "@/components/shop/widget/WidgetCart";
import WidgetTopRated from "@/components/shop/widget/WidgetTopRated";

// Shop sidebar - composes the shop widgets (product grid / listing page).
export default function Sidebar() {
  return (
    <aside id="sidebar" className="widget-area" role="complementary">
      <WidgetPriceFilter />
      <WidgetProductCategories />
      <WidgetCart />
      <WidgetTopRated />
    </aside>
  );
}
