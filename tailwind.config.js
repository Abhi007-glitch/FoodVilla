/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}",],
  purge: [
    "./src/components/**/*.{js}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
