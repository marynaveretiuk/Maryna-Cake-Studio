import SlideLink from "@/components/common/SlideLink";
import RevealImage from "@/components/common/animation/RevealImage";

// Landing - call-to-action band with image.
export default function ActionImage() {
  return (
    <section className="action-image-section space section-bg">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-md-6">
            <h2 className="title-section-small mb-3">We are here to guide you whenever you need.</h2>
            <p>Living, i divided was be every had. Him god. Don't kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they're together.</p>
            <p>Created, likeness bring which in stars herb a is give you'll it life you'll. Whose evening. Spirit subdue two don't. Living, i divided was be every had. Him god. Don't kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they're together.</p>
            <p>A divide rule that second said Two deep. Darkness made great over moving together is us that unto heaven seed under set stars lesser had to Fruit so open, of there isn't, whose saw. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dusmod tempor incididunt ut labore et dolore magna aliqua. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
            <SlideLink href="/contact-v2" className="btn-link">
              <div className="btn-reveal">
                <span>Get Started <i className="fa-solid fa-angle-right" /></span>
                <span className="reveal">Get Started <i className="fa-solid fa-angle-right" /></span>
              </div>
            </SlideLink>
          </div>

          <div className="col-md-6 ps-md-4">
            <RevealImage
              src="/assets/img/team/team-6.jpg"
              alt="Guide"
              width={870}
              height={1110}
              start="top 90%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
