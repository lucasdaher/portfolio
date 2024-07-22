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
  iconClassName = "w-6 h-6",
  socialName,
}: SocialButtonProps) {
  return (
    <React.Fragment>
      <li className="hover:transform hover:scale-105 transition-all duration-400 ease-in-out flex justify-center items-center">
        <button>
          <a href={href} target="_blank" rel="noopener norefferer">
            {(socialName === "github" && (
              <FaSquareGithub
                className={`w-6 h-6 ${iconClassName} transition-all duration-400 ease-in-out`}
              />
            )) ||
              (socialName === "linkedin" && (
                <FaLinkedin
                  className={`w-6 h-6 ${iconClassName} transition-all duration-400 ease-in-out`}
                />
              )) ||
              (socialName === "behance" && (
                <FaBehanceSquare
                  className={`w-6 h-6 ${iconClassName} transition-all duration-400 ease-in-out`}
                />
              )) ||
              (socialName === "instagram" && (
                <FaSquareInstagram
                  className={`w-6 h-6 ${iconClassName} transition-all duration-400 ease-in-out`}
                />
              ))}
          </a>
        </button>
      </li>
    </React.Fragment>
  );
}
