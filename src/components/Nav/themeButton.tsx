import { useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

const ThemeButton = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleIsDark = () => {
    setIsDark(!isDark);
  };

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
