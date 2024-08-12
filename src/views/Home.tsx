import Header from "@/components/Header/Header";
import Presentation from "@/components/Home/Presentation/Presentation";
import Demonstration from "@/components/Home/Demonstration/Demonstration";
import Footer from "@/components/Footer/Footer";
import About from "@/components/Home/AboutMe/About";
import Skills from "@/components/Home/Skills/Skills";
import Projects from "@/components/Home/Projects/Projects";

import React from "react";
import AlertHeader from "@/components/Header/AlertHeader";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <React.Fragment>
      <Header homePage={true} />

      <main className="mt-6 md:mt-[45px]">
        <AlertHeader />
        <Presentation data-aos="fade-up" data-aos-delay="200" />
        <Demonstration id="demonstration" />
        <About id="aboutme" />
        <Skills id="skills" />
        <Projects id="projects" />
      </main>

      <Footer />
    </React.Fragment>
  );
}
