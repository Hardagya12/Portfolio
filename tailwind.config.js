/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"Source Code Pro"', 'monospace'],
      },
      colors: {
        neo: {
          bg: '#FFFDF5', // Cream background
          text: '#000000',
          primary: '#FF6B6B', // Red
          secondary: '#4ECDC4', // Teal
          accent: '#FFE66D', // Yellow
          dark: '#2C3E50', // Dark Blue/Grey
          purple: '#A78BFA',
          green: '#A3E635',
        }
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
};
