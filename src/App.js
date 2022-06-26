import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  // const [currentView, setCurrentView] = useState("about");

  const [navLinks] = useState(["About", "Portfolio", "Contact", "Resume"]);

  const [selectedNav, setSelectedNav] = useState(navLinks[0]);

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <Header navLinks={navLinks} selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      <main className="my-3 container">{selectedNav === "Portfolio" ? <Project /> : selectedNav === "Contact" ? <ContactForm /> : selectedNav === "Resume" ? <Resume /> : <About />}</main>
      <Footer />
    </div>
  );
}

export default App;
