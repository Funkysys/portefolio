"use client";

import { Circle } from "@/components/Circle";
import { Planet } from "@/components/Planet";
import Realisation from "@/components/Realisation";
import { Spaceship } from "@/components/SpaceShip";
import { Star } from "@/components/Star";
import Title from "@/components/Title";
import Contact from "@/components/Contact";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.001
  });

  const firstSectionOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const secondSectionOpacity = useTransform(smoothProgress, [0.1, 0.15], [0, 1]);
  const contactY = useTransform(smoothProgress, [0.85, 0.95], ["100%", "0%"]);
  const contactOpacity = useTransform(smoothProgress, [0.85, 0.92], [0, 1]);

  return (
    <main className="flex w-full h-[220vh] min-h-screen flex-col gap-8 bg-perso-bg">
      {/* Première section */}
      <div className="flex w-full min-h-screen flex-col gap-8 justify-center items-center">
        <motion.div
          className="relative flex w-full h-full flex-col gap-8 justify-center items-center font-roboto md:my-[40vh] "
          style={{
            opacity: firstSectionOpacity,
          }}
        >
          {/* Étoiles (ajustées en fonction de l'écran) */}
          <Star x="5%" y="10%" hidden scale={0.8} />
          <Star x="10%" y="70%" hidden scale={0.6} />
          <Star x="17%" y="82%" small />
          <Star x="9%" y="10%" small scale={0.5} />
          <Star x="20%" y="30%" hidden scale={0.4} />
          <Star x="43%" y="90%" small scale={0.7} />
          <Star x="47%" y="17%" small />
          <Star x="77%" y="15%" small scale={0.6} />
          <Star x="80%" y="60%" hidden scale={0.9} />
          <Star x="83%" y="78%" small scale={0.8} />
          <Star x="90%" y="15%" hidden scale={0.7} />
          <Star x="87%" y="92%" hidden scale={0.8} />

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
        className="relative z-0 mb-[50vh]"
        style={{
          opacity: secondSectionOpacity,
        }}
      >
        <Realisation />
      </motion.div>

      {/* Section Contact avec effet de superposition */}
      <motion.div
        className="fixed top-0 left-0 w-[100vw] h-[100vh] z-50"
        style={{
          opacity: contactOpacity,
          y: contactY,
        }}
      >
        <div className="w-full h-full bg-black/60 backdrop-blur-sm">
          <Contact />
        </div>
      </motion.div>
    </main>
  );
}
