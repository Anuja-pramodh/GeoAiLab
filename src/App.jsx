import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/animations/ScrollToTop";

import PageBackground from "./components/PageBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Capabilities from "./sections/capabilities";
import Gallery from "./sections/Gallery";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import Intro from "./sections/Intro";
import Portfolio from "./sections/Portfolio";
import LatesNews from "./sections/LatestNews";
import AllStaff from "./sections/StaffData/AllStaff";
import Projects from "./sections/Project/Projects";

// Main Landing Page Layout
function Home() {
  return (
    <>
      <Hero />
      <LatesNews />
      <About />
      <Intro />
      <Projects />
      <Services />
      <Capabilities />
      <Portfolio />
      <Gallery />
      <Team />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="app" style={{ scrollBehavior: "smooth" }}>
      <ScrollToTop /> {/* <-- Routes වලට උඩින් මෙය යොදන්න */}
      <PageBackground />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<AllStaff />} />
        <Route path="/team" element={<Team />} />
      </Routes>

      <Footer />
    </div>
  );
}