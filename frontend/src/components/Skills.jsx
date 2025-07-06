import React from "react";
import Section from "./Section";
import Card from "./Card";
import { FaLaptopCode } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { frontend, backend, otherSkills } from "../Skills";
import { GiSkills } from "react-icons/gi";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import ScreenSize from "../hooks/ScreenSize";

const Skills = () => {
  const width = ScreenSize();
  return (
    <Section id="skills">
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <div className="flex items-center justify-center flex-wrap gap-4 max-xl:flex-col max-xl:mb-4">
          <Card
            title="Frontend Development"
            titleIcon={<FaLaptopCode />}
            image={frontend}
          />
          <Card
            title="Backend Development"
            titleIcon={<CiServer />}
            image={backend}
          />
        </div>
        <div className="animate-fadeShow">
          <Card
            horizontal={width > 1181 ? true : false}
            title={"Other skills and tools"}
            titleIcon={<GiSkills />}
            image={otherSkills}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Skills;
