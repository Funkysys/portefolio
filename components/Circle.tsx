import { motion } from "framer-motion";

export const Circle = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
        x: "-50%",
        y: "-50%",
        shadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
      }}
      animate={{
        opacity: 0.8,
        scale: 1,
        shadow: "0px 0px 20px 10px rgba(255, 0, 0, 0.5)",
      }}
      transition={{
        delay: 0.5,
        duration: 2,
      }}
      className="absolute w-[90vw] h-[90vw] md:w-[80vh] md:h-[80vh]  shadow-md shadow-white bg-blue-600 bg-opacity-20 border-4 border-purple-900 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  );
};
