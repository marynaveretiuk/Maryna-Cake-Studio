import Header from "@/components/header/Header";
import BlogCreative from "@/components/blog/BlogCreative";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog Creative | Maryna Cake Studio",
};

export default function BlogCreativePage() {
  return (
    <>
      <Header />
      <BlogCreative />
      <Footer />
    </>
  );
}
