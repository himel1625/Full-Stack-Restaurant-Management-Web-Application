/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Lato: "'Lato', sans-serif",
      },
      colors: {
        DGray: '#2d3748',
        DmColor: '#0F172A',
        text: '#D2691E',
      },
    },
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
};
