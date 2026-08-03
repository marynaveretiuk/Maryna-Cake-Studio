import Image from "next/image";
import Marquee from "react-fast-marquee";
import { partners } from "@/data/partners";

// About Us page - alternate partner logo row.
export default function Partners2() {
  return (
    <section className="partners-section space">
      <div className="container">
        <h5>OUR PARTNERS</h5>
        <p className="mb-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
        <div className="row">
          <div className="col-md-12 mt-5">
            <Marquee speed={50} autoFill>
              {partners.map((partner) => {
                const logo = (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={130}
                    height={30}
                    className="img-fluid w-100 h-auto"
                  />
                );

                return partner.url ? (
                  <a
                    key={partner.id}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-item"
                  >
                    {logo}
                  </a>
                ) : (
                  <div key={partner.id} className="partner-item">
                    {logo}
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
