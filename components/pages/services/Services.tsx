import { services } from "@/data/services";

// Services page - services grid from data.
export default function Services() {
  return (
    <section className="services-section space">
      <div className="container">
        <div className="row gy-5">
          <div className="col-md-12">
            <h2 className="title-section-small mb-3">Your Guides to Email Marketing, SEO, CRM, & Automation.</h2>
            <p>God. There air meat. Behold him fourth let. Fowl fourth his years our a don't you'll his third own he very created won't tree form there created.</p>
          </div>

          <div className="col-md-12">
            <div className="row gy-4">
              {services.map((service) => (
                <div key={service.id} className="col-md-4">
                  <div className="services-box">
                    <div className="icon">
                      <i aria-hidden="true" className={service.icon} />
                    </div>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
