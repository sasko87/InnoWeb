import React from "react";
import Hero from "../../components/Hero/Hero";
import Projects from "../Projects/Projects";
import OurServices from "../Services/OurServices";
import About from "../About/About";
import Pricing from "../Pricing/Pricing";

const HomePage = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
    </div>
  );
};

export default HomePage;
