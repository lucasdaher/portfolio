import { ComponentProps } from "react";
import { HeaderLogo } from "../Header/components/HeaderLogo";

export type FooterProps = ComponentProps<"footer">;

export function Footer({ ...props }: FooterProps) {
  return (
    <footer
      className={`bg-black-darker/50 backdrop-blur-lg rounded-t-xl w-full px-12 py-16 mt-32 transition-all duration-300`}
      {...props}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <HeaderLogo />
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
