import { ThemeContext } from "@/contexts/ThemeContext";
import codeIcon from "../../assets/icons/codeIcon.svg";
import React, { useContext } from "react";

interface LogoProps {
  name?: string;
}

export default function Logo({ name = "lucasdaher" }: LogoProps) {
  const { dark } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <picture>
        <source type="image/svg+xml" srcSet={codeIcon} />
        <img src={codeIcon} alt="Code Icon" />
      </picture>
      <h1
        className={`text-xl font-medium leading-none h-auto w-auto ${
          dark === true ? "text-white" : "text-black-gray"
        } transition-all duration-400 ease-in-out`}
      >
        {name}
      </h1>
    </React.Fragment>
  );
}
