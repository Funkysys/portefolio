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
    <main className="flex w-[100vw] min-h-[100vh] flex-col gap-8 justify-center items-center bg-perso-bg">
      <div className="flex w-[100vw] h-[100vh] flex-col gap-8 justify-center items-center">
        <motion.div
          className="relative flex w-[100vw] h-[100vh] flex-col gap-8 justify-center items-center font-roboto"
          style={{
            opacity: firstSectionOpacity,
          }}
        >
          <Star x="10%" y="10%" />
          <Star x="22%" y="35%" />
          <Star x="72%" y="27%" />
          <Star x="83%" y="68%" />
          <Star x="91%" y="18%" />
          <Star x="14%" y="74%" />
          <Planet radius={300} size="50px" speed={8} />
          <Spaceship
            radius={250}
            size="40px"
            imgSize={150}
            speed={12}
            imageSrc="/images/spaceShip.png"
          />
          <Title />
          <Circle />
        </motion.div>
      </div>
      <motion.div
        className="flex w-[100vw] h-[100vh] flex-col gap-8 justify-center items-center"
        style={{
          opacity: secondSectionOpacity,
        }}
      >
        <h3>Mes Réalisations</h3>
      </motion.div>
    </main>
  );
}
