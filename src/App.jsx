import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./pages/About/About";
import Services from "./pages/Services/OurServices";
import Projects from "./pages/Projects/Projects";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div className="main-background">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
