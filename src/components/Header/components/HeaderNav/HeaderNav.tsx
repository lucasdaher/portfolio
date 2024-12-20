import { ThemeContext } from "@/contexts/ThemeContext";
import { ComponentProps, useContext } from "react";
import { tv, VariantProps } from "tailwind-variants";

const ul = tv({
  base: "hidden md:flex justify-center items-center gap-4 px-8 transition-all duration-200 ease-in-out",
  variants: {
    theme: {
      dark: "border-white",
      light: "border-gray",
    },
    separator: {
      true: "border-r border-opacity-50",
    },
  },
  defaultVariants: {
    theme: "dark",
    separator: true,
  },
});

export type HeaderNavProps = ComponentProps<"ul"> & VariantProps<typeof ul>;

export function HeaderNav({ separator, theme, ...props }: HeaderNavProps) {
  const { dark } = useContext(ThemeContext);

  return (
    <nav className="flex justify-center items-center gap-6">
      <ul
        className={ul({ theme: dark ? "dark" : "light", separator })}
        {...props}
      >
        {props.children}
      </ul>
    </nav>
  );
}
