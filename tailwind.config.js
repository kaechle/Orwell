const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./dist/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {}
  },
  plugins: []
}
