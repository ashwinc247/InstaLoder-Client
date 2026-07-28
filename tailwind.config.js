/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B21B6',
          dark: '#4D1D95'
        },
        secondary: {
          DEFAULT: '#7C3AED',
          light: '#8B5CF6'
        },
        accent: '#EC4899',
        darkbg: '#0F172A',
        darkcard: '#1E293B',
        lightbg: '#F8FAFC',
        lightcard: '#FFFFFF'
      },
      borderRadius: {
        'button': '14px',
        'card': '20px',
        'input': '14px'
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'floating': '0 10px 30px -5px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}
