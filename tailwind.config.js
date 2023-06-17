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
    fontFamily: {
      sans: ["Lexend", ...defaultTheme.fontFamily.sans],
      heading: ["Ubuntu", "sans-serif"],
      roadmap: ["Concert_One", "cursive"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
