/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1faeb",
          100: "#def4d3",
          200: "#bfebab",
          300: "#96dc7a",
          400: "#72ca51",
          500: "#52ae32",
          600: "#3d8c24",
          700: "#316b20",
          800: "#2a551f",
          900: "#26491e",
          950: "#10280b",
        },
      },
    },
  },
  plugins: [],
};
