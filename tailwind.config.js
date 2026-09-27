/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/index.html",
    "./frontend/src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        secondary: "#059669",
        accent: "#F59E0B",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
