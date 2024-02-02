"use client";

import Image from "next/image";
import foto_hero from "@/assets/foto_hero.webp";
import { motion } from "framer-motion";
import HeroTextSection from "./HeroTextSection";
import StarsBg from "@/assets/stars-bg.webp";
import GradientBg from "@/assets/hero-gradient.webp";
import { MoonIcon } from "../icons/Icons";
import HeroAboutMe from "./HeroAboutMe";
import HeroBoard from "./HeroBoard";

const Hero = () => {
  //

  return (
    <motion.section
      id="about"
      className="px-[30px] md:px-28 py-7 md:py-20 h-full w-full"
    >
      <div
        className="relative flex flex-col md:flex-row mx-auto md:max-w-[1440px] bg-contain justify-items-center"
        style={{
          backgroundImage: `url(${StarsBg.src})`,
          minHeight: "100vh",
        }}
      >
        <div className="flex flex-col md:pt-8 relative w-full">
          <motion.div
            className="absolute top-28 right-4 md:top-2 md:right-2 opacity-15"
            initial={{
              rotate: -35,
            }}
            animate={{
              rotate: [-35, 10, -35],
              transition: {
                repeat: Infinity,
                duration: 5,
                ease: "linear",
              },
            }}
          >
            <MoonIcon />
          </motion.div>
          <HeroTextSection />
          <HeroAboutMe />
          <HeroBoard />
        </div>
        <motion.div
          className="hidden md:sticky top-[96px] md:h-full w-full md:flex justify-center md:items-start"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.6,
            },
          }}
        >
          <Image
            priority
            src={foto_hero}
            alt="Foto Julian Fontana"
            className="w-48 lg:w-80 xl:w-[410px] select-none z-10"
          />
          <Image
            priority
            src={GradientBg}
            alt="Gradient"
            className="absolute xl:top-12 w-full xl:-z-10 select-none"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
