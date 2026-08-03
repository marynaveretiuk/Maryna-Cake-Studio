import FooterLinks from "./component/FooterLinks";

// Site footer - shown on every page.
export default function Footer() {
  return (
    <footer>
      <div className="sticky-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="social-links">
                <ul>
                  <FooterLinks />
                </ul>
              </div>
              <div className="copyright">
                Glacier © {new Date().getFullYear()}. Crafted by&nbsp;
                <a
                  href="https://themeforest.net/user/Mountain-Themes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="btn-reveal">
                    <span>Mountain-Themes.</span>
                    <span className="reveal">Mountain-Themes.</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
