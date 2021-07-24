module.exports = {
  mode: "jit",
  purge: ["src/**/*.{html,md}", ".eleventy.js"],
  theme: {
    extend: {
      fontFamily: {
        hand: "'Mali', cursive",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
