import React from "react";

import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";

interface SocialButtonProps {
  socialName: string;
  href: string;
  iconClassName?: string;
}

export default function SocialButton({
  href,
  iconClassName = "w-8 h-8",
  socialName,
}: SocialButtonProps) {
  return (
    <React.Fragment>
      <a
        href={href}
        target="_blank"
        rel="noopener norefferer"
        className="hover:transform hover:scale-105 transition-all duration-400 ease-in-out flex justify-center items-center p-4 bg-normal hover:bg-normal-hover rounded-full cursor-pointer"
      >
        <button>
          {(socialName === "github" && (
            <FaSquareGithub
              className={`w-6 h-6 text-white ${iconClassName} transition-all duration-400 ease-in-out`}
            />
          )) ||
            (socialName === "linkedin" && (
              <FaLinkedin
                className={`w-6 h-6 text-white ${iconClassName} transition-all duration-400 ease-in-out`}
              />
            )) ||
            (socialName === "behance" && (
              <FaBehanceSquare
                className={`w-6 h-6 text-white ${iconClassName} transition-all duration-400 ease-in-out`}
              />
            )) ||
            (socialName === "instagram" && (
              <FaSquareInstagram
                className={`w-6 h-6 text-white ${iconClassName} transition-all duration-400 ease-in-out`}
              />
            ))}
        </button>
      </a>
    </React.Fragment>
  );
}
