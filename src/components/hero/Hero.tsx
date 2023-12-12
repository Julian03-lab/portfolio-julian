"use client";

import Image from "next/image";
import foto_hero from "@/assets/foto_hero.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MainButton from "../MainButton";
import HeroTextSection from "./HeroTextSection";
import StarsBg from "@/assets/stars-bg.webp";
import GradientBg from "@/assets/hero-gradient.webp";
import { MoonIcon } from "../icons/Icons";

const Hero = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4],
    [0, 0, 0.5, 1]
  );
  const x = useTransform(scrollYProgress, [0, 0.1, 0.4], [0, 0, -300]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 100]);
  const button1 = useTransform(scrollYProgress, [0, 0.4], [0, 0.8]);
  const button2 = useTransform(scrollYProgress, [0.2, 0.5], [0, 0.8]);
  const button3 = useTransform(scrollYProgress, [0.4, 0.7], [0, 0.8]);
  const button4 = useTransform(scrollYProgress, [0.6, 0.9], [0, 0.8]);
  const button5 = useTransform(scrollYProgress, [0.7, 0.8], [0, 0.8]);
  const button6 = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.8]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4],
    ["#E3E0DD", "#E3E0DD", "#08090A"]
  );

  const buttons = [
    {
      id: 1,
      text: "Apasionado de los videojuegos",
      style: {
        scale: button6,
        top: "110px",
        left: "-78px",
        rotate: "-25deg",
      },
    },
    {
      id: 2,
      text: "Maquetador Web",
      style: {
        scale: button2,
        top: "129px",
        right: "-16px",
        rotate: "25deg",
      },
    },
    {
      id: 3,
      text: "Desarrollador Front End",
      style: {
        scale: button3,
        top: "259px",
        left: "-64px",
        rotate: "13deg",
      },
    },
    {
      id: 4,
      text: "1 año de experiencia",
      style: {
        scale: button4,
        top: "285px",
        right: "-18px",
        rotate: "-14deg",
      },
    },
    {
      id: 5,
      text: "Experiencia con React y React Native",
      style: {
        scale: button5,
        bottom: "148px",
        right: "-48px",
        rotate: "9deg",
      },
    },
    {
      id: 6,
      text: "Desarrollador Mobile",
      style: {
        scale: button1,
        bottom: "170px",
        left: "-56px",
        rotate: "-5deg",
      },
    },
  ];

  return (
    <motion.section
      id="about"
      className="px-28 pt-28 h-[300vh] w-full bg-gradient-to-br from-[#131428] from-15% via-[#191b42] via-45% to-[#2E349F]"
      ref={scrollRef}
    >
      <div
        className="relative grid grid-cols-2 h-full w-fit mx-auto max-w-[1440px] bg-contain justify-items-center"
        style={{
          backgroundImage: `url(${StarsBg.src})`,
        }}
      >
        {/* <motion.div
          style={{
            x: "-50%",
            scale,
          }}
          className="flex flex-col fixed top-24 left-1/2 -translate-x-1/2 items-center w-full"
        >
          <h1 className="text-white font-extrabold text-7xl">Julian Fontana</h1>
          <h2 className="text-white font-semibold text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB8122] to-orange-300">
              Front End
            </span>{" "}
            Developer
          </h2>
        </motion.div> */}
        <HeroTextSection />
        <motion.div
          className="sticky top-[80px] h-screen w-full flex justify-center items-start"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.6,
            },
          }}
          style={
            {
              // x,
              // y,
            }
          }
        >
          {/* {buttons.map((button) => (
            <motion.div
              key={button.id}
              className={"absolute z-30"}
              style={button.style}
            >
              <MainButton>{button.text}</MainButton>
            </motion.div>
          ))} */}
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
          {/* <motion.p
            className="font-normal text-xs text-[#141824] mt-3"
            style={{
              opacity,
            }}
          >
            quis ipsum consequat bibendum. Integer quis turpis euismod,
            vestibulum ipsum eu, interdum velit. Donec aliquam, nunc vel
            placerat luctus, magna ex interdum nulla, sit amet bibendum eros
            odio sed tortor. Nunc egestas sapien vitae justo lacinia,
          </motion.p> */}
        </motion.div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dolore natus dolorem repudiandae eos corporis nulla dignissimos. At ex
          nemo quas aperiam incidunt veritatis, doloribus cumque sapiente esse
          repellendus quis repellat enim tempora cum voluptas ipsam neque
          tenetur eligendi quos fugiat corporis officiis eum! Autem error quas
          repellat neque, pariatur libero aut, perferendis sed ratione maiores
          corporis possimus quam nobis.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
