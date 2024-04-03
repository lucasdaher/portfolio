import { FaCode } from "react-icons/fa";
import Navigation from "./Nav/navigation";
import ThemeButton from "./Nav/themeButton";

const Header = () => {
  return (
    <header className="bg-black w-full py-3 px-8">
      <nav className="flex justify-start items-center gap-10 max-w-[1440px] mx-auto">
        <div>
          <a href="#" className="flex justify-center items-center gap-1">
            <FaCode className="text-normal text-2xl" />
            <h1 className="text-normal font-bold text-md">Lucas Daher</h1>
          </a>
        </div>

        <Navigation />

        <ThemeButton />
      </nav>
    </header>
  );
};

export default Header;
