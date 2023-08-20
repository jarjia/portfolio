/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tiny: { max: '480px' },
        tinyd: { max: '440px' },
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
      },
      borderWidth: {
        normal: '1px',
      },
    },
  },
  plugins: [],
}
