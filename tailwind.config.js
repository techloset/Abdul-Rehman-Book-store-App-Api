/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      hanken: ["Hanken Grotesk"],
      sans: ["Open Sans"],
    },
    backgroundImage: {
      "ovalImage": "url('/src/assets/images/book.png')",
    },
  },
  plugins: [],
};
