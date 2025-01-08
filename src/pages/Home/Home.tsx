import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeaderLogo } from "@/components/Header/components/HeaderLogo";
import { HeaderOptionsLang } from "@/components/Header/components/HeaderOptions/components/HeaderOptionsLang";
import { HeaderNav } from "@/components/Header/components/HeaderNav";
import { HeaderOptions } from "@/components/Header/components/HeaderOptions/HeaderOptions";
import { HeaderContainer } from "@/components/Header/components/HeaderContainer/HeaderContainer";
import { Presentation } from "@/components/Presentation";
import { InteractiveContainer } from "@/components/Container/components/InteractiveContainer";
import { SelectProvider } from "@/components/Container/contexts/SelectContext";

import AOS from "aos";
import "aos/dist/aos.css";
import { AlertCircle, AlertTriangle } from "lucide-react";
AOS.init();

export default function Home() {
  return (
    <SelectProvider>
      <Header>
        <HeaderLogo />
        <HeaderContainer>
          <HeaderNav>
            <HeaderOptions>
              <HeaderOptionsLang />
            </HeaderOptions>
          </HeaderNav>
        </HeaderContainer>
      </Header>

      <main className="mt-20 md:mt-32">
        <Presentation data-aos="fade-right" data-aos-delay="200" />

        <section
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-[1440px] w-11/12 lg:w-10/12 mx-auto bg-black-dark bg-opacity-20 border-[0.5px] border-gray-dark border-opacity-20 backdrop-blur-xl rounded-lg px-2 py-2 md:px-8 md:py-4 mt-12 lg:mt-24 flex flex-col md:flex-row justify-start items-center gap-4 h-full"
        >
          <AlertCircle className="w-6 h-6 text-blue-500 animate-rotate md:animate-ia mt-2 md:mt-0" />
          <p className="leading-4 tracking-tight text-blue-50/80 font-normal text-xs md:text-base md:leading-none text-center md:text-left mb-2 md:mb-0">
            As imagens de projetos estão sendo mostradas incorretamente, estou
            trabalhando para corrigir este problema o quanto antes!
          </p>
        </section>

        <InteractiveContainer
          className="mt-6 lg:mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </main>

      <Footer />
    </SelectProvider>
  );
}
