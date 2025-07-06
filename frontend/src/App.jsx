import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import ScreenSize from "./hooks/ScreenSize";
import { useState, useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // or your Section component
    const options = {
      threshold: 0.6, // 60% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          setActive(id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const width = ScreenSize();
  return (
    <>
      <Header
        className={
          width >= 1024 ? "hidden" : menuOpen ? "sticky top-0 z-50" : ""
        }
        onClick={toggleMenu}
        activeMenu={menuOpen}
      />
      <Sidebar
        onClick={toggleMenu}
        scrollToSection={scrollToSection}
        active={active}
        className={`${
          width < 1024
            ? menuOpen
              ? " w-full translate-x-0 z-50"
              : "-translate-x-500"
            : ""
        }`}
      />
      <Hero scrollToSection={scrollToSection} activeSection={active} />
      <About activeSection={active} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
