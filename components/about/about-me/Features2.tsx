import RevealImage from "@/components/common/animation/RevealImage";
import Skillbar from "@/components/about/about-me/Skillbar";

// About Me page - alternate features grid.
export default function Features2() {
  return (
    <section className="me-section space">
      <div className="container">
        <div className="row gy-5">
          <div className="col-md-6">
            <RevealImage
              src="/assets/img/about/about-me.jpg"
              alt="John Smith"
              width={1012}
              height={1514}
              start="top 90%"
            />
          </div>
          <div className="col-md-6 ps-md-4">
            <h5>ABOUT ME</h5>
            <p className="mb-5">Hello, I’m a John Smith. This is where you will find more about me and the services I provide.  Called i that waters dry one said firmament his after their night. Likeness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
            <h5>MY BIO</h5>
            <p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together. A divide rule that second said Two deep.</p>
            <p className="mb-5">Darkness made great over moving together is us that unto heaven seed under set stars lesser had to Fruit so open, of there isn’t, whose saw. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dusmod tempor incididunt ut labore et dolore magna aliqua. Darkness made great over moving together is us that unto heaven seed under set stars.</p>
            <h5 className="pb-4">SERVICES</h5>
            <Skillbar />
          </div>
        </div>
      </div>
    </section>
  );
}
