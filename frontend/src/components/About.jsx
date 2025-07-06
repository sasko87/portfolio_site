import React from "react";
import Section from "./Section";
import { FaCheck } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <Section id="about">
      <div className="bg-stone-900 w-6/8 rounded-4xl flex flex-col text-neutral-100 p-15  max-lg:w-full pt-0 max-lg:mr-5 max-lg:ml-5 max-md:p-6 max-md:pt-0 ">
        <SectionTitle>About Me</SectionTitle>

        <div className=" mb-7 text-gray-400">
          <h3 className="text-2xl font-bold mb-4 text-neutral-200 max-md:w-fit">
            Full Stack Web Developer with a Passion for Problem Solving
          </h3>
          <p>
            I’m a dedicated and enthusiastic full-stack JavaScript developer
            with a deep interest in creating responsive, user-friendly web
            applications. I have a strong foundation in modern web technologies
            and enjoy building solutions that not only work efficiently but also
            deliver a great user experience.
          </p>
          <br />
          <p>
            I specialize in working with technologies like React, Node.js, and
            MongoDB, and I’m passionate about writing clean, maintainable code.
            I recently completed a comprehensive JavaScript Development Academy
            at Semos Education, where I gained hands-on experience with building
            full-stack applications and learned best practices in both frontend
            and backend development.
          </p>
          <br />
          {/* <p>
            I’ve invested significant time in personal projects to solidify my
            knowledge and explore real-world scenarios. I’m always looking for
            new opportunities to grow, learn from experienced developers, and
            contribute to meaningful projects. My goal is to become part of a
            forward-thinking team where I can apply my skills, continue
            learning, and make a positive impact.
          </p> */}
        </div>
        <div className="flex gap-20 text-xl">
          <div>
            <p className="flex items-center gap-3 mb-6">
              <FaCheck className="text-green-400" /> <span>Problem Solver</span>
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-400" /> <span>Team Player</span>
            </p>
          </div>
          <div>
            <p className="flex items-center gap-3 mb-6">
              <FaCheck className="text-green-400" />
              <span>Fast Learner</span>
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-400" />
              <span>Detail Oriented</span>
            </p>
          </div>
          <div className="max-md:hidden">
            <p className="flex items-center gap-3 mb-6">
              <FaCheck className="text-green-400" />
              <span>Time Management</span>
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-400" />
              <span>Creativity</span>
            </p>
          </div>
          <div className="max-xl:hidden">
            <p className="flex items-center gap-3 mb-6">
              <FaCheck className="text-green-400" />
              <span>Self-Moticated</span>
            </p>
            <p className="flex items-center gap-3">
              <FaCheck className="text-green-400" />
              <span>Adaptive</span>
            </p>
          </div>
        </div>
        {/* <div className="mt-10 self-center">
          <button className="border-1 p-5 pl-10 pr-10 cursor-pointer border-rose-600 text-rose-600 hover:bg-rose-200 duration-500 ease-in-out flex items-center justify-center gap-3">
            <FaDownload /> <span>Download CV</span>
          </button>
        </div> */}
      </div>
    </Section>
  );
};

export default About;
