import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import PortfolioSingle from "@/components/portfolio/single/PortfolioSingle";
import { portfolioData } from "@/data/portfolio";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render a static page for every project slug.
export function generateStaticParams() {
  return portfolioData.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = portfolioData.find((w) => w.slug === slug);

  return {
    title: work ? `${work.title} | Maryna Cake Studio` : "Portfolio | Glacier",
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = portfolioData.findIndex((w) => w.slug === slug);

  if (index === -1) notFound();

  const work = portfolioData[index];
  const prevWork = index > 0 ? portfolioData[index - 1] : null;
  const nextWork =
    index < portfolioData.length - 1 ? portfolioData[index + 1] : null;

  return (
    <>
      <Header />
      <PortfolioSingle work={work} prevWork={prevWork} nextWork={nextWork} />
      <Footer />
    </>
  );
}
