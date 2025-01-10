import { motion } from "framer-motion";

export const Circle = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
        x: "-50%",
        y: "-50%",
      }}
      animate={{
        opacity: 0.8,
        scale: 1,
      }}
      transition={{
        delay: 0.5,
        duration: 2,
      }}
      className="absolute w-[80vh] h-[80vh] bg-blue-500 bg-opacity-10 border-4 border-purple-700 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  );
};
