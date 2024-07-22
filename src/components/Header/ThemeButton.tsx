import { IoMdSunny } from "react-icons/io";
import { RiMoonClearFill } from "react-icons/ri";

interface ThemeButtonProps {
  handleIsDark: () => void;
  isDark: boolean;
}

export default function ThemeButton({
  handleIsDark,
  isDark,
}: ThemeButtonProps) {
  return (
    <button
      className="bg-normal p-1 rounded-full group hover:bg-normal-hover transition-all duration-200"
      type="button"
      onClick={handleIsDark}
    >
      {isDark ? (
        <RiMoonClearFill className="text-white" />
      ) : (
        <IoMdSunny className="text-white" />
      )}
    </button>
  );
}
