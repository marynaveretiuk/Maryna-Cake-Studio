import Skillbar from "@/components/about/about-us/Skillbar";

// About Us page - features / services grid.
export default function Features() {
  return (
    <section className="who-section space">
      <div className="container">
        <h2 className="title-section">WHO WE ARE ?</h2>
        <div className="row gy-4">
          <div className="col-md-6">
            <p>Created, likeness bring which in stars herb a is give you’ll it life you’ll. Whose evening. Spirit subdue two don’t. Living, i divided was be every had. Him god. Don’t kind seed lesser heaven bearing waters seas in of earth female lights. Morning fruit may. May gathering moving fruit all them spirit dry place there appear they’re together.</p>
            <p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
          </div>
          <div className="col-md-6 ps-md-4">
            <Skillbar />
          </div>
        </div>
      </div>
    </section>
  );
}
