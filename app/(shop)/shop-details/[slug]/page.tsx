import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ShopSingle from "@/components/shop/single/ShopSingle";
import { productsData } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render a static page for every product slug.
export function generateStaticParams() {
  return productsData.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  return {
    title: product ? `${product.title} | Maryna Cake Studio` : "Shop | Glacier",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <>
      <Header />
      <ShopSingle product={product} />
      <Footer />
    </>
  );
}
