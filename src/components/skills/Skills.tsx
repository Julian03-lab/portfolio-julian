import React from "react";
import StarsBg from "@/assets/stars-bg.webp";
import SkillsHard from "./SkillsHard";
import SkillsSoft from "./SkillsSoft";
import { SkillsGradient } from "@/assets/skillsGradient";

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-[30px] lg:px-28 h-full w-full relative bg-gradient-to-b from-transparent to-[#141824] to-35% z-0 overflow-hidden"
    >
      <div
        className="relative flex flex-col items-center mx-auto max-w-[1440px] bg-contain py-12 lg:py-28 bg-repeat-y gap-10 lg:gap-20"
        style={{
          backgroundImage: `url(${StarsBg.src})`,
          // minHeight: "100vh",
        }}
      >
        <h2 className="text-[#fb8122] font-semibold text-3xl lg:text-5xl">
          Skills
        </h2>
        <SkillsHard />
        {/* <SkillsSoft /> */}
      </div>
      <SkillsGradient className="absolute inset-0 w-screen -z-[1] h-full" />
    </section>
  );
};

export default Skills;
