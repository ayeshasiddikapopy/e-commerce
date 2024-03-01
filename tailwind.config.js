/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1240px',
        center: true,
      },
      padding: {
        'p-gap': '50px',
      },
      fontFamily: {
        'roboto' : ['Roboto', 'sans-serif']
      },
      colors: {
        'primary' : '#A9B388',
        'secondary' : '#5F6F52',
        'brown' : '#B99470',
        'being': '#FEFAE0',
       }
    },
  },
  plugins: [],
}