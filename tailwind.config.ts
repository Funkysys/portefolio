import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        belleza: ["var(--font-belleza)", "sans-serif"],
        ruda: ["var(--font-ruda)", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "perso-bg": "#13182A",
        "perso-bg2": "#132A14",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
