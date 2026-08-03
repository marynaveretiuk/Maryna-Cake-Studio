import SlideLink from "@/components/common/SlideLink";

// Landing - centered call-to-action band.
export default function ActionText() {
  return (
    <section className="action-text-section space section-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h2 className="title-section-small mb-3">Ready to Grow Your Business?</h2>
            <p>Darkness made great over moving together is us that unto heaven seed under set stars.</p>
            <SlideLink href="/contact-v1" className="btn-link">
              <div className="btn-reveal">
                <span>Get Started <i className="fa-solid fa-angle-right" /></span>
                <span className="reveal">Get Started <i className="fa-solid fa-angle-right" /></span>
              </div>
            </SlideLink>
          </div>
        </div>
      </div>
    </section>
  );
}
