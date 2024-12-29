import { ComponentProps } from "react";

import { Container } from "../Container";

import { InteractiveNav } from "./InteractiveNav";
import { InteractiveContainerTitle } from "./InteractiveContainerTitle";
import { Experiences } from "./Experiences";

import experiences from "@/data/Experiences/experiences";

import { useLanguage } from "@/hooks/useLanguage/useLanguage";
import { useSelect } from "../hooks/useSelect";

interface InteractiveContainerProps extends ComponentProps<"div"> {}

export function InteractiveContainer({ ...props }: InteractiveContainerProps) {
  const { messages } = useLanguage();
  const { selectedId } = useSelect();

  return (
    <div {...props}>
      <div
        className="max-w-[1440px] mx-auto w-10/12 flex justify-center items-center"
        {...props}
      >
        <div className="mx-auto w-10/12 flex flex-col justify-center items-center gap-10">
          <Container justify="between" align="start" flexDirection="row">
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

              <InteractiveNav
                selected={selectedId === "formacoes"}
                selectedName="formacoes"
              >
                {messages.interactiveSidebar.title.education}
              </InteractiveNav>
            </div>

            {/* Elemento que será mostrado ao selecionar experiências */}
            {selectedId === "experiencias" && (
              <Experiences>
                <InteractiveContainerTitle
                  title={messages.interactiveSidebar.title.experiences}
                  desc="Clique sobre o nome de uma experiência para visualizar mais detalhes sobre ela."
                />

                {experiences.map((experience) => (
                  <a
                    href={experience.redirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:bg-zinc-800/50 hover:rounded-xl cursor-pointer p-4 transition-all duration-200 ease-in-out"
                    key={experience.id}
                  >
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
                  </a>
                ))}
              </Experiences>
            )}

            {/* Elemento que será mostrado ao selecionar projetos */}
            {selectedId === "projetos" && (
              <div className="flex flex-col justify-center items-start gap-8 w-full pl-8 h-full border-l-[0.5px] border-[#9c9c9c]/30">
                <InteractiveContainerTitle
                  title={messages.interactiveSidebar.title.projects}
                  desc="Clique no redirecionamento de um projeto para ver mais detalhes sobre ele."
                />
              </div>
            )}

            {/* Elemento que será mostrado ao selecionar habilidades */}
            {selectedId === "habilidades" && (
              <div className="flex flex-col justify-center items-start gap-8 w-full pl-8 h-full border-l-[0.5px] border-[#9c9c9c]/30">
                <InteractiveContainerTitle
                  title={messages.interactiveSidebar.title.skills}
                  desc="Confira minhas habilidades e o meu nível de conhecimento com cada um(a)."
                />
              </div>
            )}

            {/* Elemento que será mostrado ao selecionar formações */}
            {selectedId === "formacoes" && (
              <div className="flex flex-col justify-center items-start gap-6 w-full pl-8 h-full border-l-[0.5px] border-[#9c9c9c]/30">
                <InteractiveContainerTitle
                  title={messages.interactiveSidebar.title.education}
                  desc={messages.interactiveSidebar.desc.education}
                />

                <div className="flex justify-start items-center gap-4 w-full p-4">
                  <div>
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D0BAQHfIHGvvHArYg/company-logo_200_200/company-logo_200_200/0/1730749432149?e=1743638400&v=beta&t=DWrT5zyEHt6ZEamEL0kw_rV73vdAFD1GC4omTv5NhDE"
                      alt="Foto de perfil da Universidade Católica de Brasília."
                      className="min-w-16 max-w-16 w-full rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <header>
                    <h1 className="font-light text-lg text-white">
                      Análise e Desenvolvimento de Sistemas
                    </h1>
                    <p className="font-normal text-sm text-white/50">
                      Universidade Católica de Brasília
                    </p>
                  </header>
                </div>

                <div className="flex justify-start items-center gap-4 w-full p-4">
                  <div>
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D0BAQE4QCIvaSydTA/company-logo_200_200/company-logo_200_200/0/1733142290647/escoladnc_logo?e=1743638400&v=beta&t=CJS-guQ4lVRjqKG9um8CLRBtBAxUXopUUvM01f4ueUI"
                      alt="Foto de perfil da Escola DNC."
                      className="min-w-16 max-w-16 w-full rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <header>
                    <h1 className="font-light text-lg text-white">
                      Formação em Tecnologia
                    </h1>
                    <p className="font-normal text-sm text-white/50">
                      Escola DNC
                    </p>
                  </header>
                </div>
              </div>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
}
