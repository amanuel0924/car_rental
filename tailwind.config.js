/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        lightRed: "#fb3640",
        darkerBlue: "#22577a",
        greyshBlue: "#4c545d",
        lightgreyBlue: "#9cacb4",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "san-serif"],
      },
    },
  },
  plugins: [],
}
