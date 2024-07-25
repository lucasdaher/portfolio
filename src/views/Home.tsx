import React from "react";

import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/Header/Header";
import Presentation from "@/components/Home/Presentation/Presentation";
import Skills from "@/components/Categories/skills";
// import Projects from "@/components/Projects/projects";
import Footer from "@/components/footer";
import Demonstration from "@/components/Home/Demonstration/Demonstration";

AOS.init();

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
        <Presentation isDark={isDark} />

        <Demonstration />

        {/* <Presentation
          isDark={isDark}
          title="Me chamo Lucas Daher"
          data-aos="fade-up"
          data-aos-delay="200"
        /> */}
        <Skills isDark={isDark} />

        {/* <Projects /> */}
      </main>

      <Footer isDark={isDark} />
    </React.Fragment>
  );
}
