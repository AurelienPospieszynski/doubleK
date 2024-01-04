/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        fontOrbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        colorMenu: '#fef8e0',
        colorCream: '#a69e79',
        ColorFontMenu: '#39360b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
