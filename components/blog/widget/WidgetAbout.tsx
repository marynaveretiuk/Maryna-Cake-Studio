import Image from "next/image";

const socialLinks = [
  { href: "https://www.twitter.com/", icon: "fa-brands fa-x-twitter", label: "X (Twitter)" },
  { href: "https://facebook.com/", icon: "fa-brands fa-facebook", label: "Facebook" },
  { href: "https://dribbble.com/", icon: "fa-brands fa-dribbble", label: "Dribbble" },
  { href: "https://www.youtube.com/", icon: "fa-brands fa-youtube", label: "YouTube" },
];

// Blog sidebar widget - about / bio box.
export default function WidgetAbout() {
  return (
    <section className="widget widget-about">
      <h5 className="widget-title">About Author</h5>
      <Image src="/assets/img/blog/author.png" alt="Author" width={180} height={180} />
      <h4>John Smith</h4>
      <p>
        Can&apos;t multiply. Set set created thing light blessed third without. Him can&apos;t
        kind called set is second thing from you&apos;ll tree. Seed darkness you. Itself night.
        Life. Hath creature good.
      </p>
      <div className="social-icons">
        <ul>
          {socialLinks.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <div className="btn-reveal">
                  <span>
                    <i aria-hidden="true" className={s.icon} />
                  </span>
                  <span className="reveal">
                    <i aria-hidden="true" className={s.icon} />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
