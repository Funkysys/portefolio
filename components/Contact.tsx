import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "SQL", "API REST"],
    },
    {
      category: "Outils",
      items: ["Git", "VS Code", "Docker", "Figma", "Postman"],
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/votre-username",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/votre-profil",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:votre@email.com",
      icon: (
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="absolute w-[100vw] h-[100vh] overflow-y-auto">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Passionné par le développement web et les nouvelles technologies, je
            crée des expériences numériques uniques et immersives. Mon approche
            combine créativité et expertise technique pour donner vie à vos
            projets.
          </p>
        </motion.div>

        {/* Compétences */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Compétences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-white mb-4">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Me contacter</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 max-w-4xl mx-auto hover:bg-white/20 transition-all duration-300"
        >
          <p className="text-lg text-gray-300 mb-6">
            Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour
            en discuter !
          </p>
          <Link
            href="mailto:votre@email.com"
            className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 transition-colors duration-200"
          >
            Démarrer un projet
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
