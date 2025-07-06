import React, { useState, useEffect } from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = ({ onClick, scrollToSection, active }) => {
  return (
    <nav className="text-neutral-200 flex flex-col justify-between h-screen mt-8">
      <div className="flex-1">
        <ul className="flex flex-col items-start justify-center gap-4 text-xl ">
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault(), scrollToSection("home");
                if (onClick) onClick();
              }}
              className={
                active === "home" ? "text-rose-600" : " hover:text-rose-200"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault(), scrollToSection("about");
                if (onClick) onClick();
              }}
              className={
                active === "about" ? "text-rose-600" : " hover:text-rose-200"
              }
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault(), scrollToSection("skills");
                if (onClick) onClick();
              }}
              className={
                active === "skills" ? "text-rose-600" : " hover:text-rose-200"
              }
            >
              My Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault(), scrollToSection("projects");
                if (onClick) onClick();
              }}
              className={
                active === "projects" ? "text-rose-600" : " hover:text-rose-200"
              }
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                e.preventDefault(), scrollToSection("contact");
                if (onClick) onClick();
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
