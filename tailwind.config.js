/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'footer-texture': "url('./src/assets/footer-texture.jpeg')",
        'Drawing': "url('./src/assets/Drawing.png')",
      },
      colors: {
        primary: {"50":"#f5f3ff","100":"#ede9fe","200":"#ddd6fe","300":"#c4b5fd","400":"#a78bfa","500":"#8b5cf6","600":"#7c3aed","700":"#6d28d9","800":"#5b21b6","900":"#4c1d95","950":"#2e1065"}
      }
    },
    keyframes: {
      borderChange: {
        '0%, 100%': { borderColor: 'cyan' },
        '50%': { borderColor: 'yellow' },
      },
      
    },
    animation: {
      'border-color': 'borderChange 3s ease infinite',
    },
 
  },
  plugins: [],
}
