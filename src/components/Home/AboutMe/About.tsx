import { ThemeContext } from "@/contexts/ThemeContext";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";

interface AboutProps {
  id?: string;
}

/**
 * Renders the About component.
 *
 * @param {AboutProps} props - The component props.
 * @param {string} props.id - The ID of the section.
 * @returns {JSX.Element} The rendered About component.
 */

export default function About({ id }: AboutProps) {
  const { messages } = useLanguage();
  const { dark } = useContext(ThemeContext);
  return (
    <section className="mt-24 md:mt-32 px-4" id={id}>
      <div className="max-w-[1440px] mx-auto w-full flex flex-col justify-center items-start">
        <div className="">
          <h1
            className={`w-full h-auto text-3xl md:text-7xl font-bold text-left ${
              dark === true ? "text-white" : "text-black-gray"
            }`}
          >
            {messages.titles.sections.aboutme.title}
          </h1>
          <p
            className={`w-full lg:max-w-none lg:w-full text-justify font-normal text-base md:text-lg mt-6 transition-all duration-400 ease-in-out ${
              dark ? "text-white/80" : "text-black-gray/80"
            }`}
          >
            {messages.titles.sections.aboutme.desc}
          </p>

          <button
            className={`mt-12 flex justify-center items-center gap-2 group border ${
              dark === true
                ? "border-white group hover:bg-white hover:text-normal"
                : "border-black-gray group hover:bg-black-gray hover:text-white"
            } rounded-full px-8 py-4 transition-all duration-200 ease-in-out`}
          >
            <Link to={`/aboutme`} className="no-underline">
              <span
                className={`${
                  dark === true
                    ? "text-white group-hover:text-normal"
                    : "text-black-gray group-hover:text-white"
                } font-medium leading-none h-auto transition-all duration-200 ease-in-out`}
              >
                {messages.buttons.sections.aboutme.moreAboutMe}
              </span>
            </Link>
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
