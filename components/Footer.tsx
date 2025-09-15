import Link from "next/link";

const Footer = () => (
  <footer className="w-full py-6 bg-zinc-900 border-t border-zinc-800 ">
    <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-zinc-400">
      <span>&copy; {new Date().getFullYear()} Antoine Delbos</span>
      <div className="flex gap-4">
        <Link
          href="/mentions-legales"
          className="hover:text-yellow-400 transition-colors"
        >
          Mentions légales
        </Link>
        <Link
          href="/politique-confidentialite"
          className="hover:text-yellow-400 transition-colors"
        >
          Politique de confidentialité
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
