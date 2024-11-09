import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "light-cyan": "hsl(193, 38%, 86%)",
          "Neon-Green": "hsl(150, 100%, 66%)",
        },
        neutral: {
          "Grayish-Blue": "hsl(217, 19%, 38%)",
          "Dark-Grayish-Blue": "hsl(217, 19%, 24%)",
          "Dark-Blue": "hsl(218, 23%, 16%)",
        },
      },
      fontFamily: {
        manrope: ['"Manrope"', "sans-serif"],
      },
      animation: {
        roll: "roll 1s linear infinite",
        bounceDot: "bounceDot 0.6s infinite alternate",
        fadeDot: "fadeDot 1s infinite",
      },
      keyframes: {
        roll: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounceDot: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-8px)" },
        },
        fadeDot: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
