"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      While studying for an{" "}
        <span className="font-medium">advanced technician</span> degree, I realized my passion for programming had always been a driving force. 
        I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">I pursued my interest through online platforms, specializing in</span> 
        <span className="underline"> automation and web development</span>.{" "}
         Solving complex problems in programming has always been my forte,
         and I thrive on the satisfaction of finding solutions.{" "}
      </p>


          
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, cooking, and training. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning {" "}
        <span className="font-medium">Portuguese language</span>. 
      </p>
    </motion.section>
  );
}
