import Hero from "../components/Hero";
import TechMarquee from "../components/TechMarquee";

function HomeSection() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="skills">
        <TechMarquee />
      </section>
    </>

  );
}

export default HomeSection;