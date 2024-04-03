import { useEffect, useState } from "react";
import Presentation from "./components/Presentation/presentation";
import Header from "./components/header";
import Skills from "./components/Categories/skills";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleIsDark = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="app">
      <Header isDark={isDark} handleIsDark={handleIsDark} />

      <main className="mt-24">
        <Presentation
          isDark={isDark}
          title="Me chamo Lucas Daher"
          desc="Com quase um ano de experiência como desenvolvedor front-end, estou sempre buscando novos desafios e aprimorando minhas habilidades para criar interfaces incríveis e funcionais."
        />
        <Skills isDark={isDark} />
      </main>
    </div>
  );
}

export default App;
