import React from "react";
import {
  AstroIcon,
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

const IconStyle = "w-[32px] lg:w-[60px] h-auto lg:py-4";

const Technologies = [
  {
    id: 1,
    name: "Typescript",
    icon: <TypescriptIcon className={IconStyle} />,
  },
  {
    id: 2,
    name: "TailwindCSS",
    icon: <TailwindIcon className={IconStyle} />,
  },
  {
    id: 3,
    name: "NextJS",
    icon: <NextjsIcon className={IconStyle} />,
  },
  {
    id: 4,
    name: "React",
    icon: <ReactIcon className={IconStyle} />,
  },
  {
    id: 5,
    name: "React Native",
    icon: <ReactIcon className={IconStyle} />,
  },
  {
    id: 6,
    name: "JavaScript",
    icon: <JavascriptIcon className={IconStyle} />,
  },
  {
    id: 7,
    name: "GitHub",
    icon: <GithubIcon className={IconStyle} />,
  },
  {
    id: 8,
    name: "Figma",
    icon: <FigmaIcon className={IconStyle} />,
  },
  {
    id: 9,
    name: "Supabase",
    icon: <SupabaseIcon className={IconStyle} />,
  },
  {
    id: 10,
    name: "Firebase",
    icon: <FirebaseIcon className={IconStyle} />,
  },
  {
    id: 11,
    name: "HTML",
    icon: <HTMLIcon className={IconStyle} />,
  },
  {
    id: 12,
    name: "CSS",
    icon: <CssIcon className={IconStyle} />,
  },
  {
    id: 13,
    name: "MaterialUI",
    icon: <MaterialUIIcon className={IconStyle} />,
  },
  {
    id: 14,
    name: "Visual Studio Code",
    icon: <VisualStudioCodeIcon className={IconStyle} />,
  },
  {
    id: 15,
    name: "Boostrap",
    icon: <BoostrapIcon className={IconStyle} />,
  },
  // {
  //   id: 16,
  //   name: "Zustand",
  //   icon: <BoostrapIcon className={IconStyle} />,
  // },
  {
    id: 17,
    name: "Astro",
    icon: <AstroIcon className={IconStyle} />,
  },
];

const SkillsHard = () => {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-0">
      {Technologies.map((tech) => (
        <div key={tech.id} className="flex items-center gap-2 lg:gap-10">
          <div className="h-full w-px bg-white hidden lg:block" />
          {tech.icon}
          <p className="font-semibold text-white text-xs lg:text-2xl">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillsHard;
