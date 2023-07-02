const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./store/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 5s linear infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
          "10%": { transform: "translateY(0px)" },
        },
      },
    },
    fontFamily: {
      sans: ["Lexend", ...defaultTheme.fontFamily.sans],
      heading: ["Ubuntu", "sans-serif"],
      roadmap: ["Concert_One", "cursive"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
