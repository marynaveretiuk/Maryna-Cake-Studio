import Nav from "./component/Nav";
import MobileNav from "./component/MobileNav";
import HeaderCart from "./component/HeaderCart";
import SlideLink from "@/components/common/SlideLink";

// Site header - logo, nav, and cart dropdown.
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header-container">
              {/* Logo Area */}
              <div className="logo">
                <h3>
                  <SlideLink href="/">GLACIER</SlideLink>
                </h3>
              </div>

              <div className="header-inner-box">
                {/* Main Menu Area */}
                <nav>
                  <div className="menu-container">
                    <ul>
                      <Nav />
                    </ul>
                  </div>
                </nav>

                {/* Shop Cart Area */}
                <HeaderCart />

                {/* Mobile Menu Area */}
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
