import { SquareArrowOutUpRight } from "lucide-react";

export interface Props {}

export default function Projects() {
  const data = [
    {
      id: 1,
      name: "UniAssist",
      desc: "Projeto desenvolvido para um trabalho da faculdade. O projeto é uma plataforma com ferramentas para universitários.",
      tec: "React.JS, Typescript, Nodejs, TailwindCSS, React Router, Shadcn e Vercel.",
    },
    {
      id: 2,
      name: "CrowBank",
      desc: "Projeto desenvolvido para treinar e simular páginas destinadas a instituições de pagamentos.",
      tec: "React.JS, Javascript, Nodejs, TailwindCSS, React Router e Netlify.",
    },
    {
      id: 3,
      name: "Central de Ajuda",
      desc: "Este foi um projeto desenvolvido para o Assistify. O projeto é uma central de ajuda para o usuário tirar as suas dúvidas.",
      tec: "React.JS, Javacript, Nodejs, TailwindCSS, React Router e React Hook Form.",
    },
  ];
  return (
    <>
      <section className="mt-56">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-8 gap-x-4 gap-y-8 place-items-center">
          {data.map((card) => (
            <div
              className="bg-card-bg rounded-md h-auto min-h-96 flex justify-center items-start flex-col p-8"
              key={card.id}
            >
              <img src="" alt="Project Image Background" className="w-96" />

              <h1 className="text-normal font-bold text-3xl leading-10 mt-6">
                {card.name}
              </h1>

              <h2 className="text-white/60 font-medium text-base">
                {card.desc}
              </h2>

              <div className="mt-8">
                <h3 className="text-light text-xl font-bold leading-10">
                  Tecnologias utilizadas
                </h3>
                <div className="text-white/70 font-medium text-base">
                  {card.tec}
                </div>
              </div>

              <div className="flex justify-start items-center gap-2 mt-10">
                <button
                  className="bg-normal rounded-md px-8 py-2 flex justify-center items-center gap-2 leading-none hover:bg-normal-hover transition-all duration-300 hover:translate-y-[-4%]"
                  title="Visualizar repositório"
                  type="button"
                >
                  <SquareArrowOutUpRight width={20} />
                  <span className="leading-none">Repositório</span>
                </button>
                <button
                  className="bg-normal rounded-md px-8 py-2 hover:bg-normal-hover transition-all duration-300 hover:translate-y-[-4%]"
                  title="Visualizar página"
                  type="button"
                >
                  Visualizar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
