import React from "react";

import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/Header/Header";
import Presentation from "@/components/Presentation/presentation";
import Skills from "@/components/Categories/skills";
import Projects from "@/components/Projects/projects";
import Footer from "@/components/footer";

AOS.init();

interface HomeProps {}

export default function Home({}: HomeProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const isDarkLocalStorage = localStorage.getItem("darkMode");
    return isDarkLocalStorage ? !!JSON.parse(isDarkLocalStorage) : false;
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

      <main className="mt-12 md:mt-24">
        <Presentation
          isDark={isDark}
          title="Me chamo Lucas Daher"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <Skills isDark={isDark} />

        <Projects />
      </main>

      <Footer isDark={isDark} />
    </React.Fragment>
  );
}
