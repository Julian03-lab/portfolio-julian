"use client";

import StarsBg from "@/assets/stars-bg.webp";
import Image from "next/image";
import foto_hero from "@/assets/foto_hero.webp";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="portafolio" className="px-28 h-full w-full relative z-0">
      <div
        className="relative flex flex-col items-center mx-auto max-w-[1440px] bg-contain py-28 bg-repeat-y"
        style={{
          backgroundImage: `url(${StarsBg.src})`,
          minHeight: "100vh",
        }}
      >
        <h2 className="text-[#fb8122] font-semibold text-5xl mb-16">
          PROYECTOS
        </h2>
        <div className="flex w-full">
          <div className="sticky top-[96px] h-full w-full flex justify-center items-start">
            <Image
              priority
              src={foto_hero}
              alt="Foto Julian Fontana"
              className="w-[410px] select-none"
            />
          </div>
          <div className="w-full h-full flex flex-col gap-16">
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
