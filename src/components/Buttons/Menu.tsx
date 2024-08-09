import React, { useContext } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { Link } from "react-router-dom";
import { AlignRight, Earth, History, Moon, Sun } from "lucide-react";

import { useLanguage } from "@/services/LanguageService";
import { ThemeContext } from "@/contexts/ThemeContext";
import Circle from "./Circle";

interface MenuProps {
  iconStyle?: string;
}

export default function Menu({ iconStyle }: MenuProps) {
  const { language, updateLanguage, messages } = useLanguage();
  const { dark, handleDark } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none p-1 rounded-full hover:transform hover:scale-110 transition-all duration-200">
          <AlignRight
            className={`${iconStyle} ${
              dark === false ? "text-black-gray" : "text-white"
            }`}
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className={`${
            dark === false
              ? "bg-white/60 text-black-gray border-black/10"
              : "bg-header-bg text-white border-header-border-bottom"
          } backdrop-blur-[20px]`}
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
                {dark === true
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
                    {language === "ptbr" ? <Circle /> : null}
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
                    {language === "en" ? <Circle /> : null}
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
                    {/* {language === "es" ? <Circle /> : null} */}
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-gray/20" />
          {/* <DropdownMenuGroup className="hover:bg-gray/20 transition-all duration-200 ease-in-out rounded-md"> */}
          <DropdownMenuGroup>
            {/* <Link to={`/updates`}> */}
            <DropdownMenuItem
              className="text-white cursor-pointer"
              disabled={true}
            >
              <History
                className={`mr-2 h-4 w-4 ${
                  dark === false ? "text-black-gray" : "text-white"
                }`}
              />
              <span
                className={`${
                  dark === false ? "text-black-gray" : "text-white"
                }`}
              >
                {messages.menu.lastUpdates}
              </span>
            </DropdownMenuItem>
            {/* </Link> */}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </React.Fragment>
  );
}
