import { useEffect, useState } from "react";
// import Presentation from "./components/Presentation/presentation";
import Header from "./components/header";
// import Skills from "./components/Categories/skills";
// import Footer from "./components/footer";

import AOS from "aos";
import "aos/dist/aos.css";
import SocialButton from "./components/Nav/socialButton";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
// import Projects from "./components/Projects/projects";
AOS.init();

function App() {
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
    <div className="app">
      <Header isDark={isDark} handleIsDark={handleIsDark} />

      <main className="mt-12 md:mt-24">
        {/* <Presentation
          isDark={isDark}
          title="Me chamo Lucas Daher"
          data-aos="fade-up"
          data-aos-delay="200"
        /> */}
        {/* <Skills isDark={isDark} /> */}

        {/* <Projects /> */}

        <section className="max-w-[1440px] mx-auto flex justify-center items-center flex-col">
          <h1 className="w-full lg:w-full text-4xl md:text-7xl font-bold text-normal text-center md:text-center mt-4 md:mt-0">
            Volto em breve!
          </h1>
          <p
            className={`w-full max-w-[700px] lg:w-[850px] text-center md:text-center font-medium text-md md:text-lg mt-4 transition-all duration-300 ease-in-out ${
              isDark ? "text-white" : "text-black-gray"
            }`}
          >
            No momento o meu portfólio está sendo atualizado, mas você pode
            conferir minhas outras redes para ver meu trabalho.
          </p>

          <div className="flex justify-center items-center gap-2 mt-8">
            <a
              href="https://github.com/lucasdaher"
              target="_blank"
              rel="noopener noreferrer"
              className="border-none outline-none no-underline leading-none"
            >
              <button
                className="bg-social-btn-bg py-2 px-8 rounded-md group hover:bg-gray transition-all duration-200"
                type="button"
              >
                <FaGithub className="text-white" />
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/lucasdaherdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-none outline-none no-underline leading-none"
            >
              <button
                className="bg-social-btn-bg py-2 px-8 rounded-md group hover:bg-gray transition-all duration-200"
                type="button"
              >
                <FaLinkedin className="text-white" />
              </button>
            </a>

            <a
              href="https://be.net/lucasdaherr"
              target="_blank"
              rel="noopener noreferrer"
              className="border-none outline-none no-underline leading-none"
            >
              <button
                className="bg-social-btn-bg py-2 px-8 rounded-md group hover:bg-gray transition-all duration-200"
                type="button"
              >
                <FaBehance className="text-white" />
              </button>
            </a>
          </div>
        </section>
      </main>

      {/* <Footer isDark={isDark} /> */}
    </div>
  );
}

export default App;
