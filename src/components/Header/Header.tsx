import { Link } from "react-router-dom";
import Menu from "../Buttons/Menu";
import TipBox from "../Tip/TipBox";
import Logo from "./Logo";
import NavItem from "./NavItem";

interface HeaderProps {
  isDark: boolean;
  handleDark: () => void;
}

export default function Header({ isDark, handleDark }: HeaderProps) {
  return (
    <header>
      <div
        className={`fixed top-0 left-1/2 translate-x-[-50%] w-full flex justify-between items-center 
        ${
          isDark === false
            ? "bg-white/60 border-black/10"
            : "bg-header-bg border-header-border-bottom"
        } backdrop-blur-[20px] px-4 py-2 border-b z-10 transition-all duration-400 ease-in-out`}
      >
        <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex justify-center items-center gap-8">
            <Link
              to={`/`}
              className="flex justify-center items-center gap-2 no-underline hover:scale-105 hover:transform 
              transition-all duration-400"
            >
              <Logo isDark={isDark} />
            </Link>

            <div className="flex justify-center items-center gap-3">
              <TipBox
                tip="PT-BR"
                buttonStyle={`hidden md:flex py-1 ${
                  isDark === true
                    ? "bg-[#222] hover:bg-[#323232]"
                    : "bg-[#9b9b9b] hover:bg-[#ccc]"
                }`}
                onClick={() => {
                  window.alert(
                    "A alteração de idiomas está em desenvolvimento..."
                  );
                }}
                titleButton="Clique para alterar o idioma da página."
              />
              <TipBox
                buttonStyle="hidden lg:flex bg-normal hover:bg-dark py-1"
                tip="Em desenvolvimento..."
                href="#"
              />
            </div>
          </div>
          <nav className="flex justify-center items-center gap-6">
            <ul className="hidden md:flex justify-center items-center gap-4 border-r border-gray border-opacity-50 px-8">
              <NavItem
                name="Sobre"
                type="header"
                href="#aboutme"
                isDark={isDark}
              />
              <NavItem
                name="Habilidades"
                type="header"
                href="#skills"
                isDark={isDark}
              />
              <NavItem
                name="Projetos"
                type="header"
                href="#projects"
                isDark={isDark}
              />
              <NavItem
                name="Contato"
                type="header"
                href="#contact"
                isDark={isDark}
              />
            </ul>
            <Menu
              isDark={isDark}
              handleIsDark={handleDark}
              iconStyle="w-6 h-6"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
