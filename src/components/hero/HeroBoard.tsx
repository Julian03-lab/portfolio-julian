import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroBoardPostit from "./HeroBoardPostit";
import NamePaper from '@/assets/name-paper.png'
import Corcho from '@/assets/corcho-textura.webp'
import Image from "next/image";

import {Reenie_Beanie} from "next/font/google";

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
      style: {
        top: "110px",
        left: "20px",
        rotate: "-5deg",
        scale: 0.9,
      },
    },
     {
       id: 2,
       text: "Maquetador Web",
       style: {
         top: "145px",
         right: "67px",
         rotate: "25deg",
         scale: 0.9,
       },
     },
     {
       id: 3,
       text: "Desarrollador Front End",
       style: {
         top: "300px",
         left: "35px",
         rotate: "13deg",
         scale: 0.9,
       },
     },
     {
       id: 4,
       text: "1 año de experiencia",
       style: {
         top: "250px",
         right: "260px",
         rotate: "14deg",
         scale: 0.9,
       },
     },
     {
       id: 5,
       text: "Experiencia con React y React Native",
       style: {
         bottom: "125px",
         right: "39px",
         rotate: "9deg",
         scale: 0.9,
       },
     },
     {
       id: 6,
       text: "Desarrollador Mobile",
       style: {
         bottom: "336px",
         left: "220px",
         rotate: "5deg",
         scale: 0.9,
       },
     },
  ];

  return (
    <div className="min-h-screen flex items-center">
      <motion.div
      draggable={false}
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: inView ? 1 : 0,
          x: inView ? 0 : -100,
          transition: {
            duration: 0.5,
          },
        }}
        
        className="w-full  h-[610px] relative flex flex-col items-center border-[16px] border-[#d58562] shadow-lg"
        style={{
          backgroundImage: `url(${Corcho.src})`,
          backgroundSize: "cover",
        }}
        ref={constraintsRef}
      >
        <div className="relative" draggable={false}>
        <Image 
        src={NamePaper}
        alt="Name Paper"
        width={300}
        height={300}
        className="select-none"
        draggable={false}
        />
         <p className={`text-[#003bd1] text-5xl font-medium select-none absolute top-12 left-10 rotate-3 transform ${reenieBeanie.className} `}>
         Más sobre mi
          </p>
          </div>
        <p className="text-white/80 font-semibold text-base absolute bottom-2 left-2 select-none">
          Tip: Prueba a mover los elementos 😉
        </p>
        {buttons.map((button) => (
          <HeroBoardPostit key={button.id} constraintsRef={constraintsRef} style={button.style} text={button.text}/>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroBoard;
