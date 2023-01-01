/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'or': '#deb887',
      },
      fontFamily: {
        DancingS: "Dancing Script",
      },
    },

  },
  plugins: [],
}
