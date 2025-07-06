import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ data }) => {
  return (
    <div className="relative group w-full max-w-xl mx-auto flex items-center justify-center">
      {/* Glowing hover layer */}
      <div className="w-[108%] h-[108%] bg-amber-50 rounded-4xl absolute bg-gradient-to-br from-rose-100 to-rose-600 blur-sm hidden group-hover:block group-hover:duration-50000 z-0 animate-pulse"></div>

      <div className="bg-stone-900  min-w-[235px] flex flex-1 flex-col rounded-4xl relative z-10 hover:scale-105 duration-500 ">
        <div className="h-1/2 w-full">
          <img
            src={data.image}
            alt={data.name}
            loading="lazy"
            className="rounded-tl-4xl rounded-tr-4xl h-48 w-full object-cover"
          />
        </div>
        <div className="p-5 text-neutral-200 flex flex-col h-2/3 justify-between">
          <div className="flex items-center justify-between">
            <h4 className="text-xl">{data.name}</h4>
            <p className="bg-rose-200 text-rose-600 px-2 py-0.5 rounded-sm text-xs">
              {data.dev}
            </p>
          </div>

          <div className="flex flex-col mt-4">
            <p className="text-sm mb-4 h-28 max-lg:h-auto">
              {data.description}
            </p>
            <div className="flex gap-3 flex-wrap h-12 max-lg:h-auto">
              {data.tech.map((tech, index) => (
                <p
                  key={index}
                  className="bg-stone-700 px-2 py-0.5 rounded-sm text-xs h-fit cursor-default"
                >
                  {tech}
                </p>
              ))}
            </div>

            <div className="flex gap-6 mt-5 ">
              <p className="flex gap-2 items-center hover:text-rose-600 transition duration-300 ease-in-out">
                <FaExternalLinkAlt className="" />
                <span className="text-sm">
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </span>
              </p>
              <p className="flex gap-2 items-center hover:text-rose-600 transition duration-300 ease-in-out">
                <FaGithub />
                <span className="text-sm">
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
