import Image from "next/image";
import React from "react";
import Head from "@/assets/head.webp";
import { GithubIcon, LinkedinLogo } from "../icons/Icons";
import { FooterGradient } from "@/assets/footerGradient";

const Footer = () => {
  return (
    <>
      <footer className="px-12 flex flex-col md:flex-row items-center gap-4 py-5 bg-[#18162A] w-full md:py-20 md:justify-center md:gap-9 relative overflow-hidden">
        <div className="bg-[#F87171] w-fit rounded-full px-10 py-3 md:px-12 md:py-4">
          <Image
            src={Head}
            alt="Julian Fontana"
            className="w-[104px] md:w-[124px] h-auto"
          />
        </div>
        <div className="flex flex-col items-center gap-4 md:items-start">
          <p className="text-[#fff] font-extrabold text-3xl lg:text-5xl">
            JULIAN FONTANA
          </p>
          <p className="text-[#F87171] font-semibold text-lg lg:text-xl">
            FRONT END DEVELOPER
          </p>
          <span className="flex gap-4">
            <a href="google.com">
              <LinkedinLogo className="text-white hover:text-[#fb8122] w-5 h-5" />
            </a>
            <a href="google.com">
              <GithubIcon className="text-white hover:text-[#fb8122] w-5 h-5" />
            </a>
          </span>
          <a
            href="google.com"
            className="w-[85%] bg-[#fb8122] text-white text-lg font-bold py-2 text-center md:text-xl md:w-fit md:px-9"
          >
            Contactarme
          </a>
          <p className="text-[#fff] font-semibold text-sm">
            julianfontanadev@gmail.com
          </p>
        </div>
        <FooterGradient className="absolute md:-right-8 -top-24 md:top-0 md:w-screen z-10" />
      </footer>
      <div className="bg-gradient-to-r from-[#fb7171] to-[#181762] w-screen h-0.5" />
    </>
  );
};

export default Footer;
