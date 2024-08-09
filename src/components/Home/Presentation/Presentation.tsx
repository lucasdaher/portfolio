import Default from "@/components/Buttons/Default";
import SocialButton from "@/components/Buttons/SocialButton";
import { MdFileDownload } from "react-icons/md";

import { useLanguage } from "@/hooks/useLanguage";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

interface PresentationProps {}

/**
 * Renders the presentation section of the home page.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isDark - Indicates whether the dark mode is enabled.
 * @returns {JSX.Element} The rendered presentation section.
 */

export default function Presentation({}: PresentationProps) {
  const { messages } = useLanguage();

  const mensagem = messages.titles.sections.presentation.title;
  const [textoDinamico, settextoDinamico] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(350); // 350ms

  useEffect(() => {
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        settextoDinamico(mensagem.substring(0, textoDinamico.length - 1));
        setTypingSpeed(30);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        settextoDinamico(mensagem.substring(0, textoDinamico.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && textoDinamico === mensagem) {
      setTimeout(() => setIsDeleting(true), 8000);
    } else if (isDeleting && textoDinamico === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(200);
    }

    return () => clearTimeout(timer);
  }, [textoDinamico, isDeleting, , mensagem, typingSpeed, loopNum]);

  const { dark } = useContext(ThemeContext);

  return (
    <section
      className={`gradient-background-${
        dark === false ? "light" : "dark"
      } h-auto w-full transition-all duration-400 ease-in-out`}
    >
      <div className="max-w-[1440px] w-full mx-auto py-16 flex justify-between items-center lg:gap-24">
        <div className="flex flex-col md:flex-col justify-between items-center mx-auto w-full">
          <div className="flex justify-center items-center flex-col gap-4 px-4">
            <h1
              className={`lg:w-full h-auto min-h-[144px] md:min-h-[144px] max-h-none w-full text-3xl md:text-7xl font-bold text-center ${
                dark === true ? "text-white" : "text-black-gray"
              }`}
            >
              {textoDinamico}
            </h1>
            <p
              className={`w-full lg:max-w-[950px] lg:w-[950px] text-center font-normal text-base md:text-lg mt-6 transition-all duration-400 ease-in-out ${
                dark ? "text-white" : "text-black-gray"
              }`}
            >
              {messages.titles.sections.presentation.desc}
            </p>
          </div>

          <ul className="flex md:flex-row flex-col justify-center items-center gap-8 mt-14">
            <li>
              <Default
                name={messages.buttons.sections.presentation.resumeBtnDownload}
                leftIcon={<MdFileDownload className="w-6 h-6" />}
                gap={2}
                download={true}
                downloadHref="/curriculo.pdf"
                downloadFile="curriculo.pdf"
                title={messages.elements.buttonTitles.resumeBtn}
              />
            </li>
            <li className="flex justify-center items-center gap-2">
              <SocialButton
                socialName="github"
                href="https://github.com/lucasdaher"
              />
              <SocialButton
                socialName="behance"
                href="https://be.net/lucasdaherr"
              />
              <SocialButton
                socialName="linkedin"
                href="https://linkedin.com/in/lucasdaherdev"
              />
              <SocialButton
                socialName="instagram"
                href="https://instagram.com/daher.code"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
