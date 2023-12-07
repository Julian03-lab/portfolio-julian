"use client";

import ScrollDownIcon from "@/components/icons/ScrollDownIcon";
import Image from "next/image";
import foto_hero from "@/assets/foto_hero.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MainButton from "../MainButton";

const Hero = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const x = useTransform(scrollYProgress, [0, 0.4], [0, -200]);
  const button1 = useTransform(scrollYProgress, [0, 0.4], [0, 0.8]);
  const button2 = useTransform(scrollYProgress, [0.2, 0.5], [0, 0.8]);
  const button3 = useTransform(scrollYProgress, [0.4, 0.7], [0, 0.8]);
  const button4 = useTransform(scrollYProgress, [0.6, 0.9], [0, 0.8]);
  const button5 = useTransform(scrollYProgress, [0.7, 0.8], [0, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });
  const button6 = useTransform(scrollYProgress, [0.3, 0.6], [0, 0.8]);

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
        bottom: "124px",
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
    <section
      id="about"
      className="px-14 py-16 relative h-[300vh] grid grid-cols-2 max-w-[1440px]"
      ref={scrollRef}
    >
      <div className="flex gap-2.5 flex-col">
        <div className="flex flex-col w-fit">
          <h1 className="text-[#141824] font-extrabold text-[8.125rem] leading-[8.125rem]">
            Julian
          </h1>
          <h2 className="text-[#797878] font-extrabold text-[6.875rem] leading-[6.875rem]">
            Fontana
          </h2>
        </div>
        <h3 className="text-[#FB8122] font-medium text-[2.5rem]">
          Front End Developer
        </h3>
      </div>
      <div>
        <motion.div
          className="max-w-[433px]"
          style={{
            x,
            position: "fixed",
            // scale,
          }}
        >
          {buttons.map((button) => (
            <motion.div
              key={button.id}
              className={"absolute"}
              style={button.style}
            >
              <MainButton>{button.text}</MainButton>
            </motion.div>
          ))}
          <Image
            priority
            src={foto_hero}
            alt="Foto Julian Fontana"
            className="w-[433px] h-[530px]"
          />
          <motion.p
            className="font-normal text-xs text-[#141824] mt-3"
            style={{
              opacity,
            }}
          >
            quis ipsum consequat bibendum. Integer quis turpis euismod,
            vestibulum ipsum eu, interdum velit. Donec aliquam, nunc vel
            placerat luctus, magna ex interdum nulla, sit amet bibendum eros
            odio sed tortor. Nunc egestas sapien vitae justo lacinia,
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        className="absolute top-[85vh]"
        style={{
          opacity,
        }}
      >
        <ScrollDownIcon />
      </motion.div>
    </section>
  );
};

export default Hero;
