/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        main: {
          black: '#111827', // demo. Usage: text-main-black, bg-main-black
        },
      },
    },
  },
}
