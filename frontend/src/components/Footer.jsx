import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-stone-900">
      <div className="flex text-neutral-200">
        <div className="w-1/6 h-fit max-lg:hidden"></div>
        <div className="flex items-center justify-between w-5/6 p-7 max-lg:w-6/6">
          <div>
            <p>Building digital experiences that matter</p>
          </div>
          <div className="max-sm:hidden">
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
        <div className="w-1/6 h-fit max-lg:hidden"></div>
        <div className="w-5/6 max-lg:w-11/12">
          <hr className="mr-10 ml-7 max-lg:w-full" />
          <p className="p-2 pl-7  ">
            Aleksandar's Portfolio. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
