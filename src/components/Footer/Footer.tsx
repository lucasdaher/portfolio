import Logo from "../Header/Logo";

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={`${
        isDark ? "bg-black-gray" : "bg-normal"
      } w-full px-12 py-24 mt-48 transition-all duration-300`}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <Logo isDark={isDark} />
        </div>

        <div className="mt-2">
          <p className="font-medium text-white text-sm">
            Todos os direitos reservados para Lucas Daher. &copy;
          </p>
        </div>
      </div>
    </footer>
  );
}
