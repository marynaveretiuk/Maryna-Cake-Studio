import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "404 – Page Not Found | Maryna Cake Studio",
};

export default function ErrorPage() {
  return (
    <>
      <Header />
      <section className="not-found-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <div className="error-page" data-error="404">
                <h1 className="title-section-small">Page not found.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
