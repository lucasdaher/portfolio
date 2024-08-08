import Header from "@/components/Header/Header";
import { Link } from "react-router-dom";

import { ThemeContext, ThemeContextProvider } from "@/contexts/ThemeContext";
import { useContext } from "react";

interface ErrorProps {}

export default function Error({}: ErrorProps) {
  const { dark } = useContext(ThemeContext);
  return (
    <ThemeContextProvider>
      <Header />
      <main className="flex flex-col justify-center items-center mt-36 px-4">
        <h1 className="text-normal text-5xl font-sora font-bold">Oops!</h1>
        <p
          className={`${
            dark === true ? "text-white/80" : "text-black-gray"
          } text-lg font-sora font-normal mt-4 text-center transition-all duration-400 ease-in-out`}
        >
          A página que você está procurando não foi encontrada.
        </p>
        <Link
          to={`/`}
          className="mt-8 group hover:text-light-active transition-all duration-200 ease-in-out"
        >
          <button className="border border-normal rounded-full px-8 py-4 text-normal text-center text-sm md:text-base font-sora font-semibold md:font-normal group-hover:text-white group-hover:bg-normal transition-all duration-200 ease-in-out">
            Clique para voltar à página principal
          </button>
        </Link>
        {/* Footer options */}
        <ul className="flex flex-col md:flex-row justify-center items-center gap-8 mt-36">
          <Link
            to={`/`}
            className={`${
              dark === true
                ? "text-white/40 hover:text-white"
                : "font-medium text-black-gray/80 hover:text-normal"
            } transition-all duration-200 ease-in-out`}
          >
            <li className="text-center text-sm font-sora font-light">
              Projetos
            </li>
          </Link>
          <Link
            to={`/`}
            className={`${
              dark === true
                ? "text-white/40 hover:text-white"
                : "font-medium text-black-gray/80 hover:text-normal"
            } transition-all duration-200 ease-in-out`}
          >
            <li className="text-center text-sm font-sora font-light">
              Habilidades
            </li>
          </Link>
          <Link
            to={`/`}
            className={`${
              dark === true
                ? "text-white/40 hover:text-white"
                : "font-medium text-black-gray/80 hover:text-normal"
            } transition-all duration-200 ease-in-out`}
          >
            <li className="text-center text-sm font-sora font-light">
              Contato
            </li>
          </Link>
          <Link
            to={`/`}
            className={`${
              dark === true
                ? "text-white/40 hover:text-white"
                : "font-medium text-black-gray/80 hover:text-normal"
            } transition-all duration-200 ease-in-out`}
          >
            <li className="text-center text-sm font-sora font-light">
              Baixar Currículo
            </li>
          </Link>
        </ul>
      </main>
    </ThemeContextProvider>
  );
}
