import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Star } from "./Star";

type PlanetContent = {
  title: string;
  description: string;
  color: string;
  image?: string;
  link?: string;
};

const RealisationPortrait = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      name: "Spinosor Records",
      baseSize: 10,
      orbitMultiplier: 1.4,
      speed: 15,
      size: 20,
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
      size: 18,
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
      size: 22,
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
      size: 16,
      z: 80,
      color: "orange",
      description:
        "Développement d'un blog en NextJS pour les passionnés de musique. Partage d'albums et de critiques.",
      image: "url('/images/discophiles.png')",
      link: "https://www.discophiles-blog.eu/",
    },
    {
      name: "Stage Musical du Lot",
      baseSize: 8, // Augmentation de la taille de base
      orbitMultiplier: 1.35,
      speed: 10,
      z: 100,
      size: 19,
      color: "purple",
      description:
        "Développement d'un site vitrine static pour un stage d'improvisation en NextJs.",
      image: "url('/images/stage2.png')",
      link: "https://stagemusicaldulot.fr",
    },
  ];

  const currentContent: PlanetContent =
    selectedProject !== null
      ? {
          title: `Planète ${projects[selectedProject].name}`,
          description: projects[selectedProject].description,
          color: projects[selectedProject].color,
          image: projects[selectedProject].image,
          link: projects[selectedProject].link,
        }
      : {
          title: "Mes Réalisations",
          description:
            "Découvrez mes projets interactifs et immersifs, créés avec passion et expertise pour vous offrir des expériences uniques.",
          color: "transparent",
        };

  return (
    <div className="relative w-full min-h-screen bg-perso-bg overflow-hidden flex flex-col items-center py-8">
      {/* Étoiles */}
      {/* Haut de l'écran */}
      <Star x="5%" y="5%" hidden scale={0.6} />
      <Star x="15%" y="8%" small scale={0.4} />
      <Star x="25%" y="12%" hidden scale={0.8} />
      <Star x="35%" y="6%" small scale={0.5} />
      <Star x="45%" y="10%" hidden scale={0.7} />
      <Star x="55%" y="7%" small scale={0.4} />
      <Star x="65%" y="11%" hidden scale={0.6} />
      <Star x="75%" y="5%" small scale={0.5} />
      <Star x="85%" y="9%" hidden scale={0.7} />
      <Star x="95%" y="12%" small scale={0.4} />

      {/* Milieu de l'écran */}
      <Star x="8%" y="40%" hidden scale={0.7} />
      <Star x="20%" y="35%" small scale={0.5} />
      <Star x="32%" y="45%" hidden scale={0.6} />
      <Star x="44%" y="38%" small scale={0.4} />
      <Star x="56%" y="42%" hidden scale={0.8} />
      <Star x="68%" y="36%" small scale={0.5} />
      <Star x="80%" y="44%" hidden scale={0.6} />
      <Star x="92%" y="39%" small scale={0.4} />

      {/* Bas de l'écran */}
      <Star x="10%" y="75%" hidden scale={0.6} />
      <Star x="22%" y="82%" small scale={0.5} />
      <Star x="34%" y="78%" hidden scale={0.7} />
      <Star x="46%" y="85%" small scale={0.4} />
      <Star x="58%" y="80%" hidden scale={0.8} />
      <Star x="70%" y="77%" small scale={0.5} />
      <Star x="82%" y="83%" hidden scale={0.6} />
      <Star x="94%" y="79%" small scale={0.4} />

      {/* Espace en haut */}
      <div className="h-24" /> {/* Ajustez la hauteur (h-24 = 6rem) selon vos besoins */}

      {/* Container des planètes */}
      <div className="flex flex-col items-center gap-16 w-full px-4 relative">
        {projects.map((project, index) => {
          const xOffset = index % 2 === 0 ? -20 : 20; // Décalage alterné gauche/droite

          return (
            <motion.div
              key={index}
              className="relative"
              initial={{ x: xOffset, opacity: 0 }}
              animate={{ 
                x: selectedProject === index ? 0 : xOffset,
                opacity: 1,
                scale: selectedProject === index ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedProject(index);
                setShowModal(true);
              }}
            >
              {/* Planète */}
              <motion.div
                className="rounded-full shadow-lg shadow-white/20 cursor-pointer relative overflow-hidden border border-white/10"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20 + index * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  width: `${project.size}vw`,
                  height: `${project.size}vw`,
                  backgroundImage: project.image ? project.image : '',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay pour donner un effet de brillance */}
                <div className="absolute inset-0 bg-white/5 hover:bg-transparent transition-colors duration-300" />
              </motion.div>
              
              {/* Ligne de connexion */}
              <div 
                className="absolute top-1/2 left-1/2 h-[2px] bg-gradient-to-r from-white/5 via-white/20 to-white/5"
                style={{
                  width: '50vw',
                  transform: index % 2 === 0 ? 'translateX(-100%)' : 'translateX(0)',
                }}
              />

              {/* Nom de la planète */}
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 text-white font-bold text-lg md:text-xl bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
                style={{ 
                  left: index % 2 === 0 ? 'calc(100% + 1rem)' : 'auto',
                  right: index % 2 === 0 ? 'auto' : 'calc(100% + 1rem)',
                }}
              >
                Planète {project.name}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modale */}
      <AnimatePresence>
        {showModal && selectedProject !== null && (
          <div className="fixed inset-0 flex items-center justify-center z-[200]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-[90%] max-w-xl bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20"
            >
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                  {currentContent.title}
                </h2>
                <p className="text-lg mb-8">{currentContent.description}</p>
                {currentContent.link && (
                  <Link
                    href={currentContent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-200"
                  >
                    Visiter le site
                  </Link>
                )}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2 p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RealisationPortrait;
