import { skills } from "@/app/data/skills";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaPlug } from "react-icons/fa";
import {
  SiDiscord,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub size={24} />,
  FaDiscord: <SiDiscord size={24} color="#5865F2" />,
  SiFastapi: <SiFastapi size={24} color="#009688" />,
  SiPython: <SiPython size={24} color="#3776AB" />,
  SiReact: <SiReact size={24} color="#61DAFB" />,
  SiNextdotjs: <SiNextdotjs size={24} color="#fff" />,
  SiTypescript: <SiTypescript size={24} color="#3178c6" />,
  SiTailwindcss: <SiTailwindcss size={24} color="#38bdf8" />,
  SiExpress: <SiExpress size={24} color="#fff" />,
  SiSymfony: <SiSymfony size={24} color="#000" />,
  SiMongodb: <SiMongodb size={24} color="#47A248" />,
  SiMysql: <SiMysql size={24} color="#00758F" />,
  SiPostgresql: <SiPostgresql size={24} color="#336791" />,
  SiGraphql: <SiGraphql size={24} color="#E10098" />,
  FaPlug: <FaPlug size={24} color="#fbbf24" />,
  SiDocker: <SiDocker size={24} color="#2496ed" />,
  SiFigma: <SiFigma size={24} color="#a259ff" />,
};
// ...
const SkillsSection = () => {
  return (
    <section className="w-full max-w-[98vw] md:max-w-[80vw] mx-auto flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 px-2">
      {skills[0].items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{
            rotateY: { duration: 0.3, delay: 0.1 + i * 0.05, ease: "easeIn" },
            opacity: { duration: 0.1, delay: 0.25 + i * 0.05, ease: "easeOut" },
          }}
          style={{ perspective: 600 }}
          className="flex flex-col items-center justify-center w-16 h-16 sm:w-24 sm:h-18 py-2 bg-zinc-800 rounded-xl shadow transition-all duration-200 hover:scale-105 hover:shadow-2xl group cursor-pointer border border-zinc-700 hover:border-yellow-400 [perspective:600px]"
        >
          <div className="transition-colors duration-200 group-hover:text-yellow-400 text-white flex items-center justify-center h-6 sm:h-8">
            {iconMap[item.icon]}
          </div>
          <span className="text-white text-xs sm:text-sm font-semibold text-center group-hover:text-yellow-400 transition-colors duration-200 mt-2">
            {item.name}
          </span>
        </motion.div>
      ))}
    </section>
  );
};

export default SkillsSection;
