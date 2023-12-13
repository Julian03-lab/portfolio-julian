import React from "react";
import ScrollDownIcon from "../icons/ScrollDownIcon";
import { motion } from "framer-motion";
import { ConsoleIcon, DownloadIcon, MailIcon, MoonIcon } from "../icons/Icons";
import Link from "next/link";

const links = [
  {
    id: 1,
    text: "Descargar cv",
    href: "",
    icon: <DownloadIcon />,
  },
  {
    id: 2,
    text: "Contactarme",
    href: "",
    icon: <MailIcon />,
  },
  {
    id: 3,
    text: "Ver codigo fuente",
    href: "https://github.com/Julian03-lab/portfolio-julian",
    icon: <ConsoleIcon />,
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
    <div className="flex gap-2.5 flex-col h-[70vh] justify-between relative">
      <motion.div
        className="flex flex-col w-fit gap-5"
        initial={{
          opacity: 0,
          x: -40,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        <h1 className="text-white font-extrabold text-[10.25rem] leading-[8.125rem]">
          JULIAN
        </h1>
        <h1 className="text-white font-extrabold text-[7.5rem] leading-[5.625rem]">
          FONTANA
        </h1>
        <h2 className="text-[#FB8122] font-semibold text-[3.375rem]">
          FRONT END DEVELOPER
        </h2>
      </motion.div>
      <motion.ul
        className="flex flex-col gap-3 items-start"
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
              target="_blank"
              className="flex gap-2.5 items-center text-white font-semibold text-xl hover:text-[#FB8122] fill-current uppercase"
            >
              {link.icon}
              {link.text}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        className="flex flex-row gap-4"
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
