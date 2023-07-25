/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'clr-dark-blue': 'hsl(209, 23%, 22%)', // Dark mode elements
        'clr-very-dark-blue-1': 'hsl(207, 26%, 17%)', // Dark mode background
        'clr-very-dark-blue-2': 'hsl(200, 15%, 8%)', // Light mode text
        'clr-dark-gray': 'hsl(0, 0%, 52%)', // Light mode input
        'clr-light-gray': 'hsl(0, 0%, 98%)', // Light mode background
        'clr-white': 'hsl(0, 0%, 100%)', // Dark mode text & Light mode elements
      },
    },
  },
  plugins: [],
}
