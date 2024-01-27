import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Ovni from "@/assets/ovni.png";

const HeroAboutMe = () => {
  const aboutRef = useRef(null);
  const inView = useInView(aboutRef, {
    once: true,
    margin: "0px 0px -50% 0px",
  });
  return (
    <div
      className="flex flex-col gap-4 lg:gap-[22px] min-h-screen justify-center relative items-center lg:items-start"
      ref={aboutRef}
    >
      <motion.div
        className="absolute bottom-16 -left-16  blur-[2px] opacity-60"
        animate={{
          y: [-20, 20, -20],
          rotate: [-5, 5, -5],
          transition: {
            repeat: Infinity,
            duration: 9,
          },
        }}
      >
        <Image
          src={Ovni}
          alt="ovni"
          className="w-36 h-auto"
          draggable={false}
        />
      </motion.div>
      <motion.h2
        className="text-[#fb8122] font-semibold text-3xl lg:text-5xl uppercase"
        initial={{
          opacity: 0,
          x: -40,
        }}
        animate={{
          opacity: inView ? 1 : 0,
          x: inView ? 0 : -40,
        }}
      >
        Quien Soy?
      </motion.h2>
      <motion.div
        className="h-0.5 bg-gradient-to-r from-white from-30% to-transparent to-70%"
        initial={{
          width: 0,
        }}
        animate={{
          width: inView ? "100%" : 0,
          transition: {
            delay: 0.3,
          },
        }}
      />
      <motion.p
        initial={{
          opacity: 0,
          x: -40,
        }}
        animate={{
          opacity: inView ? 1 : 0,
          x: inView ? 0 : -40,
          transition: {
            delay: 0.6,
          },
        }}
        className="group text-white/70 font-normal lg:text-2xl hover:text-white transition-colors delay-100 cursor-help relative z-10 text-center lg:text-start"
      >
        <strong className="text-white group-hover:text-[#fb8122] transition-colors delay-100 font-semibold">
          Desarrollador Front End y Mobile
        </strong>
        , apasionado y creativo,{" "}
        <strong className="text-white group-hover:text-[#fb8122] transition-colors delay-100 font-semibold">
          convierto diseños
        </strong>{" "}
        e ideas{" "}
        <strong className="text-white group-hover:text-[#fb8122] transition-colors delay-100 font-semibold">
          en realidad
        </strong>
        .{" "}
        <strong className="text-white group-hover:text-[#fb8122] transition-colors delay-100 font-semibold">
          Autodidacta
        </strong>{" "}
        aplico mis conocimientos para enfrentar desafíos diarios en estas áreas.
        Cuento{" "}
        <strong className="text-white group-hover:text-[#fb8122] transition-colors delay-100 font-semibold">
          con experiencia en Next.js y React
        </strong>
        , resuelvo problemas eficientemente y{" "}
        <strong className="text-white group-hover:text-[#fb8122] transition-colors delay-100 font-semibold">
          tengo habilidades destacadas en comunicación y gestión de proyectos.
        </strong>
      </motion.p>

      {/* <p>Julian F.</p> */}
    </div>
  );
};

export default HeroAboutMe;
