import SlideLink from "@/components/common/SlideLink";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          {/* Brand */}
          <div className="site-footer__brand">
            <SlideLink href="/" className="site-footer__logo">
              MARYNA
            </SlideLink>

            <span>CAKE STUDIO</span>

            <p className="site-footer__tagline">
              Handcrafted cakes for weddings, birthdays, and life's most
              meaningful celebrations.
            </p>

            <SlideLink href="/contact-v1" className="site-footer__order-link">
              Start Your Order →
            </SlideLink>
          </div>

          {/* Navigation */}
          <div className="site-footer__links">
            <SlideLink href="/">Home</SlideLink>
            <SlideLink href="/gallery">Gallery</SlideLink>
            <SlideLink href="/flavors">Flavors</SlideLink>
            <SlideLink href="/about-me">About</SlideLink>
            <SlideLink href="/faq">FAQ</SlideLink>
            <SlideLink href="/contact-v1">Contact</SlideLink>
          </div>

          {/* Social */}
          <div className="site-footer__contact">
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
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Maryna Cake Studio</p>
          <p>Massachusetts • By appointment only</p>
        </div>
      </div>
    </footer>
  );
}
