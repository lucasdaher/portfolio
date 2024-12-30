import { Link } from "react-router-dom";

import React from "react";

import { useLanguage } from "@/hooks/useLanguage/useLanguage";

export default function NotFound() {
  const { messages } = useLanguage();
  return (
    <React.Fragment>
      <main className="flex flex-col justify-center items-center mt-36 px-4">
        <h1 className="text-blue-500 text-5xl font-sora font-bold">
          {messages.errorPage.title}
        </h1>
        <p
          className={`text-white/80 text-lg font-sora font-normal mt-4 text-center transition-all duration-400 ease-in-out`}
        >
          {messages.errorPage.desc}
        </p>
        <Link
          to={`/`}
          className="mt-8 group hover:text-light-active transition-all duration-200 ease-in-out"
        >
          <button className="bg-black-darker bg-opacity-30 backdrop-blur-xl border border-gray-dark border-opacity-30 rounded-full px-8 py-4 text-white text-center text-sm md:text-base font-sora font-semibold md:font-normal group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-200 ease-in-out">
            {messages.errorPage.buttons.returnToHome}
          </button>
        </Link>
        {/* Footer options */}
        <ul className="flex flex-col md:flex-row justify-center items-center gap-8 mt-36">
          <Link
            to={`/`}
            className={`text-white/40 hover:text-white transition-all duration-200 ease-in-out`}
          >
            <li className="text-center text-sm font-sora font-light">
              {messages.errorPage.buttons.projects}
            </li>
          </Link>
          <Link
            to={`/`}
            className={`text-white/40 hover:text-white transition-all duration-200 ease-in-out`}
          >
            <li className="text-center text-sm font-sora font-light">
              {messages.errorPage.buttons.skills}
            </li>
          </Link>
          <Link
            to={`/`}
            className={`text-white/40 hover:text-white transition-all duration-200 ease-in-out`}
          >
            <li className="text-center text-sm font-sora font-light">
              {messages.errorPage.buttons.contact}
            </li>
          </Link>
          <Link
            to={`/aboutme`}
            className={`text-white/40 hover:text-white transition-all duration-200 ease-in-out`}
          >
            <li className="text-center text-sm font-sora font-light">
              {messages.errorPage.buttons.aboutme}
            </li>
          </Link>
        </ul>
      </main>
    </React.Fragment>
  );
}
