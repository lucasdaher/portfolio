import { useEffect, useState } from "react";
import Presentation from "./components/Presentation/presentation";
import Header from "./components/header";
import Skills from "./components/Categories/skills";
import Footer from "./components/footer";

import AOS from "aos";
import "aos/dist/aos.css";
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
        <Presentation
          isDark={isDark}
          title="Me chamo Lucas Daher"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <Skills isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
