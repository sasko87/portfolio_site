import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";

const Section = ({ children, id }) => {
  return (
    <section
      className="flex min-h-fit w-screen bg-stone-950 items-center justify-center"
      id={id}
    >
      <div className="w-1/6 h-screen max-lg:hidden"></div>
      {children}
      <Link
        to="#home"
        className="fixed right-5 bottom-5 flex flex-col items-center cursor-pointer"
        smooth={true}
        duration={500}
      >
        <FaCircleArrowUp className="bg-rose-50 text-4xl" />
        <p className="text-neutral-200 text-xs mt-1 rounded-full">
          Scroll to top
        </p>
      </Link>
    </section>
  );
};

export default Section;
