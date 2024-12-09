/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        primaryText:'#252B42'
      },
      fontFamily: {
        montserrat: ['Montserrat','sans-serif'],
      }
    },
  },
  plugins: [],
}

