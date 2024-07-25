import React from "react";

import "../../../index.css";

import malvaderbank from "../../../assets/projects/malvaderbank.jpg";
import sosclima from "../../../assets/projects/sosclima.png";
import uniassist from "../../../assets/projects/uniassist.png";
import doityarte02 from "../../../assets/projects/doity-arte-02.png";
import hamburguer from "../../../assets/projects/Hamburguer.png";
import heineken from "../../../assets/projects/Heineken.png";

import Marquee from "react-fast-marquee";

interface DemonstrationProps {
  isDark: boolean;
}

export default function Demonstration({ isDark }: DemonstrationProps) {
  return (
    <React.Fragment>
      <section className="w-full mt-12">
        <div className="w-full">
          <Marquee
            pauseOnClick={true}
            speed={30}
            gradient={true}
            gradientColor={`${isDark === true ? "#121212" : "#fff"}`}
          >
            <img
              loading="lazy"
              src={malvaderbank}
              alt="Malvader Bank Thumbnail"
              className="md:w-96 md:h-96 w-40 h-40 object-cover object-center rounded-lg m-6"
            />
            <img
              loading="lazy"
              src={sosclima}
              alt="SOSClima Thumbnail"
              className="md:w-96 md:h-96 w-40 h-40 object-cover object-center rounded-lg m-6"
            />
            <img
              loading="lazy"
              src={uniassist}
              alt="UniAssist Thumbnail"
              className="md:w-96 md:h-96 w-40 h-40 object-cover object-center rounded-lg m-6"
            />
            <img
              loading="lazy"
              src={doityarte02}
              alt="Doity Thumbnail"
              className="md:w-96 md:h-96 w-40 h-40 object-cover object-center rounded-lg m-6"
            />
            <img
              loading="lazy"
              src={hamburguer}
              alt="Hamburguer Social Media Post"
              className="md:w-96 md:h-96 w-40 h-40 object-cover object-center rounded-lg m-6"
            />
            <img
              loading="lazy"
              src={heineken}
              alt="Heineken Social Media Post"
              className="md:w-96 md:h-96 w-40 h-40 object-cover object-center rounded-lg m-6"
            />
            <img
              loading="lazy"
              src={uniassist}
              alt="UniAssist Thumbnail"
              className="md:w-96 md:h-96 w-40 h-40 object-cover object-center rounded-lg m-6"
            />
          </Marquee>
        </div>
      </section>
    </React.Fragment>
  );
}
