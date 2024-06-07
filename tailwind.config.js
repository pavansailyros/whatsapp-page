/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      lg: [ '16px', '22px', '-01em'],
      xs: ['20px', '22px'],
      sm: ['12px', '28px'],
      base: ['18px', '25px'],
      // lg: ['18px', '21.94px'],
      // xl: ['20px', '24.38px'],
      xl: ['18px', '22px', '-0.01em'],
      '2xl': ['32px', '29.26px'],
      // '3xl': ['28px', '50px'],
      '4xl': ['40px', '50px'],
      '5xl': ['60px', '60px']
      // '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        hleveticaneue: [  'Helvetica Neue', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif' ],
        helvetica: [ 'Helvetica, Arial, sans-serif' ],
        montserrat: [ 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'primary': "#fcf5eb",
        "coral-green": "#23d366",
        "coral-black": "#111B21",
        "black-color": "#1c1e21",
        "pale-gray": "#F0F4F9",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
        'motherDaughter-img': "url('assets/images/motherandDaughter.png')",
        'best-friend-group-img': "url('assets/images/best-friend-group-img.png')"
      },
      
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
