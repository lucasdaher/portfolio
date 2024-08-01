import { Link } from "react-router-dom";
import Menu from "../Buttons/Menu";
import TipBox from "../Tip/TipBox";
import Logo from "./Logo";
import NavItem from "./NavItem";

import { useLanguage } from "@/services/LanguageService";

import { useDarkMode } from "@/services/ThemeService";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const { messages } = useLanguage();
  const { dark } = useDarkMode();
  return (
    <header>
      <div
        className={`fixed top-0 left-1/2 translate-x-[-50%] w-full flex justify-between items-center 
        ${
          dark === false
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
              <Logo />
            </Link>

            <div className="flex justify-center items-center gap-3">
              <TipBox
                buttonStyle="hidden lg:flex bg-normal hover:bg-dark py-1"
                tip={messages.alerts.tipBox}
                href="#"
              />
            </div>
          </div>
          <nav className="flex justify-center items-center gap-6">
            <ul className="hidden md:flex justify-center items-center gap-4 border-r border-gray border-opacity-50 px-8">
              <NavItem
                name={messages.header.about}
                type="header"
                href="#aboutme"
              />
              <NavItem
                name={messages.header.skills}
                type="header"
                href="#skills"
              />
              <NavItem
                name={messages.header.projects}
                type="header"
                href="#projects"
              />
              <NavItem
                name={messages.header.contact}
                type="header"
                href="#contact"
              />
            </ul>
            <Menu iconStyle="w-6 h-6" />
          </nav>
        </div>
      </div>
    </header>
  );
}
