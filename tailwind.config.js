/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        big: '1200px',
        mid: '992px',
        low: '',
      },
    },
  },
  plugins: [],
};
