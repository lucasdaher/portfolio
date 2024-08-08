import { useContext } from "react";
import Logo from "../Header/Logo";
import { ThemeContext } from "@/contexts/ThemeContext";

interface FooterProps {}

export default function Footer({}: FooterProps) {
  const { dark } = useContext(ThemeContext);
  return (
    <footer
      className={`${
        dark ? "bg-black-gray" : "bg-normal"
      } w-full px-12 py-24 mt-48 transition-all duration-300`}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <Logo />
        </div>

        <div className="mt-2">
          <p className="font-medium text-white text-sm text-center">
            Todos os direitos reservados para Lucas Daher. &copy;
          </p>
        </div>
      </div>
    </footer>
  );
}
