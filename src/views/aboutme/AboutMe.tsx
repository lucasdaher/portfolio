import { Presentation } from "@/components/Presentation";
import React from "react";

interface AboutMeProps {}

export default function AboutMe({}: AboutMeProps) {
  return (
    <React.Fragment>
      <main className="mt-6 md:mt-[45px]">
        <Presentation />
      </main>
    </React.Fragment>
  );
}
