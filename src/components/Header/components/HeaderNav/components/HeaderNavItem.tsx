import { ThemeContext } from "@/contexts/ThemeContext";
import { ComponentProps, useContext } from "react";
import { tv, VariantProps } from "tailwind-variants";

const li = tv({
  base: "flex justify-center items-center text-center text-sm font-normal h-6 w-auto hover:text-light-active hover:scale-105 transition-all duration-200 ease-in-out",
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

export type HeaderNavItemProps = ComponentProps<"a"> &
  VariantProps<typeof li> & {
    href?: string;
    openNewTab?: boolean;
  };

export function HeaderNavItem({
  href = undefined,
  openNewTab = false,
  ...props
}: HeaderNavItemProps) {
  const { dark } = useContext(ThemeContext);
  return (
    <a
      href={href}
      target={`${openNewTab ? "_blank" : ""}`}
      rel="noopener noreferrer"
      {...props}
    >
      <li className={li({ theme: dark ? "dark" : "light" })}>
        {props.children}
      </li>
    </a>
  );
}
