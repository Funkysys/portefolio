import { motion } from "framer-motion";

interface PlanetProps {
  size: string; // Taille de la planète
  speed: number; // Vitesse de l'orbite
  radius: number; // Rayon de l'orbite
}

export const Planet = ({ size, speed, radius }: PlanetProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0.5,
        scale: 0.5,
        x: -radius,
        y: 150,
      }}
      animate={{
        opacity: [0.1, 1, 0],
        scale: [0.1, 1, 0.1],
        x: [-radius, radius],
      }}
      transition={{
        repeat: Infinity,
        duration: speed,
        ease: "easeOut",
        delay: 2,
      }}
      style={{
        width: size,
        height: size,
        position: "absolute",
      }}
      className="rounded-full bg-orange-500 shadow-lg"
    />
  );
};
