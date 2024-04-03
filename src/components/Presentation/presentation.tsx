import innovation from "../../assets/innovation-animate.svg";

interface PresentationProps {
  title?: string;
  desc?: string;
  handleIsDark?: () => void;
  isDark: boolean;
}

const Presentation = ({ title, desc, isDark }: PresentationProps) => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="flex justify-center items-center gap-36">
        <div className="flex flex-col justify-center items-start">
          <h1 className="w-[450px] text-7xl font-bold text-normal">{title}</h1>
          <p
            className={`w-[450px] text-left font-medium text-lg mt-4 transition-all duration-300 ease-in-out ${
              isDark ? "text-white" : "text-black-gray"
            }`}
          >
            {desc}
          </p>
          <button
            type="button"
            className="px-8 py-2 bg-normal text-white font-semibold rounded-md mt-8 hover:bg-normal-hover transition-all duration-200 
            hover:transform hover:translate-y-[-4%]"
          >
            Conhecer projetos
          </button>
        </div>
        <a
          href="https://storyset.com/technology"
          className="no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={innovation}
            alt="Innovation and Creations"
            className="w-[430px]"
          />
        </a>
      </div>
    </section>
  );
};

export default Presentation;
