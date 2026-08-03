import WorkStyleMinimal from "@/components/portfolio/style/WorkStyleMinimal";
import { portfolioData } from "@/data/portfolio";

// About Us page - portfolio preview: first 6 works, minimal style, no filter.
export default function Portfolio() {
  return (
    <section className="portfolio-section space section-bg mt-0">
      <div className="container">
        <h2 className="title-section">LAST OUR WORKS</h2>
        <div className="row portfolio-minimal__grid">
          {portfolioData.slice(0, 6).map((work) => (
            <WorkStyleMinimal key={work.id} work={work} loaded />
          ))}
        </div>
      </div>
    </section>
  );
}
