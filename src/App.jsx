import React from "react";
import Profile from "./components/Profile.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MenuLink from "./components/BackToMenu.jsx";

export default function App() {
  return (
    <>
      {/* <div className="bg-gray-400"> */}
      {/* <div className="bg-neutral-400"> */}
      <div className="bg-neutral-200">
        <Navbar transparent />
        <Profile />
        <Skills />
        <Projects />
        <MenuLink />
        <Footer />
      </div>
    </>
  );
}
