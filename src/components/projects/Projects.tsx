"use client";

import StarsBg from "@/assets/stars-bg.webp";
import Image from "next/image";
import foto_projects from "@/assets/foto_projects.webp";
import GradientBg from "@/assets/hero-gradient.webp";
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
  {
    title: "Nexo",
    description:
      "Lorem ipsum dolor sit amet consectetur. Faucibus parturient lectus euismod vulputate vestibulum. Enim eget aliquam tellus metus gravida tempus pellentesque.Lorem ipsum dolor sit amet consectetur. Faucibus parturient lectus euismod vulputate vestibulum. Enim eget aliquam tellus metus gravida tempus pellentesque Lorem ipsum dolor sit amet consectetur. Faucibus parturient lectus euismod vulputate vestibulum. Enim eget aliquam tellus metus gravida tempus pellentesque.",
    tecnologies: [
      <ReactIcon key="react" className="w-8 h-auto" />,
      <TypescriptIcon key="typescript" className="w-8 h-auto" />,
      <TailwindIcon key="tailwind" className="w-8 h-auto" />,
      <NextjsIcon key="nextjs" className="w-8 h-auto" />,
    ],
    // image:
  },
  {
    title: "Order My Potions",
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
    <section
      id="portafolio"
      className="px-[30px] lg:px-28 h-full w-full relative z-0 bg-gradient-to-b from-[#141824] via-[#0F104D] to-[#18162A]"
    >
      <div
        className="relative flex flex-col items-center mx-auto max-w-[1440px] bg-contain py-28 bg-repeat-y gap-48 lg:gap-0"
        style={{
          backgroundImage: `url(${StarsBg.src})`,
          // minHeight: "100vh",
        }}
      >
        <h2 className="text-[#fb8122] font-semibold text-3xl lg:text-5xl">
          Proyectos
        </h2>
        <div className="flex w-full">
          <div className="absolute lg:sticky -left-32 top-11 lg:top-[96px] lg:h-full w-full flex justify-center items-start">
            <Image
              priority
              src={foto_projects}
              alt="Foto Julian Fontana"
              className="w-[142px] lg:w-[410px] select-none"
            />
            <Image
              priority
              src={GradientBg}
              alt="Gradient"
              className="absolute left-0 w-full -z-10 select-none"
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
