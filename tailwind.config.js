/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,scss,ts}"],
  theme: {
    extend: {
      fontFamily: {
        fontOrbitron: ["Orbitron", "sans-serif"],
        fontMontserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        colorMenu: "#fef8e0",
        colorCream: "#a69e79",
        ColorFontMenu: "#39360b",
      },
      screens: {
        'xl': '1200px',
        'custom': '1450px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
