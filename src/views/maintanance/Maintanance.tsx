import SocialButton from "@/components/Buttons/SocialButton";
import React from "react";

import cape from "../../assets/maintenance-art.svg";

interface MaintenanceProps {}

export default function Maintenance({}: MaintenanceProps) {
  const title: string = "Manutenção | Lucas Daher";
  document.title = title;
  return (
    <React.Fragment>
      {/* <Header isDark={isDark} handleDark={handleIsDark} /> */}
      <main className="flex flex-col justify-center items-center mt-36 px-4">
        <img src={cape} alt="Maintenance Cape Art" className="w-96 h-96" />
        <h1 className="text-normal text-5xl font-sora font-bold mt-4">Oops!</h1>
        <p
          className={`text-white/80 text-lg font-sora font-normal mt-4 text-center transition-all duration-400 ease-in-out`}
        >
          O site está indisponível para manutenção, voltamos logo!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16 mb-32">
          <SocialButton
            socialName="github"
            href="https://github.com/lucasdaher"
          />
          <SocialButton
            socialName="behance"
            href="https://be.net/lucasdaherr"
          />
          <SocialButton
            socialName="linkedin"
            href="https://linkedin.com/in/lucasdaherdev"
          />
          <SocialButton
            socialName="instagram"
            href="https://instagram.com/daher.code"
          />
        </div>
      </main>
    </React.Fragment>
  );
}
