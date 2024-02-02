import React from "react";
import ScrollDownIcon from "../icons/ScrollDownIcon";
import { motion } from "framer-motion";
import { ConsoleIcon, DownloadIcon, MailIcon } from "../icons/Icons";
import Link from "next/link";
import Image from "next/image";
import GradientBg from "@/assets/hero-gradient.webp";
import foto_hero from "@/assets/foto_hero.webp";

const links = [
  {
    id: 1,
    text: "Descargar cv",
    href: "Julian Fontana Curriculum.pdf",
    icon: <DownloadIcon />,
    download: true,
  },
  {
    id: 2,
    text: "Contactarme",
    href: "#contacto",
    icon: <MailIcon />,
  },
  {
    id: 3,
    text: "Ver codigo fuente",
    href: "https://github.com/Julian03-lab/portfolio-julian",
    icon: <ConsoleIcon />,
    target: true,
  },
];

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HeroTextSection = () => {
  return (
    <div className="flex flex-col h-[90vh] md:h-full md:gap-10 lg:gap-0 lg:h-[70vh] justify-between relative items-center md:items-start">
      <motion.div
        className="flex flex-col w-fit lg:gap-5"
        initial={{
          opacity: 0,
          x: -40,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        <div className="flex gap-3 md:flex-col md:gap-0">
          <h1 className="text-white font-extrabold text-[2.125rem] lg:text-8xl xl:text-[10.25rem] leading-normal xl:leading-[8.125rem]">
            JULIAN
          </h1>
          <h1 className="text-white font-extrabold text-[2.125rem] lg:text-7xl  xl:text-[7.5rem] leading-normal xl:leading-[5.625rem]">
            FONTANA
          </h1>
        </div>
        <h2 className="text-[#FB8122] font-semibold text-xl lg:text-3xl xl:text-[3.375rem] text-center lg:text-left">
          FRONT END DEVELOPER
        </h2>
      </motion.div>
      <motion.div
        className="flex md:hidden w-full justify-center"
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
      <motion.ul
        className="flex flex-col gap-4 items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {links.map((link) => (
          <motion.li
            variants={item}
            key={link.id}
            className=""
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <Link
              href={link.href}
              target={link.target ? "_blank" : "_self"}
              download={link.download}
              className="flex gap-2.5 items-center text-white font-semibold lg:text-xl hover:text-[#FB8122] fill-current uppercase"
            >
              {link.icon}
              {link.text}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        className="hidden lg:flex flex-row gap-4"
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1,
            duration: 0.4,
          },
        }}
      >
        <ScrollDownIcon />
        <span className="text-lg text-white/80 font-semibold pt-3">
          Start Scrolling
        </span>
      </motion.div>
    </div>
  );
};

export default HeroTextSection;
