import { motion } from "framer-motion";
interface StarProps {
  x: string; // Position horizontale
  y: string; // Position verticale
}

export const Star = ({ x, y }: StarProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 0,
        y: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 2 }}
      className="absolute w-3 h-3 bg-yellow-400 rounded-full shadow-lg"
      style={{
        left: x,
        top: y,
        boxShadow: `0 0 6px 3px rgba(255, 255, 0, 0.6)`, // Ombre douce autour de l'étoile
      }}
    />
  );
};
