import Default from "@/components/Buttons/Default";
import SocialButton from "@/components/Buttons/SocialButton";

// import { Messages, Language } from "@/locales/languages";

// import en from "../../../locales/en.json";
// import ptbr from "../../../locales/ptbr.json";

// const messages: Record<Language, Messages> = {
//   en: en,
//   ptbr: ptbr,
// };

import Capa from "../../../assets/capa.svg";

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

  return (
    <section
      className={`gradient-background-${
        isDark === false ? "light" : "dark"
      } h-auto w-full transition-all duration-400 ease-in-out`}
    >
      <div className="max-w-[1440px] w-full mx-auto py-16 flex justify-between items-center lg:gap-24">
        {/* Informações de apresentação */}
        <div>
          <div className="flex justify-center items-start flex-col gap-4">
            <h1
              className={`w-96 lg:w-[550px] text-5xl md:text-7xl font-bold text-center md:text-left mt-4 md:mt-0 ${
                isDark === true ? "text-white" : "text-black-gray"
              }`}
            >
              Olá! Me chamo Lucas Daher
            </h1>
            <p
              className={`w-full max-w-96 lg:w-[450px] text-center md:text-left font-normal text-base md:text-lg mt-4 transition-all duration-400 ease-in-out ${
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

          <ul className="flex justify-center items-center gap-8 mt-14">
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

        {/* Imagem */}
        <div>
          <picture>
            <source type="image/svg+xml" srcSet={Capa} />
            <img
              src={Capa}
              alt="Lucas Daher Picture"
              className="w-[80%] lg:w-full"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
