import React from "react";
import Section from "./Section";
import heroImage from "../assets/heroImage.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <Section id="home">
      <div className="w-3/6 flex flex-col pl-15 max-lg:w-2/3 max-lg:mr-10 max-md:w-full max-md:h-screen max-md:justify-center ">
        <div className="mb-10 ">
          <h3 className="text-neutral-200 text-2xl mb-3.5">Hello</h3>
          <h1 className="text-neutral-200 text-[45px] leading-16 font-semibold max-xl:text-3xl max-xl:leading-12">
            i'm ALEKSANDAR STEVKOVSKI <br />A{" "}
            <span className="text-rose-600 relative before:absolute before:inset-0 before:bg-stone-950 before:animate-typewriter">
              Full Stack Web Developer
            </span>
          </h1>
        </div>
        <div className="flex flex-col">
          <p className="text-neutral-200">
            A full-stack JavaScript developer with a passion for building
            scalable web applications. From front-end interfaces to back-end
            systems, I create seamless solutions that deliver outstanding user
            experiences.
          </p>
          <Link
            to="#projects"
            className="text-neutral-200 bg-rose-600 p-4 rounded-2xl cursor-pointer  self-center mt-20 flex items-center justify-center gap-3 text-l flex-1"
            smooth={true}
            duration={500}
          >
            View My Work{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </div>
      <div className="w-2/6 h-screen flex items-center justify-center  relative max-lg:w-1/3 max-md:hidden">
        <div className="w-20 h-20 rounded-full bg-stone-900 absolute bottom-30 left-20 animate-bounce max-xl:left-0 "></div>
        <div className="w-20 h-20 rounded-full bg-stone-900 absolute top-30 right-20 animate-bounce max-xl:right-5 max-xl:top-40"></div>

        <div className="w-79 h-79 rounded-full bg-gradient-to-br from-rose-50 via-rose-300 to-rose-500 blur-xl opacity-20 p-1 animate-pulse flex items-center justify-center absolute max-lg:w-55 max-lg:h-55"></div>
        <img
          src={heroImage}
          alt="code image"
          className=" rounded-full w-70 h-70 animate-none z-10 max-lg:w-55 max-lg:h-55"
        />
      </div>
    </Section>
  );
};

export default Hero;
