"use client";

import StarsBg from "@/assets/stars-bg.webp";
import Image from "next/image";
import foto_hero from "@/assets/foto_hero.webp";
import ProjectCard from "./ProjectCard";
import {
  NextjsIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../icons/Icons";

const myProjects = [
  {
    title: "Portafolio Personal",
    description:
      "Este es mi portafolio personal, donde muestro mis proyectos y habilidades. Está hecho con NextJS, Framer Motion, TailwindCSS y Typescript.",
    tecnologies: [
      <ReactIcon key="react" className="w-8 h-auto" />,
      <TypescriptIcon key="typescript" className="w-8 h-auto" />,
      <TailwindIcon key="tailwind" className="w-8 h-auto" />,
      <NextjsIcon key="nextjs" className="w-8 h-auto" />,
    ],
    // image:
  },
];

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
            {myProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
