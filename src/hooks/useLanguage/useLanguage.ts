import { useState, useEffect } from "react";
import { Messages, Language } from "@/locales/languages";
import en from "@/locales/langs/en.json";
import ptbr from "@/locales/langs/ptbr.json";

const messages: Record<Language, Messages> = {
  en: en,
  ptbr: ptbr,
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const langStorage = localStorage.getItem("lang");
    return langStorage ? (JSON.parse(langStorage) as Language) : "ptbr";
  });

  const updateLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("lang", JSON.stringify(newLanguage));
    window.location.reload();
  };

  useEffect(() => {
    const langStorage = localStorage.getItem("lang");
    if (langStorage) {
      setLanguage(JSON.parse(langStorage) as Language);
    }
  }, []);

  return {
    language,
    messages: messages[language],
    updateLanguage,
  };
};
