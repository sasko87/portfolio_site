import React, { useState, useEffect } from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState();
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
  return (
    <nav className="text-neutral-200 flex flex-col justify-between h-screen mt-8">
      <div className="flex-1">
        <ul className="flex flex-col items-start justify-center ">
          <li className="mt-1.5 text-lg ">
            <Link
              onClick={(e) => {
                e.preventDefault(), scrollToSection("home");
              }}
              className={
                active === "home" ? "text-rose-600" : " hover:text-rose-200"
              }
            >
              Home
            </Link>
          </li>
          <li className="mt-1.5 text-lg">
            <Link
              onClick={(e) => {
                e.preventDefault(), scrollToSection("about");
              }}
              className={
                active === "about" ? "text-rose-600" : " hover:text-rose-200"
              }
            >
              About Me
            </Link>
          </li>
          <li className="mt-1.5 text-lg ">
            <Link
              onClick={(e) => {
                e.preventDefault(), scrollToSection("skills");
              }}
              className={
                active === "skills" ? "text-rose-600" : " hover:text-rose-200"
              }
            >
              My Skills
            </Link>
          </li>
          <li className="mt-1.5 text-lg">
            <Link
              onClick={(e) => {
                e.preventDefault(), scrollToSection("projects");
              }}
              className={
                active === "projects" ? "text-rose-600" : " hover:text-rose-200"
              }
            >
              Projects
            </Link>
          </li>
          <li className="mt-1.5 text-lg    ">
            <Link
              onClick={(e) => {
                e.preventDefault(), scrollToSection("contact");
              }}
              className={
                active === "contact" ? "text-rose-600" : " hover:text-rose-200"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex space-x-4 border-t-rose-50 border-t-1 pt-5">
        <FaGithub className="text-2xl cursor-pointer" />
        <FaLinkedin className="text-2xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Nav;
