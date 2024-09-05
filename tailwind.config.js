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
      }
    },
  },
  plugins: [],
}