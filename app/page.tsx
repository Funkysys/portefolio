"use client";

import HomePart from "@/components/HomePart";
import Realisation from "@/components/Realisation";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const secondSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFirst(true), 100);
    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!secondSectionRef.current) return;
      const rect = secondSectionRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight * 0.85) {
        setShowSecond(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check au cas où déjà visible
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="flex w-full max-w-[100vw] min-h-screen flex-col gap-8 bg-perso-bg">
      {/* Première section animée à l'ouverture */}
      <section className="flex w-full min-h-screen gap-8 justify-center items-center">
        <motion.div
          className="relative flex flex-col w-full h-full gap-8 justify-center items-center font-roboto"
          initial={{ opacity: 0, y: 40 }}
          animate={showFirst ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <HomePart />
        </motion.div>
      </section>

      {/* Deuxième section animée au scroll */}
      <motion.div
        ref={secondSectionRef}
        className="relative h-[100vh] flex justify-center items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={showSecond ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Realisation />
      </motion.div>
    </main>
  );
}
