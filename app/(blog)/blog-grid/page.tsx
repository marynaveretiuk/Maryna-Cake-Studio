import Header from "@/components/header/Header";
import BlogGrid from "@/components/blog/BlogGrid";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog Grid | Maryna Cake Studio",
};

export default function BlogGridPage() {
  return (
    <>
      <Header />
      <BlogGrid />
      <Footer />
    </>
  );
}
