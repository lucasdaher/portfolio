import codeIcon from "../../assets/icons/codeIcon.svg";

interface LogoProps {
  isDark: boolean;
  name?: string;
}

export default function Logo({ isDark, name = "lucasdaher" }: LogoProps) {
  return (
    <div className="hidden lg:flex">
      <picture>
        <source type="image/svg+xml" srcSet={codeIcon} />
        <img src={codeIcon} alt="Code Icon" />
      </picture>
      <h1
        className={`text-xl ${
          isDark === true ? "text-white" : "text-black-gray"
        } transition-all duration-400 ease-in-out`}
      >
        {name}
      </h1>
    </div>
  );
}
