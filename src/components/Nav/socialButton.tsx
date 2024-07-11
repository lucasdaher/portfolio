import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

interface SocialButtonProps {
  icon: string;
  href: string;
}

const SocialButton = ({ icon, href }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border-none outline-none no-underline leading-none"
    >
      <button
        className="bg-social-btn-bg p-2 rounded-md group hover:bg-gray transition-all duration-200"
        type="button"
      >
        {(icon === "github" && <FaGithub className="text-white" />) ||
          (icon === "linkedin" && <FaLinkedin className="text-white" />) ||
          (icon === "behance" && <FaBehance className="text-white" />)}
      </button>
    </a>
  );
};

export default SocialButton;
