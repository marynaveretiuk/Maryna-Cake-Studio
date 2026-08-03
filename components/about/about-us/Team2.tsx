import { teamData } from "@/data/team";
import RevealImage from "@/components/common/animation/RevealImage";

// About Us page - alternate team layout.
export default function Team2() {
  return (
    <section className="team-section space pb-0">
      <div className="container">
        <h5>OUR TEAM</h5>
        <p className="mb-0">Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p>
        <div className="row gy-5 mt-1">
          {teamData.slice(3, 6).map((member) => (
            <div key={member.id} className="col-md-4">
              <div className="team-card">
                <RevealImage
                  src={member.imageSrc}
                  alt={member.name}
                  className="team-card__image w-100"
                  width={870}
                  height={1110}
                  start="top 80%"
                />

                <div className="team-card__content">
                  <h2>{member.name}</h2>
                  <p>{member.description}</p>

                  <div className="social-icons">
                    <ul>
                      {member.socialLinks.map((social) => (
                        <li key={social.href}>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.title}
                            aria-label={social.title}
                          >
                            <div className="btn-reveal">
                              <span>
                                <i className={social.iconClass} aria-hidden="true" />
                              </span>
                              <span className="reveal">
                                <i className={social.iconClass} aria-hidden="true" />
                              </span>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
