import Navbar from "./components/Navbar";
import HomeSection from "./sections/HomeSection";
import ProjectsSection from "./sections/ProjectsSection";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar/>
      <HomeSection />
      <ProjectsSection />
      <section id="experience">
        <Experience />
      </section>
      <Footer/>
      
    </>
  );
}

export default App;