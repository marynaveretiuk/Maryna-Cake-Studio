import SlideLink from "@/components/common/SlideLink";
import RevealImage from "@/components/common/animation/RevealImage";

// Landing - info / about section.
export default function Info() {
  return (
    <section className="info-section space section-bg">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-md-6">
            <RevealImage
              src="/assets/img/parallax/parallax-minimal.jpg"
              alt="Info Image"
              width={1920}
              height={1074}
              start="top 90%"
            />
          </div>

          <div className="col-md-6 ps-md-4">
            <h4 className="title-section-small mb-2">Want more info?</h4>
            <h2 className="title-section-small mb-3">See How Sessions Can Change Your Life.</h2>
            <p>God. There air meat. Behold him fourth let. Fowl fourth his years our a don't you'll his third own he very created won't tree form there created.</p>
            <p>A divide rule that second said Two deep. Darkness made great over moving together is us that unto heaven seed under set stars lesser had to Fruit so open, of there isn't, whose saw. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <SlideLink href="/contact-v2" className="btn-link">
              <div className="btn-reveal">
                <span>Let's Chat <i className="fa-solid fa-angle-right"></i></span>
                <span className="reveal">Let's Chat <i className="fa-solid fa-angle-right"></i></span>
              </div>
            </SlideLink>
          </div>
        </div>
      </div>
    </section>
  );
}
