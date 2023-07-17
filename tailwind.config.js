/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: { max: '710px' },
        mid: { max: '1232px' },
      },
      colors: {
        primary: '#0077b6',
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
