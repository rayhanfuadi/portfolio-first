/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#F2CF30',
        dark: '#3A3132',
        soft: '#F2EDD7',
        regular: '#777777',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}


