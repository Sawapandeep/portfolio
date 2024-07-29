
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "mission-bg": "url('./public/Images/possibility.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        meteor: "meteor 5s linear infinite",
        fadeIn: 'fadeIn 1s ease-out',
      },
      keyframes: {
        orbit: 
        {
          "0%": {transform:"rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)"},
          "100%": {transform:"rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)"},
        },
        meteor: 
        {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {transform: "rotate(215deg) translateX(-500px)",opacity: "0"},
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
    },
  },
},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a855f7",
          secondary: "#7e22ce",
          accent: "#ff00ff",
          neutral: "#d8b4fe",
          "base-100": "#1c1917",
          info: "#38bdf8",
          success: "#4ade80",
          warning: "#fde047",
          error: "#ff0000",
        },
      },
    ],
  },
};


export default config;