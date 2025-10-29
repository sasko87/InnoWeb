import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Background from "../Background/Background3";
import Loader from "./components/Loader/Loader";
import CookieBanner from "./components/CookiesBanner/CookiesBanner";

// Lazy load pages to reduce main bundle size
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage/ErrorPage"));
const Cookies = React.lazy(() => import("./pages/Cookies/Cookies"));

function App() {
  

  return (
    <Router>
      <Background />
      <ScrollToTop />

      <div>
        <Header />
        <CookieBanner />

        {/* Suspense wraps the routes for lazy loading */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
