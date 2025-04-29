import React from "react";
import Section from "./Section";
import Card from "./Card";
import { FaLaptopCode } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { frontend, backend, otherSkills } from "../Skills";
import { GiSkills } from "react-icons/gi";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <div className="flex items-center justify-center flex-wrap ml-10 mr-10 max-md:ml-5 max-md:mr-5">
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
        <Card
          horizontal
          title={"Other skills and tools"}
          titleIcon={<GiSkills />}
          image={otherSkills}
        />
      </Container>
    </Section>
  );
};

export default Skills;
