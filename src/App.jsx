import React from "react";
import Profile from "./components/Profile.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <>
      <div className="bg-gray-300">
        <Navbar transparent />
        <Profile />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
