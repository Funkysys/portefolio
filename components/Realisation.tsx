import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import RealisationPortrait from "./RealisationPortrait";
import { Star } from "./Star";

type PlanetContent = {
  title: string;
  description: string;
  color: string;
  image: string;
  link?: string;
};

const SolarSystem = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);
  const [screenWidth, setScreenWidth] = useState(1024);
  const [showModal, setShowModal] = useState(false);
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    // Set initial dimensions
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLandscape) {
    return <RealisationPortrait />;
  }

  const planets: Array<{
    name: string;
    baseSize: number;
    orbitMultiplier: number;
    speed: number;
    z: number;
    color: string;
    description: string;
    image: string;
    link: string;
  }> = [
    {
      name: "Spinosor Records",
      baseSize: 10,
      orbitMultiplier: 1.4,
      speed: 15,
      z: 90,
      color: "blue",
      description:
        "Développement Fullstack d'un site web en NextJS pour la promotion d'artistes du Label Spinosor Records et l'écoute de musique.",
      image: "url('/images/1.png')",
      link: "https://spinosor-records.eu/",
    },
    {
      name: "Quai-Antique",
      baseSize: 10,
      orbitMultiplier: 1.55,
      speed: 30,
      z: 60,
      color: "yellow",
      description:
        "Réalisation d'un site vitrine pour mon titre RNCP de développeur web et web mobile représentant un faux restaurant en Symphony et NextJS.",
      image: "url('/images/quai-antique.png')",
      link: "https://quai-antique-front.vercel.app/",
    },
    {
      name: "Alter Nativ Publishing",
      baseSize: 9,
      orbitMultiplier: 1.5,
      speed: 25,
      z: 70,
      color: "green",
      description:
        "Développement de la partie Frontend pour une édition musicale.",
      image: "url('/images/alter_nativ.png')",
      link: "https://alternativpublishing.com",
    },
    {
      name: "Discophiles_blog",
      baseSize: 8,
      orbitMultiplier: 1.45,
      speed: 20,
      z: 80,
      color: "orange",
      description:
        "Développement d'un blog en NextJS pour les passionnés de musique. Partage d'albums et de critiques.",
      image: "url('/images/discophiles.png')",
      link: "https://discophiles_blog.eu",
    },
    {
      name: "Stage Musical du Lot",
      baseSize: 8, // Augmentation de la taille de base
      orbitMultiplier: 1.35,
      speed: 10,
      z: 100,
      color: "purple",
      description:
        "Développement d'un site vitrine static pour un stage d'improvisation en NextJs.",
      image: "url('/images/stage2.png')",
      link: "https://stagemusicaldulot.fr",
    },
  ];

  const defaultContent: PlanetContent = {
    title: "Mes Réalisations",
    description:
      "Découvrez mes projets interactifs et immersifs, créés avec passion et expertise pour vous offrir des expériences uniques.",
    color: "transparent",
    image: "url('/images/default-bg.jpg')",
  };

  const currentContent: PlanetContent =
    hoveredPlanet !== null
      ? {
          title: `${planets[hoveredPlanet].name}`,
          description: planets[hoveredPlanet].description,
          color: planets[hoveredPlanet].color,
          image: planets[hoveredPlanet].image,
          link: planets[hoveredPlanet].link,
        }
      : defaultContent;

  const getOrbitDistance = (screenWidth: number, orbitMultiplier: number) => {
    let centralPlanetSize = 50;
    if (screenWidth >= 768) centralPlanetSize = 50;
    if (screenWidth >= 1024) centralPlanetSize = 40;
    if (screenWidth >= 1280) centralPlanetSize = 28;

    return (centralPlanetSize / 2) * orbitMultiplier;
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden font-ruda">
      {/* Étoiles */}
      <Star x="10%" y="8%" hidden scale={0.9} />
      <Star x="26%" y="17%" hidden scale={0.8} />
      <Star x="10%" y="70%" hidden scale={0.6} />
      <Star x="22%" y="66%" hidden scale={0.8} />
      <Star x="17%" y="82%" small />
      <Star x="9%" y="10%" small scale={0.5} />
      <Star x="20%" y="30%" hidden scale={0.4} />
      <Star x="43%" y="90%" small scale={0.7} />
      <Star x="47%" y="17%" small />
      <Star x="77%" y="15%" small scale={0.6} />
      <Star x="65%" y="13%" hidden scale={0.6} />
      <Star x="80%" y="60%" hidden scale={0.9} />
      <Star x="83%" y="78%" small scale={0.8} />
      <Star x="59%" y="84%" hidden scale={0.8} />
      <Star x="90%" y="15%" hidden scale={0.7} />
      <Star x="87%" y="92%" hidden scale={0.8} />

      <div className="w-full h-full relative flex items-center justify-center">
        <Star x="10%" y="10%" />
        <Star x="20%" y="90%" />
        <Star x="80%" y="20%" />
        <Star x="85%" y="85%" />
        <Star x="15%" y="50%" scale={0.7} />
        <Star x="90%" y="15%" hidden scale={0.7} />
        <Star x="87%" y="92%" hidden scale={0.8} />

        <div
          className="w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] xl:w-[25vw] xl:h-[25vw] bg-blue-500 rounded-full absolute flex flex-col justify-center items-center text-center border-4 border-sky-900 shadow-md shadow-white"
          style={{
            zIndex: 50,
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentContent.color}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute w-full h-full rounded-full"
              style={{
                backgroundColor: currentContent.color,
                backgroundImage: currentContent.image,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>

          {/* Animation du contenu */}
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredPlanet ?? "default"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full h-full flex flex-col justify-center items-center text-white"
              style={{ zIndex: 51 }}
            >
              <div className="relative bg-black/40 w-full h-full rounded-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center bg-black/70 rounded-xl py-8 px-16 text-white overflow-y-auto border border-white/20">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-belleza">
                    {currentContent.title}
                  </h3>
                  <button
                    onClick={() => setShowModal(true)}
                    className="mt-4 px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors duration-200"
                  >
                    En savoir plus
                  </button>
                  {hoveredPlanet !== null && (
                    <button
                      onClick={() => setHoveredPlanet(null)}
                      className="mt-4 px-6 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors duration-200 z-[100]"
                    >
                      Fermer
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modale avec animation */}
        <AnimatePresence>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-[200]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50"
                onClick={() => {
                  setShowModal(false);
                  setHoveredPlanet(null);
                }}
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-[90%] md:w-[40%] h-[30vh] sm:h-[40vh] flex flex-col justify-center items-center bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 text-white overflow-y-auto border border-white/20"
              >
                <div className="flex flex-col justify-center items-center bg-black/50 rounded-xl p-8 text-white overflow-y-auto border border-white/20">
                  <div className="text-white text-center">
                    <button
                      onClick={() => {
                        setShowModal(false);
                        setHoveredPlanet(null);
                      }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full border border-white/20 transition-colors duration-200 group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 transform rotate-0 group-hover:rotate-180 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">
                    {currentContent.title}
                  </h2>
                  <p className="text-lg mb-16">{currentContent.description}</p>
                  {currentContent.link && (
                    <Link
                      href={currentContent.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg border-2 px-3 py-2 rounded-md bg-yellow-400 text-cyan-950 hover:text-cyan-200 hover:bg-yellow-800 transition-colors duration-200"
                    >
                      Visiter le site
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Conteneur des orbites */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 2 }}
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {planets.map((planet, index) => {
            const orbitDistance = getOrbitDistance(
              screenWidth,
              planet.orbitMultiplier
            );
            const sizeScale =
              screenWidth < 640
                ? 1.5 // Augmentation de l'échelle sur mobile
                : screenWidth < 1024
                ? 1.5
                : 1;
            const planetSize = planet.baseSize * sizeScale;
            const angle = index * (360 / planets.length) * (Math.PI / 180);

            return (
              <motion.div
                key={index}
                className="absolute shadow-sm shadow-white"
                style={{
                  width: `${planetSize}vw`,
                  height: `${planetSize}vw`,
                  backgroundColor: planet.color,
                  borderRadius: "50%",
                  transform: `translate(-50%, -50%)`,
                  left: `calc(50% + ${orbitDistance * Math.cos(angle)}vw)`,
                  top: `calc(50% + ${orbitDistance * Math.sin(angle)}vw)`,
                  zIndex: 3,
                  backgroundImage: planet.image,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                onMouseEnter={() => setHoveredPlanet(index)}
              >
                {planet.name}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SolarSystem;
