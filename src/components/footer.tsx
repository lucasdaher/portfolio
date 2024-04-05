import { FaCode } from "react-icons/fa";

interface FooterProps {
  isDark: boolean;
}

const Footer = ({ isDark }: FooterProps) => {
  return (
    <footer
      className={`${
        isDark ? "bg-normal" : "bg-black"
      } w-full px-12 py-24 mt-48 transition-all duration-300`}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <FaCode className="text-white text-3xl transition-all duration-200" />
          <h1 className="text-white leading-none font-bold text-xl transition-all duration-200 cursor-default">
            Lucas Daher
          </h1>
        </div>

        <div className="mt-2">
          <p className="font-medium text-white text-sm">
            Todos os direitos reservados para Lucas Daher. &copy;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
