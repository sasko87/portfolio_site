import React from "react";
import Section from "./Section";
import heroImage from "../assets/heroImage.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

const Hero = ({ scrollToSection }) => {
  return (
    <Section
      id="home"
      className={"max-md:flex-col max-md:gap-10 max-xs:gap-5 pb-20 "}
    >
      <div className=" flex flex-1 flex-col pl-10 pr-10 max-md:justify-center max-md:pl-7 max-md:pr-7   ">
        <div className="mb-10 max-md:mt-5 max-md:mb-5 ">
          <h3 className="text-neutral-200 text-2xl max-xs:text-lg">Hello</h3>
          <h1 className="text-neutral-200 text-[45px] leading-16 font-semibold max-xl:text-3xl max-xl:leading-12 max-xs:text-xl max-xs:leading-8">
            I'm ALEKSANDAR STEVKOVSKI <br />
            <span className="text-rose-600 relative before:absolute before:inset-0 before:bg-stone-950 before:animate-typewriter max-lg:text-2xl max-xs:text-xl ">
              Full Stack Web Developer
            </span>
          </h1>
        </div>
        <div className="flex flex-col">
          <p className="text-neutral-200 max-xs:text-sm">
            A full-stack JavaScript developer with a passion for building
            scalable web applications. From front-end interfaces to back-end
            systems, I create seamless solutions that deliver outstanding user
            experiences.
          </p>
          <button
            onClick={(e) => {
              scrollToSection("projects");
            }}
            className="text-neutral-200 bg-rose-600 p-4 rounded-2xl cursor-pointer  self-center mt-20 flex items-center justify-center gap-3 text-l flex-1 max-lg:mt-10 max-xs:mt-7 max-xs:p-2"
          >
            View My Work{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-1 h-screen  items-center justify-center  relative gap-5 max-xs:gap-5 pt-30 pb-30 max-md:pt-0 max-md:pb-0  ">
        <div className="w-20 h-20 rounded-full bg-stone-900  animate-bounce self-start max-xs:w-15 max-xs:h-15 max-xs:mt-6 "></div>

        <div className="w-79 h-79 rounded-full bg-gradient-to-br from-rose-50 via-rose-300 to-rose-500 blur-xl opacity-20 p-1 animate-pulse flex items-center justify-center absolute max-lg:w-48 max-lg:h-48 max-xl:w-55 max-xl:h-55 max-xs:w-32 max-xs:h-32"></div>
        <img
          src={heroImage}
          loading="lazy"
          alt="code image"
          className=" rounded-full w-70 h-70 animate-none z-10 max-xl:w-50 max-xl:h-50 max-lg:w-45 max-lg:h-45 max-md:w-45 max-md:h-45 max-xs:w-33 max-xs:h-33 cursor-pointer"
          onClick={(e) => {
            e.preventDefault(), scrollToSection("contact");
          }}
        />
        <div className="w-20 h-20 rounded-full bg-stone-900 animate-bounce max-xs:w-15 max-xs:h-15  self-end max-xs:mb-10"></div>
      </div>
    </Section>
  );
};

export default Hero;
