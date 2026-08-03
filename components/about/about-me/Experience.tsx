import Counter from "@/components/about/about-me/Counter";

// About Me page - experience band (renders the stat counter).
export default function Experience() {
  return (
    <section className="experience-section space pb-0">
      <div className="container">
        <Counter />
      </div>
    </section>
  );
}
