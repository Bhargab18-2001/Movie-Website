/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '50px', 'max': '449px'},
        
        'md': {'min': '449px', 'max': '644px'},
        
        'lg': {'min': '644px', 'max': '767px'},
  
        'xl': {'min': '767px', 'max': '1199px'},
        
        '2xl': {'min': '1199px', 'max': '1400px'},

        '6xl': {'min': '2000px', 'max': '2570px'},
      },
    },
  },
  plugins: [],
}
