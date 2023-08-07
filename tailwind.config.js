/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        grey: "#64748B",
        coreYellow: "#EDC453",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        zodiak: ["Zodiak", "san-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      mds: "900px",
      md: "1060px",
      lg: "1200px",
      mlg: "1440px",
      xl: "1700px",
    },
    text: {
      xsm: "10px",
    },
  },
  plugins: [],
};
