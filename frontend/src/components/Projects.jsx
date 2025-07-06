import React, { useState } from "react";
import Section from "./Section";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../Projects";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const hasMoreToShow = projects.length > 3;

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <Section id="projects">
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mx-auto mt-7">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id || project.name} data={project} />
          ))}
        </div>

        <div className="self-center mt-10 mb-15 text-center">
          {hasMoreToShow ? (
            <button
              onClick={handleToggle}
              className="text-rose-600 p-5 px-7 border-rose-600 border-2 cursor-pointer hover:bg-rose-200 "
            >
              {showAll ? "Show Less" : "View All Projects"}
            </button>
          ) : null}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
