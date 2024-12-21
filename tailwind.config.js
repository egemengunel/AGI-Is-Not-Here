/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slam: {
          '0%': { 
            transform: 'scale(2) translateZ(100px)',
            opacity: '0'
          },
          '60%': {
            transform: 'scale(0.9) translateZ(-20px)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(1) translateZ(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        slam: 'slam 0.8s cubic-bezier(.68,-0.6,.32,1.8) both'
      }
    },
  },
  plugins: [],
} 