/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        powerup: {
          '0%': { 
            transform: 'translateY(10px) scale(0.95)',
            filter: 'brightness(0.5)',
            opacity: '0'
          },
          '30%': {
            transform: 'translateY(0) scale(1)',
            filter: 'brightness(3)',
            opacity: '1'
          },
          '60%': {
            transform: 'translateY(0) scale(1)',
            filter: 'brightness(2.5)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(0) scale(1)',
            filter: 'brightness(1)',
            opacity: '1'
          }
        }
      },
      animation: {
        powerup: 'powerup 1.5s cubic-bezier(0.22, 1, 0.36, 1) both'
      }
    },
  },
  plugins: [],
} 