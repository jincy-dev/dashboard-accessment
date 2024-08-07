/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border1: {
          DEFAULT: '#2f3137',
        },
        primaryBackground: {
          DEFAULT: '#1f2029',
        },
      },
    },
  },
  plugins: [],
};
