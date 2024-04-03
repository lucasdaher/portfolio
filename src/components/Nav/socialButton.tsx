import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialButtonProps {
  icon: string;
}

const SocialButton = ({ icon }: SocialButtonProps) => {
  return (
    <a
      href="https://github.com/lucasdaher"
      target="_blank"
      rel="noopener noreferrer"
      className="border-none outline-none no-underline leading-none"
    >
      <button
        className="bg-social-btn-bg p-1 rounded-md group hover:bg-gray transition-all duration-200"
        type="button"
      >
        {(icon === "github" && <FaGithub className="text-white" />) ||
          (icon === "linkedin" && <FaLinkedin className="text-white" />)}
      </button>
    </a>
  );
};

export default SocialButton;
