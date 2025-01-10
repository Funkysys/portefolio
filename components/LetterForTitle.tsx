import { motion } from "framer-motion";

interface LetterForTitleProps {
  letterParams: {
    letter: string;
    opacity: number;
    x: number;
    y: number;
    scale: number;
    rotate: number;
    rotateX: number;
    marginLeft?: string;
  };
}

const LetterForTitle = ({ letterParams }: LetterForTitleProps) => {
  return (
    <motion.div
      initial={{
        opacity: letterParams.opacity,
        x: letterParams.x,
        y: letterParams.y,
        scale: letterParams.scale,
        rotate: 0,
        rotateX: 0,
        marginLeft: 0,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: letterParams.rotate,
        rotateX: letterParams.rotateX,
        marginLeft: letterParams.marginLeft,
      }}
      transition={{ duration: 2 }}
    >
      {letterParams.letter}
    </motion.div>
  );
};

export default LetterForTitle;
