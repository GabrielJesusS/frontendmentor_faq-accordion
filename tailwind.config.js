/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ["work-sans", "serif"],
      },
      colors: {
        "light-pink": "rgba(249 240 255 / <alpha-value>)",
        "grayish-purple": "rgba(140 105 145 / <alpha-value>)",
        "dark-purple": "rgba(47 21 51 / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
