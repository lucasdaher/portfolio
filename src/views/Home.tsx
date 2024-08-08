import Header from "@/components/Header/Header";
import Presentation from "@/components/Home/Presentation/Presentation";
import Demonstration from "@/components/Home/Demonstration/Demonstration";
import Footer from "@/components/Footer/Footer";
import About from "@/components/Home/AboutMe/About";
import Skills from "@/components/Home/Skills/Skills";
import Projects from "@/components/Home/Projects/Projects";

import { ThemeContextProvider } from "@/contexts/ThemeContext";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <ThemeContextProvider>
      <Header />

      <main className="mt-6 md:mt-[45px]">
        <Presentation data-aos="fade-up" data-aos-delay="200" />
        <Demonstration id="demonstration" />
        <About id="aboutme" />
        <Skills id="skills" />
        <Projects id="projects" />
      </main>

      <Footer />
    </ThemeContextProvider>
  );
}
