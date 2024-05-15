/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#F2CF30',
        dark: '#3A3132',
        dark2: '#443B3C',
        soft: '#F2EDD7',
        regular: '#777777',
        light: '#999999',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}


