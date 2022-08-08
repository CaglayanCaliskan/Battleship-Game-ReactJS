/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('./src/assets/homebg.jpg')",
        'naval-bg': "url('./src/assets/navalbg.gif')",
        'fire-bg': "url('./src/assets/fire.gif')",
      },
      fontFamily: {
        'main-font': ['Playfair Display SC', 'sans'],
        'main2-font': ['Righteous', 'cursive'],
      },
      colors: {
        brand: '#1d2536',
      },
    },
  },
  plugins: [],
};
