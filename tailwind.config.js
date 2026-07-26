/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1A56DB",
        darkNavy: "#1E3A5F",
        white: "#FFFFFF",
        lightBlue: "#EFF6FF",
        darkText: "#111827",
        graySub: "#6B7280",
        successGreen: "#059669"
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem"
      },
      container: {
        center: true,
        padding: "2rem"
      },
      borderRadius: {
        DEFAULT: "0.5rem"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};