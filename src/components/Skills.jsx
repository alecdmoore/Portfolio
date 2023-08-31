import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiMaterialui,
  SiAmazonaws,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-14 pb-14 md:pt-48 md:pb-48">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-1/3"
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
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className=" mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className=" mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 md:mt-32 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              {/* <img className="w-20 mx-auto" src={HTML} alt="HTML icon" /> */}
              <SiHtml5 className="w-20 mx-auto text-8xl" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              {/* <img className="w-20 mx-auto" src={CSS} alt="HTML icon" /> */}
              <SiCss3 className="w-20 mx-auto text-8xl" />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              {/* <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" /> */}
              <SiJavascript className="w-20 mx-auto text-8xl" />
              <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <SiReact className="w-20 mx-auto text-8xl" />
              <p className="my-4">REACT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <SiNextdotjs className="w-20 mx-auto text-8xl" />
              <p className="my-4">NEXT.JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <SiGit className="w-20 mx-auto text-8xl" />
              <p className="my-4">GIT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <SiNodedotjs className="w-20 mx-auto text-8xl" />
              <p className="my-4">NODE JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <SiMongodb className="w-20 mx-auto text-8xl" />
              <p className="my-4">MONGO DB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <SiTailwindcss className="w-20 mx-auto text-8xl" />
              <p className="my-4">TAILWIND</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <SiPython className="w-20 mx-auto text-8xl" />
              <p className="my-4">PYTHON</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <SiMaterialui className="w-20 mx-auto text-8xl" />
              <p className="my-4">MATERIAL UI</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <SiAmazonaws className="w-20 mx-auto text-8xl" />
              <p className="my-4">AWS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
