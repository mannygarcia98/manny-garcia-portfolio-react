import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <Header />
      <main className="my-3">
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
