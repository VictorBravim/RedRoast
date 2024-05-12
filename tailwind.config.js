/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "gray-custom": "#161719",
        "gray-custom2": "#1C1D1F"
      },
    },
  },
  plugins: [],
}

