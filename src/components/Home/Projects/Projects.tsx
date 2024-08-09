import { ThemeContext } from "@/contexts/ThemeContext";
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
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "@/hooks/useLanguage";

interface ProjectsProps {
  id?: string;
}

export default function Projects({ id }: ProjectsProps) {
  const { messages } = useLanguage();
  const { dark } = useContext(ThemeContext);
  return (
    <section className="bg-transparent mt-36 px-4" id={id}>
      <div className="max-w-[1440px] mx-auto w-full text-white">
        <h1
          className={`w-full h-auto text-3xl md:text-4xl font-bold text-left ${
            dark === true ? "text-white" : "text-black-gray"
          }`}
        >
          {messages.titles.sections.projects.title}
        </h1>
        <p
          className={`mt-2 text-lg pb-6 border-b border-gray border-opacity-20 text-left ${
            dark === true ? "text-white/70 " : "text-black-gray/90"
          }`}
        >
          {messages.titles.sections.projects.desc}
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none flex justify-center items-center gap-2 bg-black-gray text-white px-8 py-2 rounded-md mt-8 hover:bg-[#303030] transition-all duration-200 ease-in-out">
            <Settings2Icon className="w-4 h-4" />
            <span className="leading-none h-auto font-normal text-base">
              {messages.buttons.sections.projects.filter.title}
            </span>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className={`${
              dark === false
                ? "bg-white/60 text-black-gray border-black/10"
                : "bg-header-bg text-white border-header-border-bottom"
            } backdrop-blur-[20px]`}
          >
            <DropdownMenuLabel>
              {messages.buttons.sections.projects.filter.dropDownLabel}
            </DropdownMenuLabel>
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
                      dark === true ? "text-white" : "text-black-gray"
                    } transition-all duration-400 ease-in-out`}
                  >
                    {projeto.titulo}
                  </h1>
                  <p
                    className={`font-sora font-normal text-base leading-normal min-h-16 ${
                      dark === true ? "text-white/70" : "text-black-gray"
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
                    <button
                      className={`mt-6 border rounded-3xl px-4 py-2 ${
                        dark === true
                          ? "border-white group hover:bg-white hover:text-black-gray"
                          : "border-black-gray group hover:bg-black-gray hover:text-white"
                      } transition-all duration-200 ease-in-out`}
                    >
                      <ArrowRight
                        className={`transition-all duration-200 ease-in-out ${
                          dark === true
                            ? "text-white group-hover:text-black-gray"
                            : "text-black-gray group-hover:text-white"
                        }`}
                      />
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
