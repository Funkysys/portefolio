import { motion } from "framer-motion";
import Image from "next/image";

interface SpaceshipProps {
  size: string; // Taille du vaisseau spatial
  speed: number; // Vitesse de l'orbite
  imgSize: number; // Taille de l'image du vaisseau spatial
  radius: number; // Rayon de l'orbite
  imageSrc: string; // URL de l'image du vaisseau spatial
}

export const Spaceship = ({
  size,
  speed,
  radius,
  imageSrc,
  imgSize,
}: SpaceshipProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0.5,
        scale: 0.5,
        x: -radius,
        y: -200,
        rotate: -90, // Position de départ de la rotation
      }}
      animate={{
        opacity: [0.1, 1, 0.1], // Opacité varie entre 0.5 et 1
        scale: [0.1, 1, 0.1], // L'échelle varie pour simuler la distance
        x: [radius, -radius], // Déplacement horizontal de l'image
        // Rotation complète sur l'axe Z pour simuler l'orbite
      }}
      transition={{
        repeat: Infinity, // Répétition infinie de l'animation
        duration: speed, // Durée de l'orbite
        ease: "easeInOut", // Animation linéaire
      }}
      style={{
        width: size,
        height: size,
        position: "absolute",
        transformOrigin: "center", // La rotation doit se faire autour du centre de l'orbite
      }}
    >
      <Image
        src={imageSrc}
        alt="Vaisseau spatial"
        width={imgSize}
        height={imgSize}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};
