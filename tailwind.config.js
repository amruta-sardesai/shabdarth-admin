/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      primary: '#f56f42',
      faint: '#f89472',
      dark: '#f24a12',
      hover: '#1e2575',
      active: '#0d146b',
      light: '#F7F3E8'
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
