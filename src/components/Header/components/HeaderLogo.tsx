import { Link } from "react-router-dom";

export function HeaderLogo() {
  return (
    <Link
      to={`/`}
      className="flex justify-center items-center gap-2 no-underline hover:scale-105 hover:transform transition-all duration-400"
    >
      <h1 className="text-white text-base lg:text-xl font-medium tracking-normal h-6 w-auto transition-all duration-200 ease-in-out">
        lucasdaher
      </h1>
    </Link>
  );
}
