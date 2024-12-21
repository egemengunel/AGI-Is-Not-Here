/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spring: {
          '0%': { 
            transform: 'translateY(-50px)',
            opacity: '0'
          },
          '50%': {
            opacity: '0.6'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        spring: 'spring 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both'
      }
    },
  },
  plugins: [],
} 