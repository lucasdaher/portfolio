import Presentation from "@/components/Home/Presentation/Presentation";
import Demonstration from "@/components/Home/Demonstration/Demonstration";
import Footer from "@/components/Footer/Footer";
import About from "@/components/Home/AboutMe/About";
import Skills from "@/components/Home/Skills/Skills";
import Projects from "@/components/Home/Projects/Projects";

import React from "react";
import AlertHeader from "@/components/heading/AlertHeader";
import { Header } from "@/components/Header";
import { HeaderLogo } from "@/components/Header/components/HeaderLogo";
import { HeaderNav } from "@/components/Header/components/HeaderNav";
import { HeaderNavItem } from "@/components/Header/components/HeaderNav/components/HeaderNavItem";
import { useLanguage } from "@/hooks/useLanguage";
import { HeaderOptions } from "@/components/Header/components/HeaderOptions/HeaderOptions";
import { HeaderOptionsMenu } from "@/components/Header/components/HeaderOptions/components/HeaderOptionsMenu";
import { HeaderContainer } from "@/components/Header/components/HeaderContainer/HeaderContainer";

interface HomeProps {}

export default function Home({}: HomeProps) {
  const { messages } = useLanguage();
  return (
    <React.Fragment>
      <Header>
        <HeaderLogo />
        <HeaderContainer>
          <HeaderNav separator>
            <HeaderNavItem href="#aboutme">
              {messages.buttons.sections.header.about}
            </HeaderNavItem>
            <HeaderNavItem href="#skills">
              {messages.buttons.sections.header.skills}
            </HeaderNavItem>
            <HeaderNavItem href="#projects">
              {messages.buttons.sections.header.projects}
            </HeaderNavItem>
          </HeaderNav>

          <HeaderOptions className="ml-6 flex justify-center items-center">
            <HeaderOptionsMenu />
          </HeaderOptions>
        </HeaderContainer>
      </Header>

      <main className="mt-6 md:mt-[52px]">
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
