import RevealImage from "@/components/common/animation/RevealImage";
import Skillbar from "@/components/about/about-us/Skillbar";

// About Us page - alternate features grid.
export default function Features2() {
  return (
    <section className="who-section space pb-0">
      <div className="container">
        <div className="row gy-5">
          <div className="col-md-6">
            <RevealImage
              src="/assets/img/about/about-us.jpg"
              alt="John Smith"
              width={750}
              height={808}
              start="top 90%"
            />
          </div>
          <div className="col-md-6 ps-md-4">
            <h5>ABOUT US</h5>
            <p className="mb-5">Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had.</p>
            <h5>WHAT WE DO</h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
            <h5 className="mb-5">SERVICES</h5>
            <Skillbar />
          </div>
        </div>
      </div>
    </section>
  );
}
