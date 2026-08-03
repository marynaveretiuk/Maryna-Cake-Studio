import Nav from "./component/Nav";
import MobileNav from "./component/MobileNav";
import HeaderCart from "./component/HeaderCart";
import SlideLink from "@/components/common/SlideLink";

// Site header
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header-container">
              {/* Logo */}
              <div className="logo">
                <h2>
                  <SlideLink href="/">MARYNA</SlideLink>
                </h2>
                <span>CAKE STUDIO</span>
              </div>

              <div className="header-inner-box">
                {/* Navigation */}
                <nav>
                  <div className="menu-container">
                    <ul>
                      <Nav />
                    </ul>
                  </div>
                </nav>

                {/* Cart */}
                <HeaderCart />

                {/* Mobile menu */}
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
