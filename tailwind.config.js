/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'darkGray' :'rgb(89, 117, 138)',
      }
    },
  },
  plugins: [],
};
