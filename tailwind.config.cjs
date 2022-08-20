/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/homebg.jpg')",
        'naval-bg': "url('/navalbg.gif')",
        'fire-bg': "url('/fire.gif')",
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
