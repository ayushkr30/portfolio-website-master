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
      I am a recent graduate in{" "}
        <span className="font-medium">Computer Science Engineering from the class of 2024</span>,passionate about building innovative software solutions.{" "}
        <span className="font-medium">With a strong foundation in core computer science subjects and hands-on experience in full-stack development, iOS development, and test automation</span>.{" "}
        <span className="font-medium">I thrive on turning ideas into functional, high-quality applications. I have interned at companies like Samsung Research Institute and Sajawat Home, where I developed apps, streamlined workflows</span>
        .I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies and  honed my skills in Swift, Django, and MERN stack. I am eager to contribute to dynamic teams and create impactful products. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">System Design and History</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
