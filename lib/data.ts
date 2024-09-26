import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Kiet Group of Institution(K.I.E.T) (Affilated to AKTU)",
    location: "Ghaziabad, UP",
    description:
      "Completed my Engineering degree in Computer Science Engineering. It includes Coursework such as Data Structure and Algorithms, Operating Systems, DBMS, Computer Networks, Microprocessor, COA, Compiler Design, Cloud Computing.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "SWE Intern At Sajawaat Home  ",
    location: "New Delhi, Delhi",
    description:
      "I worked as a Software Developer for 2 months. I also upskilled to the Full Stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2022 -  Dec 2022",
  },
  {
    title: "Software Engineer Intern At Samsung R&D Institute (SRI-N)",
    location: "Noida, UP",
    description:
      "My Team leader assigned me  to build Admin Dashboard for team project OneAI. My stack includes React, Redux, Auth.js, Passport.js, Prisma and Material UI.",
    icon: React.createElement(FaReact),
    date: " Jan 2024 - Jul 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Buy Me a Coffee",
    description:
      "Developed a full-stack web application allowing users to support content creators through donations.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "NextAuth.js"],
    imageUrl: corpcommentImg,
  },
  {
    title: "PocketPay",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Rick and Morty iOS App",
    description:
      "Developed a universal iOS app leveraging the Rick and Morty API. a Responsive UI App.",
    tags: ["Swift", "SwiftUI", "Xcode", "RickandMorty API"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "C++",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Material UI",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Mongoose",
  "JWT",
  "Zod",
  "WebSockets",
  "OpenAPI Specs",
  "AWS",
  "Express",
  "PostgreSQL",
  "Swift",
  "SwiftUI",
  "Python",
  "Django",
  "Framer Motion",
] as const;
