import LineGradient from "../components/LineGradient";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import youtiktubetok from "../assets/youtiktubetok.jpg";
import solar from "../assets/Solar-system-builder.jpeg";
import portfolio from "../assets/portfolio-screenshot-2.jpg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Tech = ({ name }) => {
  return (
    <p className="bg-slate-500 shadow-md shadow-black rounded-sm p-2 text-lg">
      {name}
    </p>
  );
};

//portfolio/src/assets/portfolio-screenshot.jpg
const PortfolioCard = ({ title }) => {
  return (
    <motion.div>
      <div className="flex flex-col xl:flex-row bg-slate-600 shadow-lg rounded-lg">
        <div className="p-2 mx-auto">
          <img
            className="rounded-lg xl:max-w-[1000px] md:min-w-[400px]"
            src={portfolio}
            alt={"project-1"}
          />
        </div>
        <div className="flex flex-col text-center justify-evenly grow p-2">
          <div className="flex justify-center">
            <h3 className="text-4xl font-bold">Portfolio Website</h3>
          </div>
          <div className="pt-2">
            <p className="text-xl ">
              This modern, responsive portfolio website is a sleek single page
              React application, hosted on an AWS S3 bucket, styled with
              Tailwind CSS. Users can navigate between sections with smooth
              animations and interactions, powered by React's virtual DOM, and
              contact the developer via an integrated form messaging API.
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-2 pt-6">
            <Tech name="React.js" />
            <Tech name="TailwindCSS" />
            <Tech name="HTML" />
            <Tech name="AWS" />
          </div>
          <div className="flex flex-row justify-center space-x-8 py-4 pt-6 pb-2">
            <a href="http://github.com">
              <div className="flex items-center space-x-1">
                <p className="text-2xl">Code</p>
                <SiGithub size={25} />
              </div>
            </a>
            <a href="http://alecdmoore.com">
              <div className="flex items-center space-x-1">
                <p className="text-2xl">Live</p>
                <FiExternalLink size={25} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const YTTTCard = ({ title }) => {
  return (
    <motion.div>
      <div className="flex flex-col xl:flex-row  justify-start bg-slate-600 shadow-lg rounded-lg">
        <div className="p-2">
          <img
            className="rounded-lg xl:max-w-[1000px] min-w-[250px]"
            src={youtiktubetok}
            alt={"project-2"}
          />
        </div>
        <div className="flex flex-col text-center justify-evenly p-2">
          <div>
            <h3 className="text-4xl font-bold">YouTikTubeTok</h3>
          </div>
          <div className="pt-2">
            <p className="text-xl">
              This full-stack social media web application enables users to
              create multimedia collections of text, images, and embedded
              YouTube and TikTok videos using React, Node.js, Express, and
              MongoDB while hosted on AWS. The app implements Redux for state
              management and Material UI for reusable React components to
              optimize the user experience.
            </p>
          </div>
          <div className="flex flex-row flex-wrap  justify-center gap-2 pt-6">
            <Tech name="React.js" />
            <Tech name="Node.js" />

            <Tech name="Express.js" />
            <Tech name="Mongodb" />
            <Tech name="Redux" />
            <Tech name="AWS" />
            <Tech name="MUI" />
          </div>
          <div className="flex flex-row  justify-center space-x-8 pt-6 pb-2 ">
            <a href="https://github.com/alecdmoore/Youtiktubetok">
              <div className="flex items-center space-x-1">
                <p className="text-2xl">Code</p>
                <SiGithub size={25} />
              </div>
            </a>
            <a href="http://youtiktubetok.com">
              <div className="flex items-center space-x-1">
                <p className="text-2xl">Live</p>
                <FiExternalLink size={25} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

///Users/alecmoore/portfolio-real/portfolio/src/assets/Youtiktubetok.jpg
///Users/alecmoore/portfolio-real/portfolio/src/assets/Solar-system-builder.jpg
const SolarCard = ({ title }) => {
  return (
    <motion.div>
      <div className="flex flex-col xl:flex-row justify-start bg-slate-600 shadow-lg rounded-lg">
        <div className="p-2">
          <img
            className="rounded-lg xl:max-w-[1000px]"
            src={solar}
            alt={"project-2"}
          />
        </div>
        <div className="flex flex-col text-center justify-evenly p-2">
          <div>
            <h3 className="text-4xl font-bold">Solar System Builder</h3>
          </div>
          <div className="pt-2">
            <p className="text-xl">
              This interactive web application allows users to design solar
              array systems by leveraging Google Maps for satellite imagery and
              NREL's API for location-based solar data to estimate potential
              power output. Users can customize array parameters to view
              projected energy generation results on an interactive map
              interface built with HTML, CSS, and JavaScript.
            </p>
          </div>
          <div className="flex flex-row flex-wrap  justify-center gap-2 pt-6">
            <Tech name="JavaScript" />
            <Tech name="HTML" />

            <Tech name="CSS" />
          </div>
          <div className="flex flex-row  justify-center space-x-8 pt-6 pb-2">
            <a href="https://github.com/alecdmoore/solar-system-builder">
              <div className="flex items-center space-x-1">
                <p className="text-2xl">Code</p>
                <SiGithub size={25} />
              </div>
            </a>
            <a href="https://alecdmoore.github.io/solar-system-builder/">
              <div className="flex items-center space-x-1">
                <p className="text-2xl">Live</p>
                <FiExternalLink size={25} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-14 pb-14 md:pt-48 md:pb-48">
      {/* HEADINGS */}
      <motion.div
        className="mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="w-full flex justify-center">
        <motion.div
          // className="sm:grid sm:grid-cols-3 sm:gap-2"
          className="flex flex-col"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col justify-between gap-6">
            <br />
            <YTTTCard />
            <PortfolioCard />
            <SolarCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
