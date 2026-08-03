import Header from "@/components/header/Header";
import BlogFullWidth from "@/components/blog/BlogFullWidth";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog Full Width | Maryna Cake Studio",
};

export default function BlogFullWidthPage() {
  return (
    <>
      <Header />
      <BlogFullWidth />
      <Footer />
    </>
  );
}
