import React from "react";
import Profile from "./components/Profile.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <>
      <Navbar transparent />
      <Profile />
      <Skills />
      <Footer />
    </>
  );
}
