import Header from "@/components/header/Header";
import BlogMinimal from "@/components/blog/BlogMinimal";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog Minimal | Maryna Cake Studio",
};

export default function BlogMinimalPage() {
  return (
    <>
      <Header />
      <BlogMinimal />
      <Footer />
    </>
  );
}
