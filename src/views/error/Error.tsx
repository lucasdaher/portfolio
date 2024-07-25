import Header from "@/components/Header/Header";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ErrorProps {}

export default function Error({}: ErrorProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const isDarkLocalStorage = localStorage.getItem("darkMode");
    return isDarkLocalStorage ? !!JSON.parse(isDarkLocalStorage) : true;
  });

  const handleIsDark = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark));
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <React.Fragment>
      <Header isDark={isDark} handleDark={handleIsDark} />
      <main className="flex flex-col justify-center items-center mt-36 px-4">
        <h1 className="text-normal text-5xl font-sora font-bold">Oops!</h1>
        <p
          className={`${
            isDark === true ? "text-white/80" : "text-black-gray"
          } text-lg font-sora font-normal mt-4 text-center transition-all duration-400 ease-in-out`}
        >
          Não encontramos a página que você está procurando...
        </p>
        <Link
          to={`/`}
          className="mt-8 group hover:text-light-active transition-all duration-200 ease-in-out"
        >
          <button className="border border-normal rounded-full px-8 py-4 text-normal text-center text-sm md:text-base font-sora font-semibold md:font-normal group-hover:text-white group-hover:bg-normal transition-all duration-200 ease-in-out">
            Clique para voltar à página principal
          </button>
        </Link>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-8 mt-36 text-white/40">
          <Link
            to={`/`}
            className="hover:text-white transition-all duration-200 ease-in-out"
          >
            <li className="text-center text-sm font-sora font-light">
              Projetos
            </li>
          </Link>
          <Link
            to={`/`}
            className="hover:text-white transition-all duration-200 ease-in-out"
          >
            <li className="text-center text-sm font-sora font-light">
              Habilidades
            </li>
          </Link>
          <Link
            to={`/`}
            className="hover:text-white transition-all duration-200 ease-in-out"
          >
            <li className="text-center text-sm font-sora font-light">
              Contato
            </li>
          </Link>
          <Link
            to={`/`}
            className="hover:text-white transition-all duration-200 ease-in-out"
          >
            <li className="text-center text-sm font-sora font-light">
              Baixar Currículo
            </li>
          </Link>
        </ul>
      </main>
    </React.Fragment>
  );
}
