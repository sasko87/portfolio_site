import chatAppImg from "./assets/chatHub.png";
import mentorTokenImg from "./assets/mentorToken.png";
import wvpImg from "./assets/wvp.png";
import portfolioImg from "./assets/portfolio-website.png";
export const projects = [
  {
    image: portfolioImg,
    name: "Portfolio website",
    dev: "Frontend",
    description: "A responsive portfolio website ",
    tech: ["React", "Tailwind", "Node.js"],
    link: "https://stevkovski.xyz",
    github: "https://github.com/sasko87/portfolio-website",
  },
  {
    image: mentorTokenImg,
    name: "Mentor Token",
    dev: "Full Stack",
    description:
      "Web application that allows companies to post job openings, while job seekers can apply and track the status of their applications directly within the platform.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://mentor-token.stevkovski.xyz",
    github: "https://github.com/sasko87/project_mentor_token",
  },
  {
    image: chatAppImg,
    name: "Chat App",
    dev: "Full Stack",
    description:
      "A responsive web application that allows you to connect with friends, family, or colleagues through real-time messaging in a sleek and secure environment",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://chat.stevkovski.xyz",
    github: "https://github.com/sasko87/Chat_App",
  },
  {
    image: wvpImg,
    name: "WVP website",
    dev: "Frontend",
    description:
      "A responsive website designed and developed for WVP Insurance Broker to showcase their services and streamline access to insurance information.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://wvp.mk",
    github: "https://github.com/sasko87/WVP-insurance-website",
  },
];
