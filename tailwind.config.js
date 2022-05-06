const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    colors: {
      black: "#525252",
      orange: "#A15235",
      gray: "#919191",
    },
    extend: {
      width: {
        960: "960px",
      },
    },
  },
  plugins: [],
};
