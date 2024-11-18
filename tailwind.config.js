/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-header-mobile': "url('./src/assets/Tattoo Studio.png')",
        'bg-header-desk': "url('./src/assets/Tattoo Studio.png')",
        'bg-Primary':"url('./src/assets/BgPrimary.png')",
        'bg-Banner':"url('./src/assets/Banner.png')",
        'bg-Review':"url('./src/assets/Review.png')"
      },
      fontFamily:{
        "custom-font": ["Kenia", "sans-serif"],
        "font-slider":["ABeeZee", "sans-serif"],
        "font-footer":["Aboreto", "system-ui"]
      }
    },
  },
  plugins: [],
}