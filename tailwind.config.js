/** @type {import('tailwindcss').Config} */
const { fontFamily, spacing } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "apps/site/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          light: "rgb(var(--primary-light) / <alpha-value>)",
          dark: "rgb(var(--primary-dark) / <alpha-value>)",
        },
      },
      keyframes: {
        leftToRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-8px)" },
        },
        rightToLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(8px)" },
        },
        slightRotation: {
          "0%, 100%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(-3deg)" },
        },
        blob: {
          "0%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.05)",
            // transform: "",
          },
          "50%": {
            transform: "scale(1)",
            // transform: "",
          },
          "75%": {
            transform: "scale(0.95)",
            // transform: "",
          },
          "100%": {
            transform: "scale(1)",
            // transform: "",
          },
        },
      },
      animation: {
        blob: "blob 6s infinite ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
