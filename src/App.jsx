import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import LeadershipAwards from "./components/LeadershipAwards.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home" className="section section--hero">
          <Hero />
        </section>

        <section id="about" className="section section--compact">
          <About />
        </section>

        <section id="skills" className="section section--alt section--compact">
          <Skills />
        </section>

        <section id="experience" className="section section--compact">
          <Experience />
        </section>

        <section id="projects" className="section section--alt">
          <Projects />
        </section>

        <section id="leadership" className="section section--compact">
          <LeadershipAwards />
        </section>

        <section id="contact" className="section section--compact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
