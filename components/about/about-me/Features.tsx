import Image from "next/image";
import Skillbar from "@/components/about/about-me/Skillbar";

// About Me page - features / services grid.
export default function Features() {
  return (
    <section className="me-section space">
      <div className="container">
        <div className="row gy-5">
          <div className="col-md-6">
            <p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p>
            <p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
            <div className="mt-4">
              <Image
                src="/assets/img/about/signature.jpg"
                alt="John Smith signature"
                width={70}
                height={39}
                className="mb-1"
              />
              <p className="mb-0"><em>John Smith</em></p>
              <p className="mb-0"><em>01.01.2026</em></p>
            </div>
          </div>
          <div className="col-md-6 ps-md-4">
            <Skillbar />
          </div>
        </div>
      </div>
    </section>
  );
}
