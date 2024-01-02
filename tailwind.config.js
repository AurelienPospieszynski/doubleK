/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        font1: ['Montserrat', 'sans-serif'],
        font2: ['Orbitron', 'sans-serif'],
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
