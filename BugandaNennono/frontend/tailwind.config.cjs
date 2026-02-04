/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'royal': {
          50: '#e6eaf5',
          100: '#c2cde8',
          200: '#9ab0db',
          300: '#7293ce',
          400: '#5176c1',
          500: '#022b90',  // Primary royal blue
          600: '#022682',
          700: '#022073',
          800: '#011a65',
          900: '#011357',
        },
        'gold': {
          50: '#fef9ed',
          100: '#fcf0d1',
          200: '#fae7b5',
          300: '#f8de99',
          400: '#f6d57d',
          500: '#e9b339',  // Primary gold
          600: '#d19e25',
          700: '#b98a1f',
          800: '#a17619',
          900: '#896213',
        }
      }
    }
  },
  plugins: []
}
