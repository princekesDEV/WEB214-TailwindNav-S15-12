/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flexGrow: {
        2: "2",
        3: "3",
        4: "4",
      },
      colors: {
        "border-blue": "#0387fb",
      },
    },
  },
  plugins: [],
};
