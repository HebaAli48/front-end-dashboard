/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "back-color": "var(--back-color)",
        "third-color": "var(--third-color)",
        "btn-primary": "var(--btn-primary)",
        "btn-Secondary": "var(--btn-Secondary)",
        "line-primary": "var(--line-primary)",
      },
    },
  },
  plugins: [],
};
