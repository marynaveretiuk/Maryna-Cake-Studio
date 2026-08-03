import { links } from "@/data/footerlinks";

// Footer - renders the social links from data.
export default function FooterLinks() {
  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.href} target="_blank" rel="noreferrer" title={link.title}>
            <div className="btn-reveal">
              <span>{link.title}</span>
              <span className="reveal">{link.title}</span>
            </div>
          </a>
        </li>
      ))}
    </>
  );
}
