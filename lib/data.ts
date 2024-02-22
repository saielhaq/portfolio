import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import sologementImg from "@/public/sologement.png";
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
      "I developed a Leave Management System over six months, showcasing my expertise in front-end development.",
    icon: React.createElement(CgWorkAlt),
    date: "03/2023 - 03/2023",
  },
  {
    title: "Internship",
    location: "IBM",
    description:
      "I collaborated with a team to design and develop a  security tools website, highlighting my teamwork and web development skills.",
    icon: React.createElement(CgWorkAlt),
    date: "08/2023 - 08/2023",
  },
] as const;

export const projectsData = [
  {
    title: "Sologement",
    description: "I developed a Clone of Airbnb.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: sologementImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Php",
  "MySQL",
  "Python",
  "VB.Net",
] as const;
