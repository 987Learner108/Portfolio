import { useEffect, useState } from "react";
import NavigationCard from "../components/NavigationCard";
import ME from "../assets/dinesh.jpg";
import Aboutme from "../assets/navLinkImg/about me.avif";
import ContactMe from "../assets/navLinkImg/contact me.webp";
import projImg from "../assets/navLinkImg/projects.png";
const skills: string[] = [
  "React",
  "MERN",
  "Git & Github",
  "Postman",
  "Docker",
  "LangChain",
  "Prompt Engineering",
  "ML & DL & LLM",
];
export type navObjType = {
  link: string;
  img: string;
  name: string;
};
const navlist: navObjType[] = [
  {
    link: "/contact",
    img: ContactMe,
    name: "Contect Me",
  },
  {
    link: "/about",
    img: Aboutme,
    name: "About Me",
  },
  {
    link: "/project",
    img: projImg,
    name: "Projects",
  },
];
const HomePage = () => {
  const [skillIndex, setSkillIndex] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);
  useEffect(() => {
    const currentSkill = skills[skillIndex];
    const timeout = setTimeout(() => {
      setText(currentSkill.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex === currentSkill.length) {
        setTimeout(() => {
          setCharIndex(0);
          setSkillIndex((prev) => (prev + 1) % skills.length);
          setText("");
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, skillIndex]);

  return (
    <section className="min-h-[calc(100vh-135px)] flex flex-col">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-50 p-3 justify-center items-center">
        <p className="font-serif md:w-1/2 text-md bg-blue-50 p-3 rounded-md text-justify shadow-md">
          Hi, I'm <b>Dinesh Gupta</b> <br />
          <br />I have experience in <b className="underline">{text}</b>
          <br /> React & TypeScript Frontend Developer with handson experience
          in Nest JS and Express JS
          <br />
          <br />I create responsive and scalable web applications with clean UI
          and modern development practices.
        </p>
        <div className=" p-1 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500">
          <img
            src={ME}
            alt="MyPic"
            loading="lazy"
            className="rounded-full h-72 w-72 object-cover "
          />
        </div>
      </div>
      <div className="mt-auto flex justify-center  bg-amber-50">
        <ul className="flex flex-col md:flex-row gap-5 w-2/3  py-5 justify-between items-center">
          {navlist.map((curr, index) => (
            <NavigationCard key={index} currNav={curr} />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default HomePage;
