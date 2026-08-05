import SlideLink from "@/components/common/SlideLink";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__brand">
          <SlideLink href="/" className="site-footer__logo">
            MARYNA
          </SlideLink>

          <span>CAKE STUDIO</span>
        </div>

        <nav className="site-footer__links">
          <SlideLink href="/">Home</SlideLink>

          <SlideLink href="/portfolio-classic">Gallery</SlideLink>

          <SlideLink href="/#flavors">Flavors</SlideLink>

          <SlideLink href="/about-me">About</SlideLink>

          <SlideLink href="/faq">FAQ</SlideLink>

          <SlideLink href="/contact-v1">Contact</SlideLink>
        </nav>

        <div className="site-footer__social">
          <a
            href="https://www.instagram.com/marynacakestudio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/marynacakestudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Maryna Cake Studio</p>

          <p>Massachusetts • By appointment only</p>
        </div>
      </div>
    </footer>
  );
}
