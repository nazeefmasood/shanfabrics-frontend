/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['"Fredoka"', "sans-serif"], // Add your custom font
        popins: ['"Poppins"', "sans-serif"], // Add your custom font
        robson: ['"Robson"', "sans-serif"], // Add your custom font
      },
    },
  },
  plugins: [],
};
