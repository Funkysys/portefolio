import { motion } from "framer-motion";

interface PlanetProps {
  size: string;
  speed: number;
  radius: number;
  hidden?: boolean;
  y?: number;
}

export const Planet = ({ size, speed, radius, hidden, y }: PlanetProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0.5,
        scale: 0.5,
        x: -radius,
        y: y ? y : 200,
        boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0)",
      }}
      animate={{
        opacity: [0.1, 1, 0],
        scale: [0.1, 1, 0.1],
        x: [-radius, radius],
        boxShadow: [
          "0px 0px 3px 3px rgba(0, 0, 0, 0)",
          "3px 2px 3px 3px rgba(0, 0, 0, 1)",
          "0px 0px 3px 3px rgba(0, 0, 0, 0)",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: speed,
        ease: "easeInOut",
        delay: 2,
      }}
      style={{
        width: `calc(${size} / 2)`,
        height: `calc(${size} / 2)`,
        position: "absolute",
      }}
      className={`rounded-full bg-orange-500 shadow-lg ${
        hidden ? "hidden md:block" : "md:hidden block"
      }`}
    />
  );
};
