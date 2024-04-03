import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

interface ThemeButtonProps {
  handleIsDark: () => void;
  isDark: boolean;
}

const ThemeButton = ({ handleIsDark, isDark }: ThemeButtonProps) => {
  return (
    <button
      className="bg-normal p-1 rounded-md group hover:bg-normal-hover transition-all duration-200"
      type="button"
      onClick={handleIsDark}
    >
      {isDark ? (
        <IoMdMoon className="text-white" />
      ) : (
        <IoMdSunny className="text-white" />
      )}
    </button>
  );
};

export default ThemeButton;
