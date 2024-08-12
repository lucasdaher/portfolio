import { useLanguage } from "@/hooks/useLanguage";
import { BsStars } from "react-icons/bs";

interface AlertHeaderProps {}

export default function AlertHeader({}: AlertHeaderProps) {
  const { messages } = useLanguage();
  return (
    <header className="pt-6 md:pt-1">
      <div
        className={`w-full flex justify-between items-center 
    bg-normal text-white px-4 py-2 z-20 transition-all duration-400 ease-in-out`}
      >
        <div className="w-full max-w-[1440px] mx-auto flex justify-center items-center text-sm text-center">
          <div className="flex justify-center items-center gap-2">
            <BsStars className="hidden md:flex text-white w-4 h-4 animate-rotate" />
            <span className={`text-white font-medium text-sm`}>
              {messages.alerts.alertHeader}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
