import React from "react";
import {
  BoostrapIcon,
  CssIcon,
  FigmaIcon,
  FirebaseIcon,
  GithubIcon,
  HTMLIcon,
  JavascriptIcon,
  MaterialUIIcon,
  NextjsIcon,
  ReactIcon,
  SupabaseIcon,
  TailwindIcon,
  TypescriptIcon,
  VisualStudioCodeIcon,
} from "../icons/Icons";

const Technologies = [
  {
    id: 1,
    name: "Typescript",
    icon: <TypescriptIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 2,
    name: "TailwindCSS",
    icon: <TailwindIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 3,
    name: "NextJS",
    icon: <NextjsIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 4,
    name: "React",
    icon: <ReactIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 5,
    name: "React Native",
    icon: <ReactIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 6,
    name: "JavaScript",
    icon: <JavascriptIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 7,
    name: "GitHub",
    icon: <GithubIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 8,
    name: "Figma",
    icon: <FigmaIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 9,
    name: "Supabase",
    icon: <SupabaseIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 10,
    name: "Firebase",
    icon: <FirebaseIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 11,
    name: "HTML",
    icon: <HTMLIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 12,
    name: "CSS",
    icon: <CssIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 13,
    name: "MaterialUI",
    icon: <MaterialUIIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 14,
    name: "Visual Studio Code",
    icon: <VisualStudioCodeIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 15,
    name: "Boostrap",
    icon: <BoostrapIcon className="w-[60px] h-auto py-4" />,
  },
  {
    id: 156,
    name: "Zustand",
    icon: <BoostrapIcon className="w-[60px] h-auto py-4" />,
  },
];

const SkillsHard = () => {
  return (
    <div className="w-full grid grid-cols-3">
      {Technologies.map((tech) => (
        <div key={tech.id} className="flex items-center gap-10">
          <div className="h-full w-px bg-white" />
          {tech.icon}
          <p className="font-semibold text-white text-2xl">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsHard;
