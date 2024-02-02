import StarsBg from "@/assets/stars-bg.webp";
import Image from "next/image";
import foto_projects from "@/assets/foto_projects.webp";
import Project2Photo from "@/assets/projects_images/order-potions.webp";
import Project3Photo from "@/assets/projects_images/charlas-breves.webp";
import GradientBg from "@/assets/hero-gradient.webp";
import ProjectCard from "./ProjectCard";
import {
  AstroIcon,
  NextjsIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../icons/Icons";

const myProjects = [
  {
    title: "Nexo",
    description:
      "Nexo es una aplicacion para estudiantes y reclutadores. donde el modulo estudiantes muestra informacion de carreras tecnologicas y rubros IT para que los estudiantes o interesados tengan un lugar donde averiguar sobre estos temas, y el modulo de reclutador es para que los reclutadores realicen gestiones a los perfiles que soliciten trabajo una manera mas efectiva.",
    tecnologies: [
      <ReactIcon key="react" className="w-8 h-auto" />,
      <TypescriptIcon key="typescript" className="w-8 h-auto" />,
    ],
    // image:
    repository: "https://github.com/Julian03-lab/nexo-app",
  },
  {
    title: "Order My Potions",
    description:
      "Juego realizado para la React Jam, donde el objetivo es encontrar las combinaciones correctas. El juego fue hecho en 10 dias, utilizando Rune como plataforma Hecho con React, Typescript y TailwindCSS.",
    tecnologies: [
      <ReactIcon key="react" className="w-8 h-auto" />,
      <TypescriptIcon key="typescript" className="w-8 h-auto" />,
      <TailwindIcon key="tailwind" className="w-8 h-auto" />,
    ],
    image: Project2Photo,
    play: "https://app.rune.ai/dev-tyvWjvGq",
    repository: "https://github.com/Julian03-lab/orden-my-potions-game",
  },
  {
    title: "Charlas Breves Landing Page",
    description:
      "Landing page para el proyecto Charlas Breves, donde el objetivo es conectar a personas con charlas de 5 minutos integrado con un sistema de calendario utilizando Calendly. Hecho con Astro, React, Typescript y TailwindCSS.",
    tecnologies: [
      <AstroIcon key="astro" className="w-8 h-auto" />,
      <ReactIcon key="react" className="w-8 h-auto" />,
      <TypescriptIcon key="typescript" className="w-8 h-auto" />,
      <TailwindIcon key="tailwind" className="w-8 h-auto" />,
    ],
    image: Project3Photo,
    play: "https://landing.en-conexion.com/?name=julian",
  },
];

const Projects = () => {
  return (
    <section
      id="portafolio"
      className="px-[30px] lg:px-28 h-full w-full relative z-0 bg-gradient-to-b from-[#141824] via-[#0F104D] to-[#18162A]"
    >
      <div
        className="relative flex flex-col items-center mx-auto max-w-[1440px] bg-contain py-28 bg-repeat-y gap-48 lg:gap-20"
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
