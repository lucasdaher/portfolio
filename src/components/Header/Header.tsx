import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";

import codeIcon from "../../assets/icons/codeIcon.svg";

const Header = () => {
  return (
    <header>
      <div
        className="fixed top-0 left-1/2 translate-x-[-50%] w-full flex justify-between items-center bg-header-bg 
      backdrop-blur-[20px] px-4 py-2 border-b border-header-border-bottom z-10"
      >
        <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex justify-center items-center gap-8">
            <a
              href="#"
              className="flex justify-center items-center gap-3 no-underline hover:scale-105 hover:transform transition-all duration-200"
            >
              <picture>
                <source type="image/svg+xml" srcSet={codeIcon} />
                <img src={codeIcon} alt="Code Icon" />
              </picture>
              <h1 className="text-xl">lucasdaher</h1>
            </a>

            <div className="flex justify-center items-center gap-3">
              <button className="rounded-full px-4 bg-normal hover:bg-normal-active transition-all duration-200">
                <span className="text-xs">
                  Novidade! Um novo projeto acadêmico foi publicado na área de
                  projetos.
                </span>
              </button>
            </div>
          </div>
          <nav className="flex justify-center items-center gap-8">
            <ul className="flex justify-center items-center gap-4 border-r border-gray border-opacity-50 px-8">
              <li className="text-sm font-normal text-white hover:text-normal-hover transition-all duration-300">
                <a href="">Sobre</a>
              </li>
              <li className="text-sm font-normal text-white hover:text-normal-hover transition-all duration-300">
                <a href="">Contato</a>
              </li>
              <li className="text-sm font-normal text-white hover:text-normal-hover transition-all duration-300">
                <a href="">Currículo</a>
              </li>
            </ul>
            <div className="flex justify-center items-center gap-2">
              <button className="">
                <a
                  href="https://github.com/lucasdaher"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <FaSquareGithub className="w-6 h-6" />
                </a>
              </button>
              <button>
                <a
                  href="https://be.net/lucasdaher"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <FaBehanceSquare className="w-6 h-6" />
                </a>
              </button>
              <button>
                <a
                  href="linkedin.com/in/lucasdaherdev"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </button>
              <button>
                <a
                  href="https://instagram.com/daher.code"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <FaSquareInstagram className="w-6 h-6" />
                </a>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
