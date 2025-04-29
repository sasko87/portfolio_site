import React from "react";
import Section from "./Section";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../Projects";

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        <div className="flex flex-wrap flex-1 items-center justify-center mt-7">
          {projects.map((project) => (
            <ProjectCard data={project} />
          ))}
        </div>
        <div className="self-center mt-auto mb-auto">
          <button className="text-rose-600 p-5 pl-7 pr-7 border-rose-600 border-2 self-center cursor-pointer hover:bg-rose-200">
            View All Projects
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
