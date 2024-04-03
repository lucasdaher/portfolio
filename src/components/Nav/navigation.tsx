const Navigation = () => {
  return (
    <ul className="flex justify-center items-center gap-4">
      <li className="text-white font-medium text-xs hover:text-normal-hover transition-all duration-200">
        <a href="#start">Início</a>
      </li>
      <li className="text-white font-medium text-xs hover:text-normal-hover transition-all duration-200">
        <a href="#skills">Habilidades</a>
      </li>
      <li className="text-white font-medium text-xs hover:text-normal-hover transition-all duration-200">
        <a href="#projects">Projetos</a>
      </li>
    </ul>
  );
};

export default Navigation;
