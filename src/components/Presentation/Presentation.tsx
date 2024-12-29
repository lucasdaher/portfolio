import React from "react";

import profilePhoto from "../../assets/profile/lucasdaher-profile-portf.png";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "../Button";
import { ButtonText } from "../Button/components/ButtonText";
import { ButtonIcon } from "../Button/components/ButtonIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Presentation() {
  const { messages } = useLanguage();
  return (
    <React.Fragment>
      <header className="max-w-[1440px] mx-auto w-10/12">
        <div className="flex flex-row justify-center items-center">
          <picture>
            <source />
            <img
              src={profilePhoto}
              alt="Imagem de perfil do desenvolvedor front-end e ux designer Lucas Daher."
              className="rounded-full w-5/6"
            />
          </picture>

          <div className="flex flex-col justify-center items-start gap-2">
            <div className="flex flex-row justify-start items-center gap-2">
              <span className="text-base animate-rotate">👋🏻</span>
              <h2 className="text-base font-light text-white/70">
                {messages.titles.sections.presentation.hello}
              </h2>
            </div>
            <h1 className="text-8xl font-bold font-fraunces">
              {messages.titles.sections.presentation.title}
            </h1>
            <p className="text-sm text-white/70 font-light">
              {messages.titles.sections.presentation.desc}
            </p>

            <div className="flex justify-center items-center gap-4 mt-4">
              <a
                href="/curriculo.pdf"
                rel="noopener noreferrer"
                target="_blank"
                download="curriculo.pdf"
              >
                <Button
                  size="default"
                  className="bg-black-gray/30 backdrop-blur-xl border-[0.5px] border-[#9c9c9c]/30 text-white hover:text-white hover:bg-blue-500"
                >
                  <ButtonText textSize="base">
                    {messages.buttons.sections.presentation.resumeBtnDownload}
                  </ButtonText>
                </Button>
              </a>

              <div className="flex justify-center items-center gap-2">
                <Link
                  to={`https://linkedin.com/in/lucasdaherdev`}
                  target="_blank"
                >
                  <Button size="default" className="px-2 hover:scale-110">
                    <ButtonIcon>
                      <FaLinkedin className="w-6 h-6 fill-current" />
                    </ButtonIcon>
                  </Button>
                </Link>

                <Link to={`https://github.com/lucasdaher`} target="_blank">
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
