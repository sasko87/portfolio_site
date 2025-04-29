import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {
  return (
    <>
      <div className="relative group w-1/4 m-5 flex items-center justify-center ">
        {/* Glowing hover layer */}
        <div className="w-[380px] h-[495px] max-lg:w-[250px]  bg-amber-50 max-xl:w-[265px] max-xl:h-[550px] max-2xl:w-[310px] rounded-4xl absolute bg-gradient-to-br from-rose-100 to-rose-600 blur-sm  hidden group-hover:block group-hover:duration-500 z-0 "></div>

        <div className="bg-stone-900 max-w-[370px] min-w-[235px] flex flex-1 flex-col rounded-4xl relative z-10 hover:scale-105 duration-500">
          <div className="h-1/2 w-full">
            <img
              src={data.image}
              alt=""
              className="rounded-tl-4xl rounded-tr-4xl h-48 w-full"
            />
          </div>
          <div className="p-5 text-neutral-200  flex flex-col h-2/3 justify-between">
            <div className="flex items-center justify-between">
              <h4 className=" text-xl">{data.name}</h4>
              <p className="bg-rose-200 text-rose-600 p-0.5 pl-2 pr-2 rounded-sm text-xs">
                {data.dev}
              </p>
            </div>
            <div className="flex flex-col ">
              <div className="mt-4  h-35">
                <p className="text-sm">{data.description}</p>
              </div>
              <div className="flex gap-3 mt-5 h-10 flex-wrap">
                {data.tech.map((tech) => (
                  <p className="bg-stone-700 p-0.5 pr-2 pl-2 rounded-sm text-xs h-fit">
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex gap-6 mt-5 ">
                <p className="flex gap-2 items-center ">
                  <FaExternalLinkAlt />
                  <span className="text-sm">
                    <a href={data.link} target="_blank">
                      Live Demo
                    </a>
                  </span>
                </p>
                <p className="flex gap-2 items-center">
                  <FaGithub />{" "}
                  <span className="text-sm">
                    <a href={data.github} target="_blank">
                      GitHub
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
