/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9F5',
        lavender: {
          DEFAULT: '#5D4C86',
          light: '#D4C4FB',
        },
        pink: {
          DEFAULT: '#FF85A2',
          light: '#FFC4D6',
        },
        gold: '#FFD700',
        blue: {
          pastel: '#B8E1FF',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
