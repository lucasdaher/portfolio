/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#e9f1ff",
        "light-hover": "#deeaff",
        "light-active": "#bad5ff",
        normal: "#2176ff",
        "normal-hover": "#1e6ae6",
        "normal-active": "#1a5ecc",
        dark: "#1959bf",
        "dark-hover": "#144799",
        "dark-active": "#0f3573",
        darker: "#0c2959",
        "black-gray": "#303030",
      },
    },
  },
  plugins: [],
};
