import React from "react";
import { ConsoleIcon } from "../icons/Icons";

const softSkills = [
  {
    id: 1,
    title: "Resolución de problemas",
    description:
      "Capacidad para analizar y resolver eficazmente situaciones complejas.",
  },
  {
    id: 2,
    title: "Aprendizaje continuo",
    description:
      "Motivación constante para mantenerse actualizado en nuevas tecnologías y lenguajes de programación.",
  },
  {
    id: 3,
    title: "Adaptabilidad",
    description:
      "Capacidad para prosperar en entornos cambiantes y adaptarse según sea necesario.",
  },
  {
    id: 4,
    title: "Pasión por la tecnología",
    description:
      "Fuerte motivación y entusiasmo por el campo de la programación y la tecnología.",
  },
  {
    id: 5,
    title: "Responsabilidad",
    description:
      "Compromiso para asumir la responsabilidad de las tareas, cumplir los plazos y alcanzar los objetivos fijados",
  },
];
const SkillsSoft = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-14 lg:mt-28 w-full">
      {softSkills.map((softSkill) => {
        return (
          <div
            key={softSkill.id}
            className="max-w-sm flex flex-col text-white font-semibold lg:text-2xl p-3 rounded-xl relative"
          >
            <div
              className="absolute -inset-px bg-gradient-to-br from-white to-white/0 rounded-xl"
              aria-hidden="true"
            ></div>
            <div
              className="absolute inset-0 bg-[#141824] rounded-xl"
              aria-hidden="true"
            ></div>
            <ConsoleIcon className="w-10 h-auto fill-current mb-2 z-10" />
            <h3 className="z-10">{softSkill.title}</h3>
            <p className="opacity-60 z-10">{softSkill.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsSoft;
