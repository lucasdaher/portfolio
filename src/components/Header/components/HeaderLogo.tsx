import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

import codeIcon from "../../../assets/icons/codeIcon.svg";
import { tv } from "tailwind-variants";
import { Link } from "react-router-dom";

const h1 = tv({
  base: "text-xl font-medium tracking-normal h-6 w-auto transition-all duration-200 ease-in-out",
  variants: {
    theme: {
      dark: "text-white",
      light: "text-black-gray",
    },
  },
  defaultVariants: {
    theme: "dark",
  },
});

export function HeaderLogo() {
  const { dark } = useContext(ThemeContext);
  return (
    <Link
      to={`/`}
      className="flex justify-center items-center gap-2 no-underline hover:scale-105 hover:transform transition-all duration-400"
    >
      <picture>
        <source type="image/svg+xml" srcSet={codeIcon} />
        <img src={codeIcon} alt="Terminal code icon" />
      </picture>
      <h1 className={h1({ theme: dark ? "dark" : "light" })}>lucasdaher</h1>
    </Link>
  );
}
