import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextProps {
  children: ReactNode;
}

interface ThemeContextType {
  dark: boolean;
  setDark: (newState: boolean) => void;
  handleDark: () => void;
}

const ThemeContextValue = {
  dark: !!JSON.parse(localStorage.getItem("darkMode") || "true"),
  setDark: () => {},
  handleDark: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(ThemeContextValue);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [dark, setDark] = useState<boolean>(() => {
    const modeStorage = localStorage.getItem("darkMode");
    return modeStorage ? !!JSON.parse(modeStorage) : true;
  });

  const handleDark = () => {
    setDark(dark === false ? true : false);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark));
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark, handleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
