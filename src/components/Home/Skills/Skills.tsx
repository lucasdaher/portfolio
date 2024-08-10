import React, { useContext } from "react";
import skillsPtbr from "../../../data/skills/skillsPtbr";
import skillsEn from "../../../data/skills/skillsEn";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useLanguage } from "@/hooks/useLanguage";

interface SkillsProps {
  id?: string;
}

export default function Skills({ id }: SkillsProps) {
  const { language, messages } = useLanguage();
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
            className={`w-full h-auto text-3xl md:text-4xl font-bold text-left ${
              dark === true ? "text-white" : "text-black-gray"
            }`}
          >
            {messages.titles.sections.skills.title}
          </h1>
          <p
            className={`mt-2 text-lg pb-6 border-b border-gray border-opacity-20 ${
              dark === true ? "text-white/70 " : "text-black-gray/90"
            }`}
          >
            {messages.titles.sections.skills.desc}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-8 gap-4 w-full">
            {(language === "ptbr" &&
              skillsPtbr.map((skill) => (
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
              ))) ||
              (language === "en" &&
                skillsEn.map((skill) => (
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
                )))}
          </div>
          <p
            className={`${
              dark === true ? "text-white/70" : "text-black-gray"
            } text-sm font-normal w-full mt-6`}
          >
            {messages.titles.sections.skills.focus}
          </p>
        </div>
      </div>
    </section>
  );
}
