"use client";

import Image from "next/image";
import foto_hero from "@/assets/foto_hero.webp";
import { motion, useInView } from "framer-motion";
import HeroTextSection from "./HeroTextSection";
import StarsBg from "@/assets/stars-bg.webp";
import GradientBg from "@/assets/hero-gradient.webp";
import StarLight from "@/assets/faststar.png";
import { MoonIcon } from "../icons/Icons";
import HeroAboutMe from "./HeroAboutMe";
import { useRef } from "react";
import HeroBoard from "./HeroBoard";

const Hero = () => {
  // const scrollRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: scrollRef,
  // });

  // const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  // const scale = useTransform(
  //   scrollYProgress,
  //   [0, 0.2, 0.3, 0.4],
  //   [0, 0, 0.5, 1]
  // );
  // const x = useTransform(scrollYProgress, [0, 0.1, 0.4], [0, 0, -300]);
  // const y = useTransform(scrollYProgress, [0, 0.4], [0, 100]);
  // const button1 = useTransform(scrollYProgress, [0, 0.4], [0, 0.8]);
  // const button2 = useTransform(scrollYProgress, [0.2, 0.5], [0, 0.8]);
  // const button3 = useTransform(scrollYProgress, [0.4, 0.7], [0, 0.8]);
  // const button4 = useTransform(scrollYProgress, [0.6, 0.9], [0, 0.8]);
  // const button5 = useTransform(scrollYProgress, [0.7, 0.8], [0, 0.8]);
  // const button6 = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.8]);
  //

  return (
    <motion.section
      id="about"
      className="px-28 pt-[61px] h-full w-full bg-gradient-to-br from-[#131428] from-15% via-[#191b42] via-45% to-[#2E349F]"
      // ref={scrollRef}
    >
      {/* <motion.div
        animate={{
          x: [-1000, 2000],
          y: [-20, 120],
          transition: {
            repeat: Infinity,
            duration: 9,
            ease: "linear",
          },
        }}
      >
        <Image
          src={StarLight}
          alt="Star Light"
          className="absolute w-[69px] h-[72px] -rotate-45"
        />
      </motion.div> */}
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
