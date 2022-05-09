const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./dist/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "system-ui"],
      serif: ["Roboto Slab", "ui-serif"],
      mono: ["Roboto Mono", "ui-monospace"]
    },
    extend: {
      colors: {
        dark: {
          100: "#151619",
          200: "#1d1f22",
          300: "#2b2d31",
          400: "#35393f",
          500: "#5a6069",
          600: "#7c8187"
        },
        light: {
          100: "#c1c4cb",
          200: "#e4e4e4",
          300: "#f5f5f5",
          400: "#ffffff"
        },
        accent: {
          100: "#e46643",
          200: "#f39765"
        }
      }
    }
  },
  plugins: []
}
