/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
         'GFS-Didot': ['GFS Didot'],
         'lato': ['Lato'],
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}


