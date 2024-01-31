import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroBoardPostit from "./HeroBoardPostit";
import NamePaper from "@/assets/name-paper.png";
import Corcho from "@/assets/corcho-textura.webp";
import Image from "next/image";

import { Reenie_Beanie } from "next/font/google";

const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
});

const HeroBoard = () => {
  const constraintsRef = useRef(null);
  const inView = useInView(constraintsRef, {
    once: true,
    margin: "0px 0px -50% 0px",
  });

  const buttons = [
    {
      id: 1,
      text: "Apasionado de los videojuegos",
      position: "bottom-[60px] right-[30px] lg:top-[110px] lg:right-[30px]",
      style: {
        rotate: "-5deg",
        scale: 0.9,
      },
    },
    {
      id: 2,
      text: "Maquetador Web",
      position: "top-[158px] left-[20px] lg:top-[145px] lg:left-[107px]",
      style: {
        rotate: "25deg",
        scale: 0.9,
      },
    },
    {
      id: 3,
      text: "Desarrollador Front End",
      position: "bottom-[80px] left-[40px] lg:bottom-[180px] lg:left-[35px]",
      style: {
        rotate: "13deg",
        scale: 0.9,
      },
    },
    {
      id: 4,
      text: "Autodidacta",
      position: "top-[160px] right-[30px] lg:top-[250px] lg:right-[200px]",
      style: {
        rotate: "14deg",
        scale: 0.9,
      },
    },
    {
      id: 5,
      text: "Experiencia con React y React Native",
      position: "top-[360px] right-[46px] lg:bottom-[125px] lg:right-[39px]",
      style: {
        rotate: "9deg",
        scale: 0.9,
      },
    },
    {
      id: 6,
      text: "Desarrollador Mobile",
      position: "bottom-[220px] left-[45px] lg:bottom-[106px] lg:left-[220px]",
      style: {
        rotate: "5deg",
        scale: 0.9,
      },
    },
  ];

  return (
    <div className="min-h-screen flex lg:items-center">
      <motion.div
        draggable={false}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: inView ? 1 : 0,
          transition: {
            duration: 0.5,
          },
        }}
        className="w-full lg:h-[80%] relative flex flex-col items-center border-white border-[3px]"
        ref={constraintsRef}
      >
        <div className="relative" draggable={false}>
          <Image
            src={NamePaper}
            alt="Name Paper"
            // width={300}
            // height={300}
            className="select-none w-[200px] h-auto lg:w-[300px] lg:h-auto"
            draggable={false}
          />
          <p
            className={`text-[#003bd1] text-3xl lg:text-5xl font-medium select-none absolute top-7 lg:top-12 left-9 lg:left-10 rotate-3 transform ${reenieBeanie.className} `}
          >
            Más sobre mi
          </p>
        </div>
        <p className="text-white/60 font-semibold text-base absolute bottom-4 left-4 select-none">
          Tip: Prueba a mover los elementos 😉
        </p>
        {buttons.map((button) => (
          <HeroBoardPostit
            position={button.position}
            key={button.id}
            constraintsRef={constraintsRef}
            style={button.style}
            text={button.text}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HeroBoard;
