/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      custom: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "netflix-bg":
          "url('/public/img/IN-en-20220704-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
      },
    },
  },
  plugins: [],
};
