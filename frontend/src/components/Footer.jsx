import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-stone-900">
      <div className="flex text-neutral-200">
        <div className="w-1/6 h-fit"></div>
        <div className="flex items-center justify-between w-5/6 p-7">
          <div>
            <p>Building digital experiences that matter</p>
          </div>
          <div>
            <nav>
              <ul className="flex gap-5">
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>About Me</Link>
                </li>
                <li>
                  <Link>My Skills</Link>
                </li>
                <li>
                  <Link>Projects</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex text-neutral-200">
        <div className="w-1/6 h-fit"></div>
        <div className="w-5/6">
          <hr className="mr-5 ml-5" />
          <p className="p-2 pl-7  ">
            Aleksandar's Portfolio. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
