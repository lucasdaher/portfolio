import { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaLink } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";
import { LuFigma } from "react-icons/lu";

interface SkillsProps {
  isDark?: boolean;
}

const Skills = ({ isDark }: SkillsProps) => {
  const [skills, setSkills] = useState([
    {
      id: 1,
      title: "React",
      desc: "Possuo experiência em desenvolvimento de sites responsivos utilizando React com JavaScript e TypeScript.",
      icon: (
        <FaReact className="text-white text-7xl font-bold bg-normal rounded-md p-2" />
      ),
    },
    {
      id: 2,
      title: "HTML",
      desc: "Possuo experiência e conhecimento avançado em criação de sites com HTML.",
      icon: (
        <FaHtml5 className="text-white text-7xl font-bold bg-normal rounded-md p-2" />
      ),
    },
    {
      id: 3,
      title: "CSS",
      desc: "Possuo conhecimento avançado em criação de sites com CSS ou Frameworks CSS.",
      icon: (
        <FaCss3Alt className="text-white text-7xl font-bold bg-normal rounded-md p-2" />
      ),
    },
    {
      id: 4,
      title: "JavaScript",
      desc: "Possuo conhecimento intermediário em desenvolvimento com JavaScript.",
      icon: (
        <IoLogoJavascript className="text-white text-7xl font-bold bg-normal rounded-md p-2" />
      ),
    },
    {
      id: 5,
      title: "TypeScript",
      desc: "Tenho capacidade de desenvolver projetos utilizando TypeScript caso seja necessário.",
      icon: (
        <SiTypescript className="text-white text-7xl font-bold bg-normal rounded-md p-2" />
      ),
    },
    {
      id: 6,
      title: "TailwindCSS",
      desc: "Possuo experiência e conhecimento avançado em Tailwind CSS.",
      icon: (
        <SiTailwindcss className="text-white text-7xl font-bold bg-normal rounded-md p-2" />
      ),
    },
    {
      id: 7,
      title: "Figma",
      desc: "Possuo conhecimento avançado da criação de interfaces e na utilização do Figma",
      icon: (
        <LuFigma className="text-white text-7xl font-bold bg-normal rounded-md p-2" />
      ),
    },
    {
      id: 8,
      title: "VSCode",
      desc: "Utilizo o Visual Studio Code para desenvolver meus projetos de forma profissional.",
      icon: (
        <SiVisualstudiocode className="text-white text-7xl font-bold bg-normal rounded-md p-2" />
      ),
    },
  ]);
  return (
    <section className="mt-36">
      <div
        className="max-w-[1440px] mx-auto grid justify-center items-center gap-x-4 gap-y-9 
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          className={`card flex flex-col justify-start items-start gap-4 bg-normal text-white 
          rounded-md w-full max-w-[352px] h-full min-h-[308px] px-8 py-12 transition-all duration-300`}
        >
          <h1 className="text-2xl font-bold">Minhas Habilidades</h1>
          <p className="text-md font-medium text-left">
            Aqui você irá conhecer um pouco mais sobre minhas habilidades e
            ferramentas que utilizo durante o desenvolvimento.
          </p>
          <button
            className="flex justify-center items-center gap-1 bg-white hover:bg-light-hover hover:text-light-normal hover:transform hover:translate-y-[-6%] 
            transition-all duration-200 px-8 py-2 text-normal font-semibold rounded-md mt-4"
          >
            Repositórios
            <FaLink />
          </button>
          <p className="text-white text-xs">
            Ao clicar no botão acima você será redicionado para o meu{" "}
            <a
              href="https://github.com/lucasdaher"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium hover:text-dark-hover transition-all duration-200"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className={`card flex flex-col justify-start items-center gap-4 ${
                isDark
                  ? "bg-card-bg hover:bg-card-bg-hover text-white"
                  : "bg-card-bg hover:bg-card-bg-hover text-white"
              } rounded-md w-full max-w-[352px] h-full min-h-[308px] px-2 py-12 
            transition-all duration-300 hover:transform hover:translate-y-[-6%]`}
            >
              {skill.icon}
              <h1 className="text-3xl text-center font-bold mt-2">
                {skill.title}
              </h1>
              <p className="text-md text-center w-[272px] font-normal">
                {skill.desc}
              </p>
            </div>
          ))}
        </>
      </div>
    </section>
  );
};

export default Skills;
