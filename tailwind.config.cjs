/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", //se não der certo colocar className
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
