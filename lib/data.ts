import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import sologementImg from "@/public/sologement.png";
import tms from "@/public/ttms.png";
import valsens from "@/public/valsens.png";
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
    title: "Internship",
    location: "Interpress",
    description:
      "I developed a Leave Management System over six months, showcasing my in front-end skills and building my back-end ones.",
    icon: React.createElement(CgWorkAlt),
    date: "03/2023 - 03/2023",
  },
  {
    title: "Internship",
    location: "IBM",
    description:
      "I collaborated with a team to design and develop a security tools website, highlighting my teamwork and front-end development skills.",
    icon: React.createElement(CgWorkAlt),
    date: "08/2023 - 08/2023",
  },
  {
    title: "Internship",
    location: "Abderrahmane Ibn Ghazala",
    description:
      "I created a tool that manages students end of studies' internships.",
    icon: React.createElement(CgWorkAlt),
    date: "06/2024 - 06/2024",
  },
] as const;

export const projectsData = [
  {
    title: "TMS",
    description: "I developed Task Management System",
    tags: ["PHP", "JQuery", "MySQL", "Graph.js", "Bootstrap"],
    imageUrl: tms,
  },
  {
    title: "Sensitivity finder for Valorant",
    description: "I made a tool to help players find their perfect sensitivity",
    tags: ["VueJs"],
    imageUrl: valsens,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "VueJs",
  "Java",
  "Git",
  "PHP",
  "MySQL",
  "Python",
  "VB.Net",
] as const;
