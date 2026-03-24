import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neo: {
          greige: "#D7D3C8",
          pearl: "#FDFBF7",
          gold: "#C5A880",
          charcoal: "#282828",
        },
        residence: {
          offwhite: "#F5F5F1",
          zinc: "#18181B",
          amber: "#FBBF24",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.06)',
        'soft-gold': '0 10px 40px -10px rgba(197,168,128,0.15)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1', boxShadow: '0 0 0 rgba(251, 191, 36, 0)' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8', boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
