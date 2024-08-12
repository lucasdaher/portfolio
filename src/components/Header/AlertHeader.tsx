import React from "react";
import { BsStars } from "react-icons/bs";

interface AlertHeaderProps {
  alertContent?: string;
}

export default function AlertHeader({ alertContent }: AlertHeaderProps) {
  return (
    <header className="pt-6 md:pt-1">
      <div
        className={`w-full flex justify-between items-center 
    bg-normal text-white px-4 py-2 z-20 transition-all duration-400 ease-in-out`}
      >
        <div className="w-full max-w-[1440px] mx-auto flex justify-center items-center text-sm text-center">
          {alertContent === "" || null ? (
            <React.Fragment>
              <span className={`text-white font-medium`}>
                Um erro foi encontrado, reporte para um desenvolvedor.
              </span>
            </React.Fragment>
          ) : (
            <div className="flex justify-center items-center gap-2">
              <BsStars className="hidden md:flex text-white w-4 h-4 animate-rotate" />
              <span className={`text-white font-medium text-sm`}>
                {alertContent}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
