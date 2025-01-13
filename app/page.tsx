"use client";

import { Circle } from "@/components/Circle";
import { Planet } from "@/components/Planet";
import { Spaceship } from "@/components/SpaceShip";
import { Star } from "@/components/Star";
import Title from "@/components/Title";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  // Utilisation de useScroll pour obtenir la position du scroll
  const { scrollYProgress } = useScroll();

  // Transformation de la position du scroll en opacité pour chaque section
  const firstSectionOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Première section disparaît
  const secondSectionOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]); // Deuxième section apparaît après que la première ait disparu

  return (
    <main className="flex w-full min-h-screen flex-col gap-8 justify-center items-center bg-perso-bg">
      {/* Première section */}
      <div className="flex w-full h-screen flex-col gap-8 justify-center items-center">
        <motion.div
          className="relative flex w-full h-full flex-col gap-8 justify-center items-center font-roboto"
          style={{
            opacity: firstSectionOpacity,
          }}
        >
          {/* Étoiles (ajustées en fonction de l'écran) */}
          <Star x="5%" y="10%" hidden />
          <Star x="10%" y="70%" hidden />
          <Star x="17%" y="82%" small />
          <Star x="9%" y="10%" small />
          <Star x="20%" y="30%" hidden />
          <Star x="43%" y="90%" small />
          <Star x="47%" y="17%" small />
          <Star x="77%" y="15%" small />
          <Star x="80%" y="60%" hidden />
          <Star x="83%" y="78%" small />
          <Star x="90%" y="15%" hidden />
          <Star x="87%" y="92%" hidden />

          {/* Planète principale et vaisseau */}
          <Planet radius={270} size="80px" speed={8} hidden />
          <Planet radius={180} size="70px" speed={8} y={120} />
          <Spaceship
            hidden
            radius={265}
            size="80px"
            imgSize={100}
            speed={12}
            imageSrc="/images/spaceShip.png"
          />
          <Spaceship
            radius={150}
            size="70px"
            imgSize={120}
            speed={12}
            y={-130}
            imageSrc="/images/spaceShip.png"
          />

          {/* Titre */}
          <Title />
          <Circle />
        </motion.div>
      </div>

      {/* Deuxième section */}
      <motion.div
        className="flex w-full h-screen flex-col gap-8 justify-center items-center text-center p-4"
        style={{
          opacity: secondSectionOpacity,
        }}
      >
        <h3 className="text-2xl md:text-4xl font-bold text-white">
          Mes Réalisations
        </h3>
        <p className="text-base md:text-lg text-gray-300 max-w-xl">
          Découvrez mes projets interactifs et immersifs, créés avec passion et
          expertise pour vous offrir des expériences uniques.
        </p>
      </motion.div>
    </main>
  );
}
