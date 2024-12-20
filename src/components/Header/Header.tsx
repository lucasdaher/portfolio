import { ThemeContext } from "@/contexts/ThemeContext";
import { ComponentProps, useContext } from "react";
import { tv, VariantProps } from "tailwind-variants";

const header = tv({
  base: "fixed top-0 left-0 w-full flex justify-between items-center backdrop-blur-[20px] px-4 h-14 border-b z-10 transition-all duration-200 ease-in-out",
  variants: {
    theme: {
      light: "bg-white/60 border-black/10",
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
