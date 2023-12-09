import React from "react";
import ScrollDownIcon from "../icons/ScrollDownIcon";
import { motion } from "framer-motion";

const links = [
  {
    id: 1,
    text: "Descargar cv",
    href: "",
  },
  {
    id: 2,
    text: "Contactarme",
    href: "",
  },
  {
    id: 3,
    text: "Ver codigo fuente",
    href: "",
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
    <div className="flex gap-2.5 flex-col h-[80vh] justify-between">
      <motion.div
        className="flex flex-col w-fit"
        initial={{
          opacity: 0,
          x: -40,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        <h1 className="text-[#141824] font-extrabold text-[8.125rem] leading-[8.125rem]">
          JULIAN FONTANA
        </h1>
        <h2 className="text-[#FB8122] font-medium text-[2.5rem]">
          FRONT END DEVELOPER
        </h2>
      </motion.div>
      <motion.ul
        className="flex flex-col gap-2 items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {links.map((link) => (
          <motion.li
            variants={item}
            key={link.id}
            className="text-black/40 font-bold text-2xl hover:text-black"
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <a href={link.href}>{link.text}</a>
          </motion.li>
        ))}
      </motion.ul>
      <div
      //   className="absolute top-[75vh]"
      //   style={{
      //     opacity,
      //   }}
      >
        <ScrollDownIcon />
      </div>
    </div>
  );
};

export default HeroTextSection;
