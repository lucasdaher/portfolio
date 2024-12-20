import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useLanguage } from "@/hooks/useLanguage";
import { AlignRight, Earth, Moon, Sun } from "lucide-react";
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
  base: "backdrop-blur-[20px]",
  variants: {
    theme: {
      light: "bg-white/60 text-black-gray border-black/10",
      dark: "bg-header-bg text-white border-header-border-bottom",
    },
  },
  defaultVariants: {
    theme: "dark",
  },
});

export type HeaderOptionsMenuProps = {
  size?: VariantProps<typeof alignRight>["size"];
};

export function HeaderOptionsMenu({ size }: HeaderOptionsMenuProps) {
  const { language, updateLanguage, messages } = useLanguage();
  const { dark, handleDark } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none p-1 rounded-full hover:transform hover:scale-110 transition-all duration-200">
          <AlignRight
            className={alignRight({
              theme: dark ? "dark" : "light",
              size,
            })}
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className={dropdownMenuContent({
            theme: dark ? "dark" : "light",
          })}
        >
          <DropdownMenuGroup className="hover:bg-gray/20 transition-all duration-200 ease-in-out rounded-md">
            <DropdownMenuItem
              className="text-white cursor-pointer"
              onClick={handleDark}
            >
              {dark ? (
                <Sun className={`mr-2 h-4 w-4 text-white`} />
              ) : (
                <Moon className={`mr-2 h-4 w-4 text-black-gray`} />
              )}
              <span className={`${dark ? "text-white" : "text-black-gray"}`}>
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

          <DropdownMenuGroup className="hover:bg-gray/20 transition-all duration-200 ease-in-out rounded-md">
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                {dark === true ? (
                  <Earth className={`mr-2 h-4 w-4 text-white`} />
                ) : (
                  <Earth className={`mr-2 h-4 w-4 text-black-gray`} />
                )}
                <span
                  className={`${
                    dark === true ? "text-white" : "text-black-gray"
                  }`}
                >
                  {messages.menu.language}
                </span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent
                  className={`${
                    dark === false
                      ? "bg-white/60 text-black-gray border-black/10"
                      : "bg-header-bg text-white border-header-border-bottom"
                  } backdrop-blur-[20px]`}
                >
                  <DropdownMenuItem
                    className="text-white cursor-pointer"
                    onClick={() => updateLanguage("ptbr")}
                  >
                    <span
                      className={`${
                        dark === true ? "text-white" : "text-black-gray"
                      }`}
                    >
                      {messages.menu.langs.ptbr}
                    </span>
                    {language === "ptbr" ? (
                      <span
                        className={`w-1 h-2 ml-2 bg-normal rounded-full font-sora font-bold text-xs px-1 text-white`}
                      ></span>
                    ) : null}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-white cursor-pointer"
                    onClick={() => updateLanguage("en")}
                  >
                    <span
                      className={`${
                        dark === true ? "text-white" : "text-black-gray"
                      }`}
                    >
                      {messages.menu.langs.en}
                    </span>
                    {language === "en" ? (
                      <span
                        className={`w-1 h-2 ml-2 bg-normal rounded-full font-sora font-bold text-xs px-1 text-white`}
                      ></span>
                    ) : null}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-white cursor-pointer"
                    disabled={true}
                  >
                    <span
                      className={`${
                        dark === true ? "text-white" : "text-black-gray"
                      }`}
                    >
                      {messages.menu.langs.es}
                    </span>
                    <span
                      className={`ml-2 bg-gray rounded-md font-sora font-bold text-xs px-1 text-white`}
                    >
                      {messages.menu.tips.soon}
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </React.Fragment>
  );
}
