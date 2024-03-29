import React, { useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Contact from "./components/Contact/Contact";
import ProjectDetails from "./components/Projects/ProjectDetails";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import {en,fr} from "./lang/lang";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,fr
    },
    lng: "fr", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projet/:id" element={<ProjectDetails/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
