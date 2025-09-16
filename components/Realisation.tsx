import Image from "next/image";
import Link from "next/link";

const realisations = [
  {
    name: "Spinosor Records",
    description:
      "Développement Fullstack d'un site web en NextJS pour la promotion d'artistes du Label Spinosor Records et l'écoute de musique.",
    image: "/images/1.png",
    link: "https://spinosor-records.eu/",
  },
  {
    name: "Alter Nativ Publishing",
    description:
      "Développement de la partie Frontend pour une édition musicale. Le défi était de créer un player spécifique contenant des markers et des régions cliquables et configurables à souhait pour les clients ainsi qu'un système de recherche personnalisé.",
    image: "/images/alter-nativ.png",
    link: "https://alternativpublishing.com",
  },
  {
    name: "In Extremis Formation",
    description:
      "Développement d'un site vitrine pour une association proposant des cours en ligne, des stages, etc.... sur la musique et l'improvisation.",
    image: "/images/in-extremis.png",
    link: "https://in-extremis-formation.fr",
  },
];

const Realisation = () => {
  return (
    <section className="w-full max-w-[98vw] md:max-w-[80vw] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-2 sm:px-0 pb-16 md:pb-0">
      {realisations.map((r) => (
        <Link
          key={r.name}
          href={r.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 border border-zinc-700 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between items-center p-4 sm:p-6 md:p-8 hover:scale-[1.025] min-h-[340px]"
        >
          <div className="flex-1 flex flex-col items-center w-full">
            <div className="aspect-square w-24 sm:w-36 mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-zinc-700 shadow-lg bg-zinc-700 flex items-center justify-center">
              <Image
                src={r.image}
                alt={r.name}
                width={144}
                height={144}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 text-center group-hover:text-yellow-400 transition-colors">
              {r.name}
            </h3>
            <p className="text-zinc-300 text-center text-sm sm:text-base leading-relaxed mb-2">
              {r.description}
            </p>
          </div>
          <span className="mt-4 inline-block px-4 py-2 rounded-full bg-yellow-400 text-zinc-900 font-semibold text-xs sm:text-sm shadow hover:bg-yellow-500 transition-colors">
            Voir le projet
          </span>
          <span className="absolute inset-0 pointer-events-none group-hover:bg-yellow-400/10 transition-colors duration-300 rounded-3xl" />
        </Link>
      ))}
    </section>
  );
};

export default Realisation;
