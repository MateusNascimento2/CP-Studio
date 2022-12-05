/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'yellow-green': '#e8ff3f',
      'grey': '#b2b2b2',
      'black': '#000000',
      'darkgray': '#333333',
      'blue-facebook': '#3b5998',
      'green-wa': '#00FF00',
      'purple-insta': '#8a3ab9',
      'blue-twitter': '#00ACEE',
    },
    fontFamily: {
      'body': ['Roboto Condensed']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
