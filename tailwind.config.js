/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        maintext: 'var(--maintext)',
        softText: 'var(--softText)',
        active: 'var(--active)',
        borderr: 'var(--borderr)',
        bgsoft: 'var(--bgsoft)',
        bgdark: 'var(--bgdark)',
        smTitle: 'var(--smTitle)',
        textB1: 'var(--textB1)',
      },
      fontFamily: {
        header: 'Montserrat, sans-serif',
        text: "Lato, sans-serif",
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}