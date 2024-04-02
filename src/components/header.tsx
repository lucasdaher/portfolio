import { FaCode } from "react-icons/fa";
import Navigation from "./Nav/navigation";

const Header = () => {
  return (
    <header className="bg-black w-full p-3">
      <nav className="flex justify-center items-center gap-8 max-w-[1440px] mx-auto">
        <div>
          <a href="#" className="flex justify-center items-center gap-1">
            <FaCode className="text-blue text-2xl" />
            <h1 className="text-blue font-bold">Lucas Daher</h1>
          </a>
        </div>

        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
