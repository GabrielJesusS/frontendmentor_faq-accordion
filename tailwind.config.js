/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,js,ts}"],
  theme: {
    extend: {
      maxWidth: {
        "accordion-container": "37.5rem",
      },
      fontFamily: {
        "work-sans": ["work-sans", "serif"],
      },
      colors: {
        "light-pink": "rgba(249 240 255 / <alpha-value>)",
        "grayish-purple": "rgba(140 105 145 / <alpha-value>)",
        "dark-purple": "rgba(47 21 51 / <alpha-value>)",
      },
      backgroundImage: {
        "mobile-pattern": "url(../public/images/background-pattern-mobile.svg)",
        "desktop-pattern":
          "url(../public/images/background-pattern-desktop.svg)",
      },
    },
  },
  plugins: [],
};
