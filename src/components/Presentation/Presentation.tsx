import React from "react";

import profilePhoto from "../../assets/profile/lucasdaher-profile-portf.png";

export function Presentation() {
  return (
    <React.Fragment>
      <header className="max-w-[1440px] mx-auto w-10/12">
        <div className="flex flex-row justify-center items-center">
          <picture>
            <source />
            <img
              src={profilePhoto}
              alt="Imagem de perfil do desenvolvedor front-end e ux designer Lucas Daher."
              className="rounded-full w-4/5"
            />
          </picture>

          <div className="flex flex-col justify-center items-start gap-2">
            <div className="flex flex-row justify-start items-center gap-2">
              <span className="text-base">👋🏻</span>
              <h2 className="text-base font-light text-white/70">
                Olá, meu nome é
              </h2>
            </div>
            <h1 className="text-8xl font-bold font-fraunces">Lucas Daher</h1>
            <p className="text-base text-white/80 font-light">
              Sou estudante de Análise e Desenvolvimento de Sistemas pela
              Universidade Católica de Brasília e atualmente tenho experiência
              com desenvolvimento front-end e ui/ux design.
            </p>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
