import React from "react";

interface NavItemProps {
  type: string;
  name?: string;
  href?: string;
  customClassName?: string;
  isDark: boolean;
}

export default function NavItem({
  isDark,
  type,
  href,
  name,
  customClassName,
}: NavItemProps) {
  return (
    <React.Fragment>
      {(type === "header" && (
        <li
          className={`flex justify-center items-center text-center text-sm font-normal h-6 w-auto ${
            isDark === true ? "text-white" : "text-black-gray"
          } hover:text-normal-hover transition-all duration-400 ease-in-out`}
        >
          <a href={href}>{name}</a>
        </li>
      )) ||
        (type === "custom" && (
          <li
            className={`transition-all duration-400 ease-in-out ${customClassName}`}
          >
            <a href={href} rel="noopener norefferer" target="_blank">
              {name}
            </a>
          </li>
        ))}
    </React.Fragment>
  );
}
