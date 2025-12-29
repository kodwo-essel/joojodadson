/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'midnight': '#0a1929',
        'sky-blue': '#4A90E2',
        'gold-accent': '#D4AF37',
        'section-gray': '#F8F9FA',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'source': ['"Source Serif 4"', 'serif'],
      },
    },
  },
  plugins: [],
};
