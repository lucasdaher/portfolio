import codeIcon from "../../assets/icons/codeIcon.svg";
import React from "react";

interface LogoProps {
  isDark: boolean;
  name?: string;
}

export default function Logo({ isDark, name = "lucasdaher" }: LogoProps) {
  return (
    <React.Fragment>
      <picture>
        <source type="image/svg+xml" srcSet={codeIcon} />
        <img src={codeIcon} alt="Code Icon" />
      </picture>
      <h1
        className={`text-xl ${
          isDark === true ? "text-white" : "text-black-gray"
        } transition-all duration-400 ease-in-out`}
      >
        {name}
      </h1>
    </React.Fragment>
  );
}
