import { FaCode } from "react-icons/fa";
// import Navigation from "./Nav/navigation";
import ThemeButton from "./Header/ThemeButton";
import SocialButton from "./Nav/socialButton";

interface HeaderProps {
  handleIsDark: () => void;
  isDark: boolean;
}

const Header = ({ handleIsDark, isDark }: HeaderProps) => {
  return (
    <header className="bg-black w-full py-6 px-4 lg:py-4 lg:px-8" id="header">
      <nav className="flex justify-between items-center gap-10 max-w-[1440px] mx-auto">
        <div className="flex justify-center items-center gap-10">
          <div>
            <a
              href="#header"
              className="flex justify-center items-center gap-1 hover:scale-105 transition-all duration-200 group hover:text-light-active"
            >
              <FaCode className="text-normal text-2xl group-hover:text-light-active transition-all duration-200" />
              <h1 className="text-normal leading-none font-bold text-md group-hover:text-light-active transition-all duration-200">
                Lucas Daher
              </h1>
            </a>
          </div>
          {/* <Navigation /> */}
        </div>

        <div className="flex justify-center items-center gap-2">
          <SocialButton icon="github" href="https://github.com/lucasdaher" />
          <SocialButton
            icon="linkedin"
            href="https://www.linkedin.com/in/lucasdaherdev/"
          />
          <SocialButton icon="behance" href="https://be.net/lucasdaherr" />
          <ThemeButton handleIsDark={handleIsDark} isDark={isDark} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
