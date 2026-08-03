import Header from "@/components/header/Header";
import Parallax from "@/components/blog/Parallax";
import BlogClassic from "@/components/blog/BlogClassic";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog Classic | Maryna Cake Studio",
};

export default function BlogClassicPage() {
  return (
    <>
      <Header />
      <Parallax />
      <BlogClassic />
      <Footer />
    </>
  );
}
