import { motion } from "framer-motion";
interface StarProps {
  x: string;
  y: string;
  small?: boolean;
  hidden?: boolean;
  scale?: number;
}

export const Star = ({ x, y, small, hidden, scale }: StarProps) => {
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
        scale: scale || 1,
      }}
      transition={{ duration: 3 }}
      className={`absolute w-[0.8vw] h-[0.8vw] bg-yellow-400 rounded-full shadow-lg ${
        hidden ? "hidden md:block" : ""
      } ${small ? "block md:hidden" : ""}`}
      style={{
        left: x,
        top: y,
        boxShadow: `0 0 6px 3px rgba(255, 255, 0, 0.6)`,
      }}
    />
  );
};
