/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': {
          '50': '#EEF1FD',
          '100': '#CAD4F8',
          '200': '#CAD4F8',
          '300': '#8CA1F0',
          '400': '#768FED',
          '500': '#5473E9',
          '600': '#4C69D4',
          '700': '#3C52A5',
          '800': '#2E3F80',
          '900': '#233062',
        },
        'secondary': {
          '50': '#F3FDF9',
          '100': '#D9FAEB',
          '200': '#C6F7E2',
          '300': '#ACF4D5',
          '400': '#9CF1CD',
          '500': '#83EEC0',
          '600': '#77D9AF',
          '700': '#5DA988',
          '800': '#48836A',
          '900': '#376451',
        }
        },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

