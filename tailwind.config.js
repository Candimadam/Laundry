/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "login.html", "register.html", "dashboard.html"],
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
