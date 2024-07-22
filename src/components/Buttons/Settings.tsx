import React from "react";

import { AiFillSetting } from "react-icons/ai";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link } from "react-router-dom";
import { History, Moon, Sun } from "lucide-react";

interface SettingsProps {
  iconStyle?: string;
  name?: string;
  handleIsDark: () => void;
  isDark: boolean;
}

export default function Settings({
  iconStyle,
  handleIsDark,
  isDark,
}: SettingsProps) {
  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none  p-1 rounded-full group hover:bg-normal-hover transition-all duration-200">
          <AiFillSetting className={`${iconStyle} text-white`} />
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
              {isDark === false ? (
                <Sun className={`mr-2 h-4 w-4 text-black-gray`} />
              ) : (
                <Moon className={`mr-2 h-4 w-4 text-white`} />
              )}
              <span
                className={`${
                  isDark === false ? "text-black-gray" : "text-white"
                }`}
              >
                Alterar modo
              </span>
              <span
                className={`ml-2 bg-blue-500 rounded-md font-sora font-bold text-xs px-1 animate-rotate text-white`}
              >
                NOVO
              </span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-gray/20" />
          <DropdownMenuGroup className="hover:bg-gray/20 transition-all duration-200 ease-in-out rounded-md">
            <Link to={`/updates`}>
              <DropdownMenuItem className="text-white cursor-pointer">
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
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </React.Fragment>
  );
}
