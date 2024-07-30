/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scrollDownAnimation: 'scrollDownAnimation 2s infinite',
      },
      keyframes: {
        scrollDownAnimation: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '40%': { opacity: '1' },
          '80%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}