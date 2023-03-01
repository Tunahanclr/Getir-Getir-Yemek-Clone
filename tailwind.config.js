/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {container: {
      center: true,
      screens: {
        lg: '1240px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
      colors:{
        'brandColor':'#4c3398',
        'primary-brandColor':'#5d3ebc',
        'secondary-brandColor':'#7849f7',
        "bar-color":'#B570FA',
        "number-color":'#E0E0E0',
        "color-gray-storm":'#697488',
      }
      // backgroundColor:[]
    },
  },
  plugins: [],
}


