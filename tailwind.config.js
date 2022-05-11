module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
