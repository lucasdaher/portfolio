import React from "react";

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

interface MenuProps {
  iconStyle?: string;
  handleIsDark: () => void;
  isDark: boolean;
}

export default function Menu({ iconStyle, handleIsDark, isDark }: MenuProps) {
  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none p-1 rounded-full hover:transform hover:scale-110 transition-all duration-200">
          <AlignRight
            className={`${iconStyle} ${
              isDark === false ? "text-black-gray" : "text-white"
            }`}
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className={`${
            isDark === false
              ? "bg-white/60 text-black-gray border-black/10"
              : "bg-header-bg text-white border-header-border-bottom"
          } backdrop-blur-[20px]`}
        >
          <DropdownMenuGroup className="hover:bg-gray/20 transition-all duration-200 ease-in-out rounded-md">
            <DropdownMenuItem
              className="text-white cursor-pointer"
              onClick={handleIsDark}
            >
              {isDark === true ? (
                <Sun className={`mr-2 h-4 w-4 text-white`} />
              ) : (
                <Moon className={`mr-2 h-4 w-4 text-black-gray`} />
              )}
              <span
                className={`${
                  isDark === true ? "text-white" : "text-black-gray"
                }`}
              >
                {isDark === true ? "Modo claro" : "Modo escuro"}
              </span>
              <span
                className={`ml-2 bg-blue-500 rounded-md font-sora font-bold text-xs px-1 animate-rotate text-white`}
              >
                NOVO
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup className="hover:bg-gray/20 transition-all duration-200 ease-in-out rounded-md">
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                {isDark === true ? (
                  <Earth className={`mr-2 h-4 w-4 text-white`} />
                ) : (
                  <Earth className={`mr-2 h-4 w-4 text-black-gray`} />
                )}
                <span
                  className={`${
                    isDark === true ? "text-white" : "text-black-gray"
                  }`}
                >
                  Idioma
                </span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent
                  className={`${
                    isDark === false
                      ? "bg-white/60 text-black-gray border-black/10"
                      : "bg-header-bg text-white border-header-border-bottom"
                  } backdrop-blur-[20px]`}
                >
                  <DropdownMenuItem
                    className="text-white cursor-pointer"
                    onClick={handleIsDark}
                  >
                    <span
                      className={`${
                        isDark === true ? "text-white" : "text-black-gray"
                      }`}
                    >
                      Português
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-white cursor-pointer"
                    onClick={handleIsDark}
                  >
                    <span
                      className={`${
                        isDark === true ? "text-white" : "text-black-gray"
                      }`}
                    >
                      Inglês
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-white cursor-pointer"
                    onClick={handleIsDark}
                    disabled={true}
                  >
                    <span
                      className={`${
                        isDark === true ? "text-white" : "text-black-gray"
                      }`}
                    >
                      Espanhol
                    </span>
                    <span
                      className={`ml-2 bg-gray rounded-md font-sora font-bold text-xs px-1 text-white`}
                    >
                      EM BREVE
                    </span>
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
                  isDark === false ? "text-black-gray" : "text-white"
                }`}
              />
              <span
                className={`${
                  isDark === false ? "text-black-gray" : "text-white"
                }`}
              >
                Últimas atualizações
              </span>
            </DropdownMenuItem>
            {/* </Link> */}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </React.Fragment>
  );
}
