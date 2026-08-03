import Header from "@/components/header/Header";
import BlogPostFormat from "@/components/blog/BlogPostFormat";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog Post Format | Maryna Cake Studio",
};

export default function BlogPostFormatPage() {
  return (
    <>
      <Header />
      <BlogPostFormat />
      <Footer />
    </>
  );
}
