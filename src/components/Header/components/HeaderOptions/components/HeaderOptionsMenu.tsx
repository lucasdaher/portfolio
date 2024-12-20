import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useLanguage } from "@/hooks/useLanguage";
import { AlignRight, Moon, Sun } from "lucide-react";
import React, { useContext } from "react";
import { tv, VariantProps } from "tailwind-variants";

const alignRight = tv({
  variants: {
    theme: {
      dark: "text-white",
      light: "text-black-gray",
    },
    size: {
      default: "w-6 h-6",
    },
  },
  defaultVariants: {
    theme: "dark",
    size: "default",
  },
});

const dropdownMenuContent = tv({
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

export type HeaderOptionsMenuProps = {
  alignRightTheme?: VariantProps<typeof alignRight>["theme"];
  dropdownTheme?: VariantProps<typeof dropdownMenuContent>["theme"];
  size?: VariantProps<typeof alignRight>["size"];
};

export function HeaderOptionsMenu({
  alignRightTheme,
  dropdownTheme,
  size,
}: HeaderOptionsMenuProps) {
  const { language, updateLanguage, messages } = useLanguage();
  const { dark, handleDark } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none p-1 rounded-full hover:transform hover:scale-110 transition-all duration-200">
          <AlignRight
            className={alignRight({
              theme: alignRightTheme ? "dark" : "light",
              size,
            })}
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className={dropdownMenuContent({
            theme: dropdownTheme ? "dark" : "light",
          })}
        >
          <DropdownMenuGroup className="hover:bg-gray/20 transition-all duration-200 ease-in-out rounded-md">
            <DropdownMenuItem
              className="text-white cursor-pointer"
              onClick={handleDark}
            >
              {dark === true ? (
                <Sun className={`mr-2 h-4 w-4 text-white`} />
              ) : (
                <Moon className={`mr-2 h-4 w-4 text-black-gray`} />
              )}
              <span
                className={`${
                  dark === true ? "text-white" : "text-black-gray"
                }`}
              >
                {dark
                  ? messages.menu.switchModeToLight
                  : messages.menu.switchModeToDark}
              </span>
              <span
                className={`ml-2 bg-blue-500 rounded-md font-sora font-bold text-xs px-1 animate-rotate text-white`}
              >
                {messages.menu.tips.new}
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </React.Fragment>
  );
}
