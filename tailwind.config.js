/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"poppins"',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // styled: true,
    themes: false,
  },
};
