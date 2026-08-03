import Link from "next/link";
import { postsData } from "@/data/posts";

// Unique tags across all posts, derived once.
const tags = [...new Set(postsData.flatMap((p) => p.tags))];

// Blog sidebar widget - tag cloud.
export default function WidgetTagCloud() {
  return (
    <section className="widget widget-tagcloud">
      <h5 className="widget-title">Tags</h5>
      <div className="tagcloud">
        {tags.map((tag) => (
          <Link key={tag} href="#" className="tagcloud-link">
            <div className="btn-reveal">
              <span>{tag}</span>
              <span className="reveal">{tag}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
