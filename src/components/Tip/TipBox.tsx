interface TipBox {
  // Adicionar opção para routing e navegação entre páginas.
  tip?: string;
  href?: string;
  buttonStyle?: string;
  spanStyle?: string;
}

export default function TipBox({ tip, href, buttonStyle, spanStyle }: TipBox) {
  return (
    <button
      className={`rounded-full px-4 text-white bg-normal hover:bg-normal-active transition-all duration-400 ease-in-out ${buttonStyle}`}
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
