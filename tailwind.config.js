module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f6f9fb",
          300: "#dedede",
          500: "#999999",
          600: "#ac6651",
          900: "#161920",
          "600_01": "#717275",
        },
        blue: { 50: "#eef4ff", A700: "#0261fe" },
        red: { 500: "#e74d3d" },
        teal: { 50: "#d1eff3" },
        cyan: { 200: "#6bd9e9" },
        black: { 900: "#000000" },
        blue_gray: { 900: "#333333" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
