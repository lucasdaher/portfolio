import React from "react";

import { useEffect, useState } from "react";

import Header from "@/components/Header/Header";
import Presentation from "@/components/Home/Presentation/Presentation";
import Demonstration from "@/components/Home/Demonstration/Demonstration";
import Footer from "@/components/Footer/Footer";

interface HomeProps {}

export default function Home({}: HomeProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const isDarkLocalStorage = localStorage.getItem("darkMode");
    return isDarkLocalStorage ? !!JSON.parse(isDarkLocalStorage) : true;
  });

  const handleIsDark = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark));
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <React.Fragment>
      <Header isDark={isDark} handleDark={handleIsDark} />

      <main className="mt-6 md:mt-[45px]">
        <Presentation isDark={isDark} data-aos="fade-up" data-aos-delay="200" />
        <Demonstration isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
    </React.Fragment>
  );
}
