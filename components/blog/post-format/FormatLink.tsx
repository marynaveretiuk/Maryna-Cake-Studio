import Image from "next/image";
import { Post } from "@/data/posts";

// Blog post media - link format.
export default function FormatLink({ post }: { post: Post }) {
  return (
    <div className="image-box type-link">
      <Image
        src={post.imageSrc}
        alt={post.title}
        className="type-link__bg"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <a href={post.link} target="_blank" rel="noopener noreferrer">
        {post.link}
      </a>
    </div>
  );
}
