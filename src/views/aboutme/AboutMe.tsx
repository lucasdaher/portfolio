import Presentation from "@/components/About/Presentation";
import Header from "@/components/Header/Header";
import React from "react";

interface AboutMeProps {}

export default function AboutMe({}: AboutMeProps) {
  return (
    <React.Fragment>
      <Header homePage={false} />

      <main className="mt-6 md:mt-[45px]">
        <Presentation />
      </main>
    </React.Fragment>
  );
}
