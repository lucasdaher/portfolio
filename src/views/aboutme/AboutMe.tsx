import Header from "@/components/Header/Header";
import React from "react";

interface AboutMeProps {}

export default function AboutMe({}: AboutMeProps) {
  return (
    <React.Fragment>
      <Header homePage={false} />
    </React.Fragment>
  );
}
