import { teamData } from "@/data/team";
import RevealImage from "@/components/common/animation/RevealImage";

// About Us page - team members grid.
export default function Team() {
  return (
    <section className="team-section space">
      <div className="container">
        <h2 className="title-section">OUR TEAM</h2>
        <div className="row gy-5">
          {teamData.slice(0, 3).map((member) => (
            <div key={member.id} className="col-md-4">
              <div className="team-card">
                <RevealImage
                  src={member.imageSrc}
                  alt={member.name}
                  className="team-card__image"
                  width={564}
                  height={705}
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
