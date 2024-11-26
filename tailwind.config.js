/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-header-mobile': "url('./src/assets/Tattoo Studio.webp')",
        'bg-header-desk': "url('./src/assets/Tattoo Studio.webp')",
        'bg-Primary':"url('./src/assets/BgPrimary.webp')",
        'bg-Banner':"url('./src/assets/Banner.webp')",
        'bg-Review':"url('./src/assets/Review.png')",
        'bg-Banner_2':"url('./src/assets/Banner_2.webp')",
        'bg-Study':"url('./src/assets/bgstudy.webp')",
        'bg-Care':"url('./src/assets/BannerCuidados.webp')",
        'bg-Contact':"url('./src/assets/BannerContact.webp')"

      },
      fontFamily:{
        "custom-font": ["Kenia", "sans-serif"],
        "font-slider":["ABeeZee", "sans-serif"],
        "font-footer":["Aboreto", "system-ui"],
        "font-Kelly":["Kelly Slab", "sans-serif"]
      }
    },
  },
  plugins: [],
}