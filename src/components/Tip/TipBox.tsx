interface TipBox {
  // Adicionar opção para routing e navegação entre páginas.
  tip?: string;
  href?: string;
  buttonStyle?: string;
  spanStyle?: string;
  titleButton?: string;
  onClick?: () => void;
}

export default function TipBox({
  tip,
  href,
  buttonStyle = "bg-normal hover:bg-normal-active",
  spanStyle,
  titleButton,
  onClick,
}: TipBox) {
  return (
    <button
      className={`rounded-full px-4 text-white transition-all duration-400 ease-in-out ${buttonStyle}`}
      title={titleButton}
      onClick={onClick}
    >
      {href === null ? (
        <span className={`text-xs ${spanStyle}`}>{tip}</span>
      ) : (
        <span className={`text-xs ${spanStyle}`}>
          <a
            href={href}
            className="no-underline"
            target="_blank"
            rel="noopener norefferer"
          >
            {tip}
          </a>
        </span>
      )}
    </button>
  );
}
