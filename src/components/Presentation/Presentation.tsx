import React from "react";

import profilePhoto from "@/assets/profile/lucasdaher-profile-portf.png";

import { useLanguage } from "@/hooks/useLanguage/useLanguage";
import { Button } from "../Button";
import { ButtonText } from "../Button/components/ButtonText";
import { ButtonIcon } from "../Button/components/ButtonIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Presentation() {
  const { messages } = useLanguage();
  return (
    <React.Fragment>
      <header className="max-w-[1440px] mx-auto w-full lg:w-10/12 px-2 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-0">
          <picture className="flex justify-center items-center">
            <source type="svg" srcSet={profilePhoto} />
            <img
              src={profilePhoto}
              alt="Imagem de perfil do desenvolvedor front-end e ux designer Lucas Daher."
              className="rounded-full hidden lg:inline-block lg:w-5/6"
            />
          </picture>

          <div className="flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-2">
            {/* Introduction */}
            <div className="flex flex-row justify-center lg:justify-start items-center gap-2">
              <span className="text-sm lg:text-base animate-rotate text-center lg:text-left">
                👋🏻
              </span>
              <h2 className="text-sm lg:text-base font-light text-white/70 text-center lg:text-left">
                {messages.titles.sections.presentation.hello}
              </h2>
            </div>
            {/* Main Titles */}
            <h1 className="text-5xl lg:text-8xl font-bold font-fraunces text-white text-center lg:text-left">
              {messages.titles.sections.presentation.title}
            </h1>
            <p className="text-sm text-white/70 font-light text-center lg:text-left">
              {messages.titles.sections.presentation.desc}
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-4">
              <a
                href="/curriculo.pdf"
                rel="noopener noreferrer"
                target="_blank"
                download="curriculo.pdf"
              >
                <Button
                  size="default"
                  className="bg-black-darker bg-opacity-30 backdrop-blur-xl border-[0.5px] border-gray-dark border-opacity-20 text-white hover:text-white hover:bg-black-dark hover:bg-opacity-90 hover:scale-105"
                >
                  <ButtonText textSize="base">
                    {messages.buttons.sections.presentation.resumeBtnDownload}
                  </ButtonText>
                </Button>
              </a>

              <div className="flex justify-center items-center gap-2">
                <Link
                  to={`https://linkedin.com/in/lucasdaherdev`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button size="default" className="px-2 hover:scale-110">
                    <ButtonIcon>
                      <FaLinkedin className="w-6 h-6 fill-current" />
                    </ButtonIcon>
                  </Button>
                </Link>

                <Link
                  to={`https://github.com/lucasdaher`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button size="default" className="px-2 hover:scale-110">
                    <ButtonIcon>
                      <FaGithub className="w-6 h-6 fill-current" />
                    </ButtonIcon>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
