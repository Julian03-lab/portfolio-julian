import React from "react";
import { ConsoleIcon } from "../icons/Icons";

const softSkills = [
  {
    id: 1,
    title: "Resolución de problemas",
    description:
      "Capacidad para analizar y resolver eficazmente situaciones complejas. ",
  },
  {
    id: 2,
    title: "Resolución de problemas",
    description:
      "Capacidad para analizar y resolver eficazmente situaciones complejas. ",
  },
  {
    id: 3,
    title: "Resolución de problemas",
    description:
      "Capacidad para analizar y resolver eficazmente situaciones complejas. ",
  },
  {
    id: 4,
    title: "Resolución de problemas",
    description:
      "Capacidad para analizar y resolver eficazmente situaciones complejas. ",
  },
  {
    id: 5,
    title: "Resolución de problemas",
    description:
      "Capacidad para analizar y resolver eficazmente situaciones complejas. ",
  },
  {
    id: 6,
    title: "Resolución de problemas",
    description:
      "Capacidad para analizar y resolver eficazmente situaciones complejas. ",
  },
];
const SkillsSoft = () => {
  return (
    <div className="grid grid-cols-3 gap-14 mt-28 w-full">
      {softSkills.map((softSkill) => {
        return (
          <div
            key={softSkill.id}
            className="max-w-sm flex flex-col text-white font-semibold text-2xl p-3 rounded-xl border-white border relative"
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
