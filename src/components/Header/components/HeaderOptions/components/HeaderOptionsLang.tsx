import { Button } from "@/components/Button";
import { ButtonText } from "@/components/Button/components/ButtonText";
import { useLanguage } from "@/hooks/useLanguage/useLanguage";
import React from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "rounded-full bg-black-darker backdrop-blur-xl px-1 py-0 lg:px-2 lg:py-1 h-auto border-[0.5px] border-opacity-30 border-gray-dark transition-all duration-200 ease-in-out",
  variants: {
    selected: {
      true: "bg-white hover:bg-white cursor-not-allowed",
      false: "hover:bg-gray-dark hover:bg-opacity-5 hover:scale-110",
    },
  },
  defaultVariants: {
    selected: false,
  },
});

export function HeaderOptionsLang() {
  const { language, updateLanguage } = useLanguage();
  return (
    <React.Fragment>
      <div className="flex justify-center items-center gap-2">
        <Button
          className={button({ selected: language === "ptbr" })}
          onClick={() => updateLanguage("ptbr")}
        >
          <ButtonText textSize="xl">🇧🇷</ButtonText>
        </Button>
        <Button
          className={button({ selected: language === "en" })}
          onClick={() => updateLanguage("en")}
        >
          <ButtonText textSize="xl">🇺🇸</ButtonText>
        </Button>
      </div>
    </React.Fragment>
  );
}
