/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#F7DF0B',
        'accent-light': '#F6FBB3',
        gray: '#1D1D1D',
        'lighter-gray': '#4A4A4A',
        'light-gray': '#A0A0A0',
        black: '#121212',
        info: '#2592F0',
        success: '#41AD41',
        error: '#DF3940',
        warning: '#E3A619'
      }
    }
  },
  plugins: []
}
