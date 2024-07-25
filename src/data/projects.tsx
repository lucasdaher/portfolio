import sosclima from "../assets/projects/sosclima.png";
import bancomalvader from "../assets/projects/malvaderbank.jpg";

const data = [
  {
    id: 1,
    titulo: "Banco Malvader",
    thumbnail: (
      <img
        src={bancomalvader}
        alt="Banco Malvader Thumbnail"
        className="md:w-[32rem] md:h-[32rem] w-full h-[480px] object-cover object-center rounded-lg"
      />
    ),
    tags: [
      {
        tag: "Projeto Acadêmico",
      },
      {
        tag: "Lógica de Programação",
      },
    ],

    descricao:
      "Este projeto foi desenvolvido para um trabalho da matéria de Lógica de Programação na minha faculdade, o tema era criar um sistema bancário simples utilizando C.",
    link: "/projeto/bancomalvader",
  },
  {
    id: 2,
    titulo: "SOSClima",
    thumbnail: (
      <img
        src={sosclima}
        alt="SOSClima Thumbnail"
        className="md:w-[32rem] md:h-[32rem] w-full h-[480px] object-cover object-center rounded-lg"
      />
    ),
    tags: [
      {
        tag: "Projeto Acadêmico",
      },
      {
        tag: "UX Design",
      },
      {
        tag: "Design",
      },
    ],
    descricao:
      "Este projeto foi desenvolvido para a matéria de Residência Tecnológica da faculdade, o tema era utilizar a tecnologia para resolver problemas climáticos.",
    link: "/projeto/sosclima",
  },
];

export default data;
