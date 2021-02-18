const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      blue: colors.blue,
      primary: colors.violet,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    backgroundColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
      'disabled',
    ],
    extend: {},
    opacity: [
      'responsive',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
      'disabled',
    ],
    textColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
      'disabled',
    ],
  },
  plugins: [require('@tailwindcss/forms')],
}
