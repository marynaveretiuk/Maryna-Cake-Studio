import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import BlogSingle from "@/components/blog/single/BlogSingle";
import { postsData } from "@/data/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render a static page for every post slug.
export function generateStaticParams() {
  return postsData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = postsData.find((p) => p.slug === slug);

  return {
    title: post ? `${post.title} | Maryna Cake Studio` : "Blog | Glacier",
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const index = postsData.findIndex((p) => p.slug === slug);

  if (index === -1) notFound();

  const post = postsData[index];
  const prevPost = index > 0 ? postsData[index - 1] : null;
  const nextPost = index < postsData.length - 1 ? postsData[index + 1] : null;

  return (
    <>
      <Header />
      <BlogSingle post={post} prevPost={prevPost} nextPost={nextPost} />
      <Footer />
    </>
  );
}
