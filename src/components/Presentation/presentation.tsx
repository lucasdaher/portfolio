import innovation from "../../assets/innovation-animate.svg";

interface PresentationProps {
  title?: string;
  handleIsDark?: () => void;
  isDark: boolean;
}

const Presentation = ({ title, isDark }: PresentationProps) => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 md:gap-10 lg:gap-36 md:px-12">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="w-96 lg:w-[450px] text-5xl md:text-7xl font-bold text-normal text-center md:text-left mt-4 md:mt-0">
            {title}
          </h1>
          <p
            className={`w-full max-w-96 lg:w-[450px] text-center md:text-left font-medium text-md md:text-lg mt-4 transition-all duration-300 ease-in-out ${
              isDark ? "text-white" : "text-black-gray"
            }`}
          >
            Com quase um ano de experiência como desenvolvedor{" "}
            <span className="bg-normal text-white text-sm uppercase font-bold px-[2px] rounded-md">
              front-end
            </span>
            , estou sempre buscando novos desafios e aprimorando minhas
            habilidades para criar interfaces incríveis e funcionais.
          </p>
          <button
            type="button"
            className="px-8 py-2 bg-normal text-white font-semibold rounded-md mt-8 hover:bg-normal-hover transition-all duration-200 
            hover:transform hover:translate-y-[-4%]"
          >
            Conhecer projetos
          </button>
        </div>
        <img
          src={innovation}
          alt="Innovation and Creations"
          className="w-[80%] lg:w-[430px]"
        />
        {/* <a
          href="https://storyset.com/technology"
          className="no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
      </div>
    </section>
  );
};

export default Presentation;
