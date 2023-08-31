import React from "react";
import LineGradient from "./LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="about" className="pt-10 pb-24 md:items-center">
      <div className="md:flex md:justify-start md:gap-16 mt-32">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-blue">ABOUT ME</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-lg md:text-xl xl:text-3xl">
            I am a full stack web developer with a Bachelor of Science degree in
            Computer Science from San Jose State University. Specializing in the
            MERN stack (MongoDB, Express.js, React, Node.js), I create dynamic
            and scalable web applications. With a passion for problem-solving
            and staying up to date with the latest trends, I design intuitive
            user interfaces with React and build robust back-end systems with
            Node.js. I thrive in collaborative environments and welcome
            discussions about potential collaborations or projects.
          </p>
          <p className="md:text-lg xl:text-2xl">
            <span className="font-bold">Relevant Courses:</span> Data Structures
            & Algorithms, Object Oriented Design, Operating Systems, Computer
            Architecture, Programming Paradigms, Software Engineering,
            Information Security, Computer Networks, Blockchain &
            Cryptocurrencies, Intro to Machine Learning, Advance C++
            Programming, Server-side Web Programming{" "}
          </p>
        </motion.div>
        <div className="flex pt-10 md:pt-0 md:w-1/2 justify-center  ">
          <img
            src={require("../assets/sjsu.jpg")}
            className="z-10 md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px] self-center xl:self-end"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
