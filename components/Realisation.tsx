import { motion } from "framer-motion";
import { useState } from "react";
import { Star } from "./Star";

const SolarSystem = () => {
  const [activePlanet, setActivePlanet] = useState<number | null>(null);

  const planets = [
    {
      name: "1",
      size: 100,
      distance: 245,
      speed: 10,
      z: 100,
      color: "red",
      description: "Planète 1 - Description détaillée.",
    },
    {
      name: "2",
      size: 90,
      distance: 250,
      speed: 15,
      z: 90,
      color: "blue",
      description: "Planète 2 - Description détaillée.",
    },
    {
      name: "3",
      size: 80,
      distance: 280,
      speed: 20,
      z: 80,
      color: "orange",
      description: "Planète 3 - Description détaillée.",
    },
    {
      name: "4",
      size: 70,
      distance: 310,
      speed: 25,
      z: 70,
      color: "green",
      description: "Planète 4 - Description détaillée.",
    },
    {
      name: "5",
      size: 60,
      distance: 330,
      speed: 30,
      z: 60,
      color: "yellow",
      description: "Planète 5 - Description détaillée.",
    },
  ];

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
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

      {/* Planète centrale */}
      <div
        className="w-[40vw] h-[40vw] md:w-96 md:h-96 bg-blue-500 rounded-full absolute flex flex-col justify-center items-center shadow-lg text-center"
        style={{
          zIndex: 10,
        }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Mes Réalisations
        </h3>
        <p className="opacity-100 max-w-xl text-white">
          Découvrez mes projets interactifs et immersifs, créés avec passion et
          expertise pour vous offrir des expériences uniques.
        </p>
      </div>

      {/* Petites planètes */}
      {planets.map((planet, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 1, x: planet.distance }}
          animate={{
            rotate: 360, // Rotation infinie autour du centre
          }}
          transition={{
            repeat: Infinity,
            duration: planet.speed,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            backgroundColor: planet.color,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transformOrigin: `-${planet.distance}px`,
            marginTop: `-${planet.size / 2}px`,
            marginLeft: `-${planet.size / 2}px`,
            zIndex: planet.z,
          }}
          onMouseEnter={() => setActivePlanet(index)} // Ouvre la modale
        >
          {planet.name}
        </motion.div>
      ))}

      {/* Modale */}
      {activePlanet !== null && (
        <div
          className="absolute w-80 bg-perso-bg p-6 rounded-lg shadow-lg text-center"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 20,
          }}
        >
          <h2 className="text-xl font-bold mb-4">
            {planets[activePlanet].name}
          </h2>
          <p className="mb-4">{planets[activePlanet].description}</p>
          <button
            onClick={() => setActivePlanet(null)} // Ferme la modale
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Fermer
          </button>
        </div>
      )}
    </div>
  );
};

export default SolarSystem;
