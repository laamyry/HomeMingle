/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

  ],
  theme: {
    extend: {
      colors: {
        greeny: {
        300: '#11D28C'
        },
        darky: {
        700: '#303030'
        },
        lighty: {
        100: '#FCFCFC'
        }
      },
      fontFamily: {
        'us-thin': ['Us Thin', 'sans-serif'],
        'us-light': ['Us Light', 'sans-serif'],
        'us-heavy': ['US Heavy', 'sans-serif'],
        'us-bold': ['Us Bold', 'sans-serif'],
        'us-semi-bold': ['Us SemiBold', 'sans-serif'],
        'us-regular': ['Us Regular', 'sans-serif'],
        'us-book': ['Us Book', 'sans-serif'],
      },
    },
  },
  plugins: [],
}