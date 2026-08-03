import SlideLink from "@/components/common/SlideLink";
import { pricingPlans } from "@/data/pricing";

// Pricing page - plan cards from data.
export default function Pricing() {
  return (
    <section className="pricing-section space">
      <div className="container">
        <div className="row gy-5">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="col-md-4">
              <div className="pricing-box">
                <div className="card-header">
                  <h2 className="card-heading">{plan.title}</h2>
                  <p>{plan.description}</p>
                </div>
                <hr />
                <div className="card-body">
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <i aria-hidden="true" className="fa-solid fa-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <hr />
                  <h3>${plan.price}/MO</h3>
                  <SlideLink href={plan.href} className="btn-link">
                    <div className="btn-reveal">
                      <span>Buy now</span>
                      <span className="reveal">Buy now</span>
                    </div>
                  </SlideLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
