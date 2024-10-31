/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md2': '897px'
      },
      backgroundImage: {
        'image1' : "url('./assets/rectangle_7.png')",
        'image2' : "url('./assets/macbook.webp')",
        'image3' : "url('./assets/jquery.jpeg')",
        'image4' : "url('./assets/apple.jpeg')",
        'image5' : "url('./assets/setup.jpeg')"
      },
      colors: {
        'custom-bg1': 'rgb(25, 42, 92)',
        'custom-bg2': 'rgb(1, 108, 127)',
        'custom-bg3': 'rgb(166, 35, 12)',
        'custom-color1': 'rgb(11, 5, 102)'
      },
      inset: {
        '40': '45%'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sniglet: ['Sniglet', 'sans-serif']
      }
    },
  },
  plugins: [],
}

