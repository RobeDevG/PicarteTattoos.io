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
        'bg-Primary':"url('./src/assets/BgPrimary.png')"
      },
      fontFamily:{
        "custom-font": ["Kenia", "sans-serif"]
      }
    },
  },
  plugins: [],
}