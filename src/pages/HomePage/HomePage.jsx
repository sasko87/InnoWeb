import React from "react";
import Hero from "../../components/Hero/Hero";
import Projects from "../Projects/Projects";
import OurServices from "../Services/OurServices";
import About from "../About/About";
import Pricing from "../Pricing/Pricing";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <OurServices />
      <Projects />
      <About />
      <Pricing />
    </div>
  );
};

export default HomePage;
