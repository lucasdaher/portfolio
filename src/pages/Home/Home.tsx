import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeaderLogo } from "@/components/Header/components/HeaderLogo";
import { HeaderNav } from "@/components/Header/components/HeaderNav";
import { HeaderNavItem } from "@/components/Header/components/HeaderNav/components/HeaderNavItem";
import { useLanguage } from "@/hooks/useLanguage/useLanguage";
import { HeaderOptions } from "@/components/Header/components/HeaderOptions/HeaderOptions";
import { HeaderOptionsMenu } from "@/components/Header/components/HeaderOptions/components/HeaderOptionsMenu";
import { HeaderContainer } from "@/components/Header/components/HeaderContainer/HeaderContainer";
import { Presentation } from "@/components/Presentation";
import { InteractiveContainer } from "@/components/Container/components/InteractiveContainer";
import { SelectProvider } from "@/components/Container/contexts/SelectContext";

export default function Home() {
  const { messages } = useLanguage();
  return (
    <SelectProvider>
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

      <main className="mt-6 md:mt-32">
        <Presentation data-aos="fade-up" data-aos-delay="200" />
        <InteractiveContainer className="mt-24" />
      </main>

      <Footer />
    </SelectProvider>
  );
}
