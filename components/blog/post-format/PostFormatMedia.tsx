import { Post } from "@/data/posts";
import FormatQuote from "./FormatQuote";
import FormatLink from "./FormatLink";
import FormatSlider from "./FormatSlider";
import FormatGallery from "./FormatGallery";
import FormatVideo from "./FormatVideo";
import FormatAudio from "./FormatAudio";
import FormatImage from "./FormatImage";

interface PostFormatMediaProps {
  post: Post;
  /** List view links the featured image to the post; the single page does not. */
  linkToPost?: boolean;
}

// Picks the right media component for a post's format.
// Used by both the blog list cards and the single post page.
export default function PostFormatMedia({ post, linkToPost = false }: PostFormatMediaProps) {
  switch (post.postFormat) {
    case "quote":
      return <FormatQuote post={post} />;
    case "link":
      return <FormatLink post={post} />;
    case "slider":
      return <FormatSlider post={post} />;
    case "gallery":
      return <FormatGallery post={post} />;
    case "video":
      return <FormatVideo post={post} />;
    case "audio":
      return <FormatAudio post={post} />;
    case "standard":
      return null; // no featured media
    default:
      return <FormatImage post={post} linkToPost={linkToPost} />;
  }
}
