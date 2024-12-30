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
        <InteractiveContainer
          className="mt-12 lg:mt-24"
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </main>

      <Footer />
    </SelectProvider>
  );
}
