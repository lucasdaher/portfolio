import projects from "../../../data/projects";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ArrowRight, ListRestartIcon, Settings2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface ProjectsProps {
  isDark: boolean;
}

export default function Projects({ isDark }: ProjectsProps) {
  return (
    <section className="bg-transparent mt-36 px-4">
      <div className="max-w-[1440px] mx-auto w-full text-white">
        <h1
          className={`w-full h-auto text-3xl md:text-4xl font-bold text-left ${
            isDark === true ? "text-white" : "text-black-gray"
          }`}
        >
          Meus projetos
        </h1>
        <p
          className={`mt-2 text-lg pb-6 border-b border-gray border-opacity-20 text-left ${
            isDark === true ? "text-white/70 " : "text-black-gray/70"
          }`}
        >
          Apresento a você uma seleção de projetos autorais, resultado de minha
          dedicação em design e desenvolvimento.
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex justify-center items-center gap-2 bg-black-gray text-white px-8 py-2 rounded-md mt-8 hover:bg-[#303030] transition-all duration-200 ease-in-out">
            <Settings2Icon className="w-4 h-4" />
            <span className="leading-none h-auto font-normal text-base">
              Filtrar projetos
            </span>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className={`${
              isDark === false
                ? "bg-white/60 text-black-gray border-black/10"
                : "bg-header-bg text-white border-header-border-bottom"
            } backdrop-blur-[20px]`}
          >
            <DropdownMenuLabel>Escolha uma opção de filtro</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray/20" />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span className="cursor-pointer hover:text-white/70">
                  Mais recentes
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="cursor-pointer hover:text-white/70">
                  Mais antigos
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="cursor-pointer hover:text-white/70">
                  Ordem Alfabética
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="cursor-pointer hover:text-white/70">
                  Projeto Acadêmico
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="cursor-pointer hover:text-white/70">
                  Lógica de Programação
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="cursor-pointer hover:text-white/70">
                  Front-End
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="cursor-pointer hover:text-white/70">
                  Back-End
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="cursor-pointer hover:text-white/70">
                  UX Design
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span className="cursor-pointer hover:text-white/70">
                  Design
                </span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="bg-gray/20" />
            <DropdownMenuItem className="text-red-500 flex justify-center items-center">
              <ListRestartIcon className="w-5 h-5 mr-2" />
              <span className="leading-none h-auto">Resetar filtros</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Implementar os cards com os projetos */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-x-4 md:gap-y-8 w-full max-w-none mt-12 items-start">
          {projects.map((projeto) => (
            <React.Fragment key={projeto.id}>
              <div className="flex flex-col justify-between items-start gap-4 max-h-[750px] min-h-[748px]">
                <picture className="shadow-projectCard rounded-lg w-full">
                  {projeto.thumbnail}
                </picture>
                <div className="flex flex-col justify-center items-start gap-2">
                  <h1
                    className={`font-sora font-bold text-xl leading-none h-auto ${
                      isDark === true ? "text-white" : "text-black-gray"
                    } transition-all duration-400 ease-in-out`}
                  >
                    {projeto.titulo}
                  </h1>
                  <p
                    className={`font-sora font-normal text-base leading-normal min-h-16 ${
                      isDark === true ? "text-white/70" : "text-black-gray"
                    }`}
                  >
                    {projeto.descricao}
                  </p>
                  <div className="tags flex flex-row justify-start items-center gap-2 mt-2">
                    {projeto.tags.map((tag, index) => (
                      <div
                        className="bg-normal px-2 py-1 rounded-lg text-sm text-white"
                        key={index}
                      >
                        {tag.tag}
                      </div>
                    ))}
                  </div>
                  <Link to={`${projeto.link}`}>
                    <button className="mt-6 border border-white rounded-3xl px-4 py-2 group hover:bg-white hover:text-black-gray transition-all duration-200 ease-in-out">
                      <ArrowRight className="group-hover:text-black-gray transition-all duration-200 ease-in-out" />
                    </button>
                  </Link>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
