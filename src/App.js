import React from "react";
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Header >
      <Navbar />
      </Header>
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}