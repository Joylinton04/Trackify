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
        smTitle: 'var(--smTitle)',
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