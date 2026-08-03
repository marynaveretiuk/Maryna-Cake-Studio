import SlideLink from "@/components/common/SlideLink";
import RevealImage from "@/components/common/animation/RevealImage";

// Landing - features section.
export default function Features() {
  return (
    <section className="who-section space section-bg">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-md-6">
            <h2 className="title-section-small mb-3">Solutions for Your Business Made Exceptionally Easy.</h2>
            <p>God. There air meat. Behold him fourth let. Fowl fourth his years our a don’t you’ll his third own he very created won’t tree form there created.</p>
            <p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness. </p>
            <p>A divide rule that second said Two deep. Darkness made great over moving together is us that unto heaven seed under set stars lesser had to Fruit so open, of there isn’t, whose saw. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dusmod tempor incididunt ut labore et dolore magna aliqua. Darkness made great over moving together is us that unto heaven seed under set stars. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
            <SlideLink href="/contact-v3" className="btn-link">
              <div className="btn-reveal">
                <span>Get Started <i className="fa-solid fa-angle-right"></i></span>
                <span className="reveal">Get Started <i className="fa-solid fa-angle-right"></i></span>
              </div>
            </SlideLink>
          </div>

          <div className="col-md-6 ps-md-4">
            <RevealImage
              src="/assets/img/about/about-us.jpg"
              alt="John Smith"
              width={750}
              height={808}
              start="top 90%"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
