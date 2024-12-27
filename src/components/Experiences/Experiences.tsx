import { ComponentProps } from "react";

interface ExperiencesProps extends ComponentProps<"div"> {}

export function Experiences({ ...props }: ExperiencesProps) {
  const experienciesData = [
    {
      id: 1,
      role: "Designer na",
      company: "Assessoria Alpha",
      time: "Setembro de 2024 - O momento",
      imgUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQH3Uwq55BWgag/company-logo_200_200/company-logo_200_200/0/1707227831710?e=1743638400&v=beta&t=KGXBNclxyfBziht7KRbvUoO6txq9QM0Ml9Rcjy9FnXU",
      altImg: "Logo da empresa Assessoria Alpha.",
    },
    {
      id: 2,
      role: "Desenvolvedor Front-end na",
      company: "Codewynn",
      time: "Julho de 2024 - O momento",
      imgUrl:
        "https://media.licdn.com/dms/image/v2/D4E0BAQG2tn7YBhj0LQ/company-logo_100_100/company-logo_100_100/0/1730255398526/codewynn_logo?e=1743638400&v=beta&t=BIcTiYrfupKE99z5l3tZrXU4eKaHl2IO0atKqUKE4oY",
      altImg: "Logo da empresa Codewynn",
    },
    {
      id: 3,
      role: "Desenvolvedor Front-end no",
      company: "Br.ino",
      time: "Agosto de 2024 - Dezembro de 2024",
      imgUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQGxZYdvDxATXA/company-logo_200_200/company-logo_200_200/0/1721322301809/brino_logo?e=1743638400&v=beta&t=MYatj3YKbsk18KTnFinltu0yKbXAizeT2Hto4A-Tq-U",
      altImg: "Logo da empresa Br.ino",
    },
    {
      id: 4,
      role: "UI/UX Designer no",
      company: "NeutralRP",
      time: "Julho de 2023 - Dezembro de 2023",
      imgUrl:
        "https://media.discordapp.net/attachments/1154353483739308063/1176961840006307930/discordlogo.png?ex=676efaa1&is=676da921&hm=c5019915222908304c0aa91db49ee7a0df35e164cd7237a96afc4632ba6f2509&=&format=webp&quality=lossless&width=1194&height=1194",
      altImg: "Logo da empresa NeutralRP",
    },
    {
      id: 5,
      role: "Desenvolvedor Front-end no",
      company: "Assistify",
      time: "Outubro de 2023 - Abril de 2024",
      imgUrl: "../../../public/assistify.svg",
      altImg: "Logo da empresa Assistify Solutions",
    },
  ];
  return (
    <div
      className="max-w-[1440px] mx-auto w-10/12 flex justify-center items-center"
      {...props}
    >
      <div className="mx-auto w-10/12 flex flex-col justify-center items-center gap-10">
        <div
          className="bg-black-gray bg-opacity-30 backdrop-blur-[10px] p-10 rounded-lg border-[0.5px] border-[#9c9c9c]/30 
        w-full flex flex-row justify-between items-start gap-6"
        >
          <div className="flex flex-col justify-center items-start gap-2 w-1/3">
            <h1 className="font-normal tracking-tight text-3xl">
              Experiências
            </h1>
            <p className="font-light tracking-tight text-base text-white/50">
              Confira todas as minhas experiências profissionais como
              Desenvolvedor, UX Designer e Designer Gráfico.
            </p>
          </div>

          <div className="flex flex-col justify-center items-start gap-8 w-auto pl-8 border-l-[0.5px] border-[#9c9c9c]/30">
            {experienciesData.map((experience) => (
              <div key={experience.id}>
                <div className="flex justify-center items-center gap-4 w-full">
                  <div>
                    <img
                      src={experience.imgUrl}
                      alt={experience.altImg}
                      className="min-w-16 max-w-16 w-full rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <header>
                    <h1 className="font-light text-lg text-white">
                      {experience.role}{" "}
                      <strong className="font-semibold text-blue-200">
                        {experience.company}
                      </strong>
                    </h1>
                    <p className="font-normal text-sm text-white/50">
                      {experience.time}
                    </p>
                  </header>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
