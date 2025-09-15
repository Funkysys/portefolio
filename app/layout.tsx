import type { Metadata, Viewport } from "next";
import { Belleza, Geist, Geist_Mono, Roboto, Ruda } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const belleza = Belleza({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-belleza",
});

const ruda = Ruda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ruda",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Antoine Delbos | Portfolio",
  description:
    "Portfolio d'Antoine Delbos - Développeur Full Stack spécialisé en React, Next.js, et Node.js. Découvrez mes projets et compétences en développement web.",
  keywords: [
    "développeur web",
    "full stack",
    "react",
    "next.js",
    "node.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Antoine Delbos" }],
  creator: "Antoine Delbos",
  publisher: "Antoine Delbos",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://antoinedelbos-portefolio.vercel.app/",
    title: "Antoine Delbos | Portfolio",
    description:
      "Portfolio d'Antoine Delbos - Développeur Full Stack spécialisé en React, Next.js, et Node.js",
    siteName: "Portfolio d'Antoine Delbos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antoine Delbos | Portfolio",
    description:
      "Portfolio d'Antoine Delbos - Développeur Full Stack spécialisé en React, Next.js, et Node.js",
    creator: "@AdelAabid",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${belleza.variable} ${ruda.variable} font-sans bg-gradient-to-br from-cyan-950 to-cyan-900 text-cyan-50`}
      >
        {children}

        <Footer />
      </body>
    </html>
  );
}
