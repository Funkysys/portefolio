import { motion } from "framer-motion";

interface LetterForTitleProps {
  letterParams: {
    letter: string;
    opacity: number;
    x: number;
    y: number;
    tox?: number;
    toy?: number;
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
        scale: 0.5,
        rotate: 0,
        rotateX: 0,
        marginLeft: 0,
        textShadow: "0px 0px 0px #000",
      }}
      animate={{
        opacity: 1,
        x: letterParams.tox ? letterParams.tox : 0,
        y: letterParams.toy ? letterParams.toy : 0,
        scale: letterParams.scale,
        rotate: letterParams.rotate,
        rotateX: letterParams.rotateX,
        marginLeft: letterParams.marginLeft,
        textShadow: "3px 5px 2px #000",
      }}
      transition={{ duration: 2 }}
      className="text-white"
    >
      {letterParams.letter}
    </motion.div>
  );
};

export default LetterForTitle;
