import { ComponentProps } from "react";

export type HeaderProps = ComponentProps<"header">;

export function Header({ ...props }: HeaderProps) {
  return (
    <header
      {...props}
      className="fixed bg-black-darker/50 top-0 left-0 w-full flex justify-between items-center backdrop-blur-xl px-4 lg:px-12 h-16 rounded-b-xl z-10 transition-all duration-200 ease-in-out"
    >
      {props.children}
    </header>
  );
}
