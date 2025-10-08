import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Contact from "./pages/Contact/Contact";
import HomePage from "./pages/HomePage/HomePage";
// import ChatAI from "./components/ChatAI/ChatAI";
import Background from "../Background/Background3";
import Loader from "./components/Loader/Loader";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Cookies from "./pages/Cookies/Cookies";
import CookieBanner from "./components/CookiesBanner/CookiesBanner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading (replace with your API calls / setup logic)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Router>
        <Background />
        <ScrollToTop />

        <div>
          <Header />
          <CookieBanner />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/cookies" element={<Cookies />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}
export default App;
