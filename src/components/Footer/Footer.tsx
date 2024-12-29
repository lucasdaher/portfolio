import { ComponentProps } from "react";
import { HeaderLogo } from "../Header/components/HeaderLogo";
import { ArrowUp } from "lucide-react";

export type FooterProps = ComponentProps<"footer">;

export function Footer({ ...props }: FooterProps) {
  return (
    <footer
      className={`bg-black-darker bg-opacity-30 backdrop-blur-lg rounded-t-xl w-full px-12 py-16 mt-32 transition-all duration-200 ease-in-out`}
      {...props}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <HeaderLogo />
        </div>

        <div className="mt-2">
          <p className="font-normal text-white/50 text-sm text-center">
            Desenvolvido com 🤍 por{" "}
            <span className="italic font-medium">Lucas Daher</span> <br />
          </p>
        </div>

        <button
          className="flex justify-center items-center gap-2 mt-6 bg-black-darker bg-opacity-30 rounded-full border-[0.5px] border-opacity-30 p-2 group hover:scale-110 backdrop-blur-xl transition-all duration-200 ease-in-out"
          title="Clique para voltar ao topo da página"
          type="button"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowUp className="text-gray-dark w-5 h-5 group-hover:text-white group-hover:animate-upanddown transition-all duration-200 ease-in-out" />
        </button>
      </div>
    </footer>
  );
}
