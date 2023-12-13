import { useRef } from "react";
import { motion } from "framer-motion";

const HeroBoard = () => {
  const constraintsRef = useRef(null);

  const buttons = [
    {
      id: 1,
      text: "Apasionado de los videojuegos",
      style: {
        top: "110px",
        left: "20px",
        rotate: "25deg",
      },
    },
    {
      id: 2,
      text: "Maquetador Web",
      style: {
        top: "145px",
        right: "67px",
        rotate: "25deg",
      },
    },
    {
      id: 3,
      text: "Desarrollador Front End",
      style: {
        top: "300px",
        left: "35px",
        rotate: "13deg",
      },
    },
    {
      id: 4,
      text: "1 año de experiencia",
      style: {
        top: "250px",
        right: "260px",
        rotate: "14deg",
      },
    },
    {
      id: 5,
      text: "Experiencia con React y React Native",
      style: {
        bottom: "125px",
        right: "39px",
        rotate: "9deg",
      },
    },
    {
      id: 6,
      text: "Desarrollador Mobile",
      style: {
        bottom: "336px",
        left: "220px",
        rotate: "5deg",
      },
    },
  ];

  return (
    <div className="min-h-screen flex items-center">
      <div
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
              boxShadow: "0px 0px 8px 2px #FB8122",
            }}
            whileTap={{ scale: 0.9 }}
          >
            {button.text}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default HeroBoard;
