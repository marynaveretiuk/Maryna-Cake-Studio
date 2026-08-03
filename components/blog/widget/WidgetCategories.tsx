import Link from "next/link";
import { postsData } from "@/data/posts";

// Post category counts, derived once from the posts.
const categories = postsData.reduce<Record<string, number>>((acc, post) => {
  post.categories.forEach((name) => {
    acc[name] = (acc[name] ?? 0) + 1;
  });
  return acc;
}, {});

// Blog sidebar widget - post categories with counts.
export default function WidgetCategories() {
  return (
    <section className="widget widget-categories">
      <h5 className="widget-title">Categories</h5>
      <ul>
        {Object.entries(categories).map(([name, count]) => (
          <li key={name}>
            <Link href="#">
              <div className="btn-reveal">
                <span>{name} <span>({count})</span></span>
                <span className="reveal">{name} <span>({count})</span></span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
