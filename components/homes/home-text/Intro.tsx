import RevealTitle from "@/components/common/animation/RevealTitle";
import FadeUp from "@/components/common/animation/FadeUp";

// Home Text - intro text block above the portfolio.
export default function Intro() {
  return (
    <section className="text-intro-section space pb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <RevealTitle
              as="h2"
              start="top 95%"
              className="title-section-small mb-3 mt-5 split-words"
            >
              GLACIER. WE ARE DIGITAL AGENCY.
            </RevealTitle>

            <FadeUp as="p">
              Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t.
              <br />
              Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights.
              <br />
              Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
