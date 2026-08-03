import Image from "next/image";
import Marquee from "react-fast-marquee";
import { partners } from "@/data/partners";

// Landing - partner logos.
export default function Partners() {
  return (
    <section className="partners-section space">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
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
