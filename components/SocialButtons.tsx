import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/Funkysys",
    icon: <FaGithub size={20} />,
    color: "bg-zinc-900 text-white hover:bg-zinc-700",
  },
  {
    label: "Contact Mail",
    href: "mailto:antoine.delbos.dev@gmail.com",
    icon: <FaEnvelope size={20} />,
    color: "bg-yellow-400 text-zinc-900 hover:bg-yellow-500",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/antoine-delbos/",
    icon: <FaLinkedin size={20} />,
    color: "bg-blue-600 text-white hover:bg-blue-700",
  },
];

const SocialButtons = () => (
  <div className="flex flex-wrap gap-4 justify-center my-6">
    {links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow transition-colors duration-200 ${link.color}`}
      >
        {link.icon}
        <span>{link.label}</span>
      </a>
    ))}
  </div>
);

export default SocialButtons;
