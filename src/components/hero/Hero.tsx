"use client";

import Image from "next/image";
import foto_hero from "@/assets/foto_hero.webp";
import { motion, useInView } from "framer-motion";
import HeroTextSection from "./HeroTextSection";
import StarsBg from "@/assets/stars-bg.webp";
import GradientBg from "@/assets/hero-gradient.webp";
import { MoonIcon } from "../icons/Icons";
import HeroAboutMe from "./HeroAboutMe";
import HeroBoard from "./HeroBoard";

const Hero = () => {
  //

  return (
    <motion.section id="about" className="px-28 pt-[61px] h-full w-full">
      <div
        className="relative flex mx-auto max-w-[1440px] bg-contain justify-items-center py-20"
        style={{
          backgroundImage: `url(${StarsBg.src})`,
          minHeight: "100vh",
        }}
      >
        <div className="flex flex-col pt-8 relative w-full">
          <motion.div
            className="absolute top-2 right-2"
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
          className="sticky top-[96px] h-full w-full flex justify-center items-start"
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
            className="w-[410px] select-none"
          />
          <Image
            priority
            src={GradientBg}
            alt="Gradient"
            className="absolute top-12 w-full -z-10 select-none"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
