import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconReact, IconTypescript } from "../icons/Icons";

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
        rotate: "25deg",
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
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: inView ? 1 : 0,
          x: inView ? 0 : -100,
        }}
        className="w-full border-2 border-white bg-emerald-500/40 h-[500px] relative flex flex-col items-center"
        ref={constraintsRef}
      >
        <p className="text-white/60 font-semibold text-3xl py-4 select-none">
          Caracteristicas de Julian
        </p>
        <p className="text-white/40 rotate-2 font-semibold text-base absolute bottom-2 left-2 select-none">
          Tip: Proba a mover los elementos 😉
        </p>
        {buttons.map((button) => (
          <motion.button
            key={button.id}
            className="absolute px-4 py-2 text-white font-bold bg-[#131428] w-fit cursor-grab border-2 border-white rounded-xl max-w-[174px]"
            style={button.style}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0}
            dragMomentum={false}
            whileHover={{
              boxShadow: "0px 0px 8px 2px #131428",
            }}
            whileTap={{ scale: 0.8, cursor: "grabbing" }}
          >
            {button.text}
          </motion.button>
        ))}
        {/* <motion.button
          className="absolute cursor-grab"
          style={{
            bottom: "20px",
            right: "40px",
            scale: 0.9,
          }}
          drag
          dragConstraints={constraintsRef}
          dragElastic={0}
          dragMomentum={false}
          whileTap={{ scale: 0.8, cursor: "grabbing" }}
        >
          <IconReact className="w-12 h-12 text-cyan-600" />
        </motion.button>
        <motion.button
          className="absolute cursor-grab"
          style={{
            bottom: "20px",
            right: "120px",
            scale: 0.9,
          }}
          drag
          dragConstraints={constraintsRef}
          dragElastic={0}
          dragMomentum={false}
          whileTap={{ scale: 0.8, cursor: "grabbing" }}
        >
          <IconTypescript className="w-12 h-12 text-blue-500" />
        </motion.button> */}
      </motion.div>
    </div>
  );
};

export default HeroBoard;
