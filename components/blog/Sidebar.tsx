import WidgetSearch from "@/components/blog/widget/WidgetSearch";
import WidgetAbout from "@/components/blog/widget/WidgetAbout";
import WidgetCategories from "@/components/blog/widget/WidgetCategories";
import WidgetRecentPosts from "@/components/blog/widget/WidgetRecentPosts";
import WidgetTagCloud from "@/components/blog/widget/WidgetTagCloud";

// Blog sidebar - composes the widgets (search, categories, etc.).
export default function Sidebar() {
  return (
    <aside className="widget-area">
      <WidgetSearch />
      <WidgetAbout />
      <WidgetCategories />
      <WidgetRecentPosts count={4} />
      <WidgetTagCloud />
    </aside>
  );
}
