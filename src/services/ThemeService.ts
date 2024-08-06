import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [dark, setDark] = useState<boolean>(() => {
    const modeStorage = localStorage.getItem("darkMode");
    return modeStorage ? !!JSON.parse(modeStorage) : true;
  });

  const handleMode = () => {
    setDark((prevDark) => !prevDark);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark));
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    const modeStorage = localStorage.getItem("darkMode");
    if (modeStorage) {
      const dark = JSON.parse(modeStorage);
      if (dark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, []);

  return {
    dark,
    setDark,
    handleMode,
  };
};
