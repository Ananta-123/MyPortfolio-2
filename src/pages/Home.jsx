import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main>
        {/* Hero / Home */}
        <Hero />

        {/* About Me */}
        <About />

        {/* Technical Skills */}
        <Skills />

        {/* Professional Experience */}
        <Experience />

        {/* Selected Projects */}
        <Projects />

        {/* Education */}
        <Education />

        {/* Contact */}
        <Contact />
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </div>
  );
};

export default Home;