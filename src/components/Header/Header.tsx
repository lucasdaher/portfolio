import { ThemeContext } from "@/contexts/ThemeContext";
import { ComponentProps, useContext } from "react";
import { tv, VariantProps } from "tailwind-variants";

const header = tv({
  base: "fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] flex justify-between items-center backdrop-blur-[20px] px-8 h-14 rounded-xl border-b z-10 transition-all duration-200 ease-in-out",
  variants: {
    theme: {
      light: "bg-white/40 border-black/10",
      dark: "bg-header-bg border-header-border-bottom",
    },
  },
  defaultVariants: {
    theme: "dark",
  },
});

export type HeaderProps = ComponentProps<"header"> &
  VariantProps<typeof header>;

export function Header({ theme, ...props }: HeaderProps) {
  const { dark } = useContext(ThemeContext);
  return (
    <header {...props} className={header({ theme: dark ? "dark" : "light" })}>
      {props.children}
    </header>
  );
}
