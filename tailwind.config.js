/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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