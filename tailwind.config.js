/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tiny: { max: '480px' },
        tinysm: { max: '330px' },
        tinyd: { max: '440px' },
        tinydmin: { min: '440px' },
        burger: { max: '780px' },
        tinymid: { max: '520px' },
        sm: { max: '710px' },
        mid: { max: '1370px' },
        midNorm: { max: '1170px' },
        md: { max: '1000px' },
        lg: { min: '1600px' },
      },
      colors: {
        primary: '#0077b6',
        'primary-dark': '#00517C',
        switcher: '#003855',
        'primary-hover': '#004B8D',
        'primary-active': '#004480',
        secondary: '#EEA47F',
        email: 'royalblue',
        'email-hover': '#4169e1e8',
        linkedin: '#0077b5',
        'linkedin-hover': '#0077b5e8',
        quora: '#b92b27',
        'quora-hover': '#b92b27e8',
        twitter: '#1da1f2',
        'twitter-hover': '#1da1f2e8',
      },
      borderWidth: {
        normal: '1px',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        '.scrollbar': {
          overflowY: 'auto',
          scrollbarColor: `#808189 transparent`,
          scrollbarWidth: 'auto',
        },
        '.scrollbar::-webkit-scrollbar': {
          height: '4px',
          width: '6px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#808189',
          borderRadius: '50px',
        },
      })
    }),
  ],
}
