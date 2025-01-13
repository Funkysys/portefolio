import { motion } from "framer-motion";
import Image from "next/image";

interface SpaceshipProps {
  size: string;
  speed: number;
  imgSize: number;
  radius: number;
  imageSrc: string;
  hidden?: boolean;
  y?: number;
}

export const Spaceship = ({
  size,
  speed,
  radius,
  imageSrc,
  imgSize,
  hidden,
  y,
}: SpaceshipProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0.5,
        scale: 0.5,
        x: -radius,
        y: y ? y : -200,
        rotate: -90,
      }}
      animate={{
        opacity: [0.1, 1, 0.1],
        scale: [0.1, 1, 0.1],
        x: [radius, -radius],
      }}
      transition={{
        repeat: Infinity,
        duration: speed,
        ease: "easeInOut",
      }}
      style={{
        width: `calc(${size} / 2)`,
        height: `calc(${size} / 2)`,
        position: "absolute",
      }}
    >
      <Image
        src={imageSrc}
        alt="Vaisseau spatial"
        width={imgSize}
        height={imgSize}
        className={`w-full h-full object-contain ${
          hidden ? "hidden md:block" : "md:hidden block"
        }`}
      />
    </motion.div>
  );
};
