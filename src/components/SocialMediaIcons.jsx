import { SiLinkedin, SiGithub } from "react-icons/si";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/alecdmoore"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin className="w-20 mx-auto text-3xl" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/alecdmoore"
        target="_blank"
        rel="noreferrer"
      >
        <SiGithub className="w-20 mx-auto text-3xl" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
