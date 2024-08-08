import React, { useContext } from "react";

import malvaderbank from "../../../assets/projects/malvaderbank.jpg";
import sosclima from "../../../assets/projects/sosclima.png";
import uniassist from "../../../assets/projects/uniassist.png";

import Marquee from "react-fast-marquee";
import { ThemeContext } from "@/contexts/ThemeContext";

interface MarqueeContentProps {}

export default function MarqueeContent({}: MarqueeContentProps) {
  const { dark } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <Marquee
        pauseOnClick={true}
        speed={30}
        gradient={true}
        gradientColor={`${dark === true ? "#121212" : "#fff"}`}
        className="transition-all duration-400 ease-in-out"
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
      </Marquee>
    </React.Fragment>
  );
}
