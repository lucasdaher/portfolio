import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [dark, setDark] = useState<boolean>(() => {
    const modeStorage = localStorage.getItem("darkMode");
    return modeStorage ? !!JSON.parse(modeStorage) : true;
  });

  const updateMode = (newMode: boolean) => {
    setDark(newMode);
    useEffect(() => {
      localStorage.setItem("darkMode", JSON.stringify(dark));
      if (dark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }, [dark]);
  };

  return {
    dark,
    setDark,
    updateMode,
  };
};
