import Link from "next/link";
import { postsData } from "@/data/posts";

interface WidgetRecentPostsProps {
  count?: number;
}

// Blog sidebar widget - recent posts list.
export default function WidgetRecentPosts({ count = 4 }: WidgetRecentPostsProps) {
  // Posts are stored newest-first, so the first `count` are the latest.
  const recentPosts = postsData.slice(0, count);

  return (
    <section className="widget widget-recent-entries">
      <h5 className="widget-title">Latest Posts</h5>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.id}>
            <Link href="#">
              <div className="btn-reveal">
                <span>{post.title}</span>
                <span className="reveal">{post.title}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
