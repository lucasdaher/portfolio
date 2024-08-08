import React, { useContext } from "react";
import skills from "../../../data/skills";
import { ThemeContext } from "@/contexts/ThemeContext";

interface SkillsProps {
  id?: string;
}

export default function Skills({ id }: SkillsProps) {
  const { dark } = useContext(ThemeContext);
  return (
    <section
      className={`mt-36 px-4 ${
        dark === true ? "bg-black-gray" : "bg-light-active/50"
      }`}
      id={id}
    >
      <div className="max-w-[1440px] mx-auto w-full h-auto py-16">
        <div>
          <h1
            className={`w-full h-auto text-3xl md:text-4xl font-bold text-center md:text-left ${
              dark === true ? "text-white" : "text-black-gray"
            }`}
          >
            Habilidades
          </h1>
          <p
            className={`mt-2 text-lg pb-6 border-b border-gray border-opacity-20 ${
              dark === true ? "text-white/70 " : "text-black-gray/90"
            }`}
          >
            Conheça um pouco das minhas habilidades de desenvolvimento, design e
            experiência do usuário.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 gap-4 w-full">
            {skills.map((skill) => (
              <React.Fragment key={skill.id}>
                <div className="bg-normal text-white rounded-lg px-8 py-4 flex justify-between items-center gap-2">
                  <div className="flex justify-center items-center gap-2">
                    <span className="w-6 h-6">{skill.icone}</span>
                    <h2 className="leading-none h-auto text-base font-medium">
                      {skill.nome}
                    </h2>
                  </div>
                  <div className="ml-4 text-white bg-black-gray px-2 py-1 rounded-md font-semibold text-sm leading-none h-auto">
                    {skill.conhecimento}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <p
            className={`${
              dark === true ? "text-white/70" : "text-black-gray"
            } text-sm font-normal w-full mt-6`}
          >
            Atualmente o meu foco de estudo está sendo{" "}
            <strong
              className={`${
                dark === true ? "text-white/80" : "text-black-gray"
              }`}
            >
              Java
            </strong>{" "}
            devido a matéria de <strong>Programação Orientada a Objetos</strong>{" "}
            da faculdade.
          </p>
        </div>
      </div>
    </section>
  );
}
