import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/HomePage/HomePage";
import ChatAI from "./components/ChatAI/ChatAI";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="main-background">
        <Header />
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> */}
      </div>
    </Router>
  );
}
export default App;
