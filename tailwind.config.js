/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'clr-dark-blue-400': 'hsl(209, 23%, 22%)',
        'clr-dark-blue-600': 'hsl(207, 26%, 17%)',
        'clr-dark-blue-800': 'hsl(200, 15%, 8%)',
        'clr-gray-600': 'hsl(0, 0%, 52%)',
        'clr-gray-200': 'hsl(0, 0%, 98%)',
        'clr-white': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
