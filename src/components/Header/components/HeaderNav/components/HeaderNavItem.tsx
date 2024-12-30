import { ComponentProps } from "react";

export type HeaderNavItemProps = ComponentProps<"a"> & {
  href?: string;
  openNewTab?: boolean;
};

export function HeaderNavItem({
  href = undefined,
  openNewTab = false,
  ...props
}: HeaderNavItemProps) {
  return (
    <a
      href={href}
      target={`${openNewTab ? "_blank" : ""}`}
      rel="noopener noreferrer"
      {...props}
    >
      <li className="flex text-white justify-center items-center text-center text-sm font-normal h-6 w-auto hover:text-light-active hover:scale-105 transition-all duration-200 ease-in-out">
        {props.children}
      </li>
    </a>
  );
}
