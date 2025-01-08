import { projectsData } from "@/data/Projects/projects";
import { FaFigma, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <>
      {projectsData.map((project, projectIndex) => (
        <div
          key={projectIndex}
          className="pb-12 border-b border-white/10 last:border-none last:pb-0"
        >
          <div className="flex flex-col justify-center items-start lg:justify-between lg:items-center gap-8 w-full">
            <div className="w-full h-auto lg:h-[400px] overflow-hidden">
              <img
                src={project.thumbUrl}
                alt="Thumbnail do projeto que foi desenvolvido por Lucas Daher."
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-6 w-full">
              <header className="flex flex-col justify-center items-start gap-1">
                <div className="flex flex-col justify-center items-start">
                  <h1 className="font-semibold text-xl lg:text-2xl text-white">
                    {project.nome}
                  </h1>
                  <h2 className="font-semibold text-xs lg:text-sm text-blue-500">
                    {project.categoria}
                  </h2>
                </div>
                <p className="font-normal text-base lg:text-sm leading-6 text-white/50 mt-2">
                  {project.desc}
                </p>
              </header>

              <footer>
                <Link
                  to={`${project.repoUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="px-4 py-2 rounded-full bg-white ring-black-darker/10 max-w-xl w-full hover:bg-gray-200 transition-all duration-200"
                  >
                    {project.repoType === "GitHub" && (
                      <div className="flex flex-row justify-center items-center gap-2">
                        <FaGithub className="w-5 h-5 text-black-darker" />
                        <span className="text-black-darker text-base font-medium">
                          Acessar o repositório
                        </span>
                      </div>
                    )}

                    {project.repoType === "Figma" && (
                      <div className="flex flex-row justify-center items-center gap-2">
                        <FaFigma className="w-5 h-5 text-black-darker" />
                        <span className="text-black-darker text-base font-medium">
                          Acessar o Figma
                        </span>
                      </div>
                    )}
                  </button>
                </Link>
              </footer>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
