/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        custom1: ['Noto Serif', 'serif'],
      },
      colors: {
        customCream: '#a69e79'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
