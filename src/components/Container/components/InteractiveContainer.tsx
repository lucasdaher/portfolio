import { ComponentProps } from "react";
import { Container } from "../Container";
import { useLanguage } from "@/hooks/useLanguage";
import { InteractiveNav } from "./InteractiveNav";
import { useSelect } from "../hooks/useSelect";

import experiences from "../../../data/experiences";
import { InteractiveContainerTitle } from "./InteractiveContainerTitle";

interface InteractiveContainerProps extends ComponentProps<"div"> {}

export function InteractiveContainer({ ...props }: InteractiveContainerProps) {
  const { messages } = useLanguage();
  const { selectedId } = useSelect();

  return (
    <div className="" {...props}>
      <div
        className="max-w-[1000px] mx-auto w-10/12 flex justify-center items-center"
        {...props}
      >
        <div className="mx-auto w-10/12 flex flex-col justify-center items-center gap-10">
          <Container
            justify="justifyBetween"
            align="alignStart"
            flexDirection="row"
          >
            <div className="flex flex-col space-y-4 items-start min-w-36">
              <InteractiveNav
                selected={selectedId === "experiencias"}
                selectedName="experiencias"
              >
                {messages.interactiveSidebar.title.experiences}
              </InteractiveNav>

              <InteractiveNav
                selected={selectedId === "projetos"}
                selectedName="projetos"
              >
                {messages.interactiveSidebar.title.projects}
              </InteractiveNav>

              <InteractiveNav
                selected={selectedId === "habilidades"}
                selectedName="habilidades"
              >
                {messages.interactiveSidebar.title.skills}
              </InteractiveNav>
            </div>

            {selectedId === "experiencias" && (
              <div className="flex flex-col justify-center items-start gap-8 w-full pl-8 h-full border-l-[0.5px] border-[#9c9c9c]/30">
                <InteractiveContainerTitle
                  title={messages.interactiveSidebar.title.experiences}
                  desc="Clique sobre o nome de uma experiência para visualizar mais detalhes sobre ela."
                />
                {experiences.map((experience) => (
                  <div className="" key={experience.id}>
                    <div className="flex justify-center items-center gap-4 w-full">
                      <div>
                        <img
                          src={experience.imgUrl}
                          alt={experience.altImg}
                          className="min-w-16 max-w-16 w-full rounded-lg"
                          loading="lazy"
                        />
                      </div>
                      <header>
                        <h1 className="font-light text-lg text-white">
                          {experience.role}{" "}
                          <strong className="font-semibold text-white">
                            {experience.company}
                          </strong>
                        </h1>
                        <p className="font-normal text-sm text-white/50">
                          {experience.time}
                        </p>
                      </header>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedId === "projetos" && (
              <div className="flex flex-col justify-center items-start gap-8 w-full pl-8 h-full border-l-[0.5px] border-[#9c9c9c]/30">
                Projetos
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
}