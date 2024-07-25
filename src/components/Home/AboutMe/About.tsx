import { ArrowRight } from "lucide-react";

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  return (
    <section className="mt-24 md:mt-32 px-4">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col justify-center items-start">
        <div className="">
          <h1
            className={`w-full h-auto text-3xl md:text-7xl font-bold text-center md:text-left ${
              isDark === true ? "text-white" : "text-black-gray"
            }`}
          >
            <span className={`text-normal`}>Desenvolvendo e desenhando</span>{" "}
            telas que geram experiências únicas para os usuários
          </h1>
          <p
            className={`w-full lg:max-w-none lg:w-full text-justify font-normal text-base md:text-lg mt-12 transition-all duration-400 ease-in-out ${
              isDark ? "text-white/80" : "text-black-gray/80"
            }`}
          >
            Com quase um ano de experiência em{" "}
            <strong
              className={`${
                isDark === true ? "text-white/90" : "text-black-gray/80"
              }`}
            >
              desenvolvimento front-end
            </strong>{" "}
            e{" "}
            <strong
              className={`${
                isDark === true ? "text-white/90" : "text-black-gray/80"
              }`}
            >
              ux design
            </strong>
            , curso atualmente o segundo semestre de{" "}
            <strong
              className={`${
                isDark === true ? "text-white/90" : "text-black-gray/80"
              }`}
            >
              Análise e Desenvolvimento de Sistemas
            </strong>
            . Meu contato com computadores e programação vem desde cedo, mas
            retomei a prática em 2023, após uma pausa de alguns anos. Durante
            esse período, entre 2022 e 2023, mergulhei na área de{" "}
            <strong
              className={`${
                isDark === true ? "text-white/90" : "text-black-gray/80"
              }`}
            >
              UI/UX Design
            </strong>
            , aprofundando meus conhecimentos e conquistando projetos. Em 2024,
            minha expertise em Figma me destacou na faculdade, onde tive a
            oportunidade de ministrar aulas da ferramenta para auxiliar os
            alunos em um trabalho passado pelo professor na matéria de
            Experiência do Usuário.
          </p>

          <button className="mt-16 flex justify-center items-center gap-2 group hover:text-normal">
            <span
              className={`${
                isDark === true ? "text-white" : "text-black-gray"
              } font-medium leading-none h-auto group-hover:text-normal`}
            >
              Ver minha biografia completa
            </span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
