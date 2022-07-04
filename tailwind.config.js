/** @type {import('tailwindcss').Config} */
const { fontFamily, spacing, theme } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
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
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          light: "rgb(var(--secondary-light) / <alpha-value>)",
          dark: "rgb(var(--secondary-dark) / <alpha-value>)",
        },
        gray: {
          100: colors.neutral[100],
          200: colors.neutral[200],
          300: colors.neutral[300],
          400: colors.neutral[400],
          500: colors.neutral[500],
          600: colors.neutral[600],
          700: colors.neutral[700],
          800: colors.neutral[800],
          900: colors.neutral[900],
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
