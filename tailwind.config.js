/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #67e8f9, #5eead4)', // from-cyan-300 to-teal-200
      },
      colors: {
        background: '#FFFFFF',
        primaryText:'#252B42',
        secondText: '#737373',
        blueText: '#23A6F0'
      },
      fontFamily: {
        montserrat: ['Montserrat','sans-serif'],
      },
      fontSize: {
        'h5': '1rem',
        'h2': '2.5rem',
        'h1': '3.5rem',
        'h3': '1.5rem',
        'h4': '1.25rem',
        'h6': '0.875rem'
      }
    },
  },
  plugins: [],
}

