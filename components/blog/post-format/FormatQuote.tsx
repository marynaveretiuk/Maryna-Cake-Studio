import Image from "next/image";
import { Post } from "@/data/posts";

// Blog post media - quote format.
export default function FormatQuote({ post }: { post: Post }) {
  return (
    <div className="image-box type-quote">
      <Image
        src={post.imageSrc}
        alt={post.title}
        className="type-quote__bg"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <blockquote>
        <p>{post.quote}</p>
        <cite>{post.quoteAuthor}</cite>
      </blockquote>
    </div>
  );
}
