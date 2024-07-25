import Default from "@/components/Buttons/Default";
import SocialButton from "@/components/Buttons/SocialButton";
import { useEffect, useState } from "react";

// import { Messages, Language } from "@/locales/languages";

// import en from "../../../locales/en.json";
// import ptbr from "../../../locales/ptbr.json";

// const messages: Record<Language, Messages> = {
//   en: en,
//   ptbr: ptbr,
// };

import { MdFileDownload } from "react-icons/md";
// import { useState } from "react";

interface PresentationProps {
  isDark: boolean;
}

export default function Presentation({ isDark }: PresentationProps) {
  // const [language, setLanguage] = useState<Language>("en");

  // const toggleLanguage = () => {
  //   setLanguage((prevLanguage) => (prevLanguage === "en" ? "ptbr" : "en"));
  // };

  const mensagem = "Sou Lucas Daher, apaixonado por tecnologia e design.";
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
      setTimeout(() => setIsDeleting(true), 4000);
    } else if (isDeleting && textoDinamico === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(200);
    }

    return () => clearTimeout(timer);
  }, [textoDinamico, isDeleting, , mensagem, typingSpeed, loopNum]);

  return (
    <section
      className={`gradient-background-${
        isDark === false ? "light" : "dark"
      } h-auto w-full transition-all duration-400 ease-in-out`}
    >
      <div className="max-w-[1440px] w-full mx-auto py-16 flex justify-between items-center lg:gap-24">
        {/* Informações de apresentação */}

        <div className="flex flex-col md:flex-col justify-between items-center mx-auto w-full">
          <div className="flex justify-center items-center flex-col gap-4 px-4">
            <h1
              className={`lg:w-[75.5rem] h-[120px] w-96 text-4xl md:text-7xl font-bold text-center ${
                isDark === true ? "text-white" : "text-black-gray"
              }`}
            >
              {textoDinamico}
            </h1>
            <p
              className={`w-full lg:max-w-[950px] lg:w-[950px] text-center font-normal text-base md:text-lg mt-4 transition-all duration-400 ease-in-out ${
                isDark ? "text-white" : "text-black-gray"
              }`}
            >
              Com quase um ano de experiência como{" "}
              <span
                className={`${
                  isDark === true ? "bg-dark-active" : "bg-normal"
                } text-white text-sm uppercase font-bold px-[2px] rounded-md`}
              >
                {" "}
                desenvolvedor front-end
              </span>{" "}
              e{" "}
              <span
                className={`${
                  isDark === true ? "bg-dark-active" : "bg-normal"
                } text-white text-sm uppercase font-bold px-[2px] rounded-md`}
              >
                ux designer
              </span>
              , estou sempre buscando novos desafios e aprimorando minhas
              habilidades para criar interfaces incríveis e funcionais.
            </p>
          </div>

          <ul className="flex md:flex-row flex-col justify-center items-center gap-8 mt-14">
            <li>
              <Default
                // name={messages[language].resumeBtnDownload}
                name="Baixar currículo"
                leftIcon={<MdFileDownload className="w-6 h-6" />}
                gap={2}
                download={true}
                downloadHref="/curriculo.pdf"
                downloadFile="curriculo.pdf"
                title="Clique para realizar o download do meu currículo."
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
