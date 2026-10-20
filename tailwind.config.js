/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0D0D0F',
        'dark-secondary': '#1A1A1D',
        'dark-tertiary': '#2A1510',
        'orange-primary': '#F26A2E',
        'orange-gold': '#F2B441',
        'gold-light': '#FFCC66',
        'copper': '#B87333',
        'cream': '#F4F1E8',
        'gray-text': '#A8A29E'
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0D0D0F 0%, #1A1A1D 100%)',
        'gradient-orange': 'linear-gradient(135deg, #F26A2E 0%, #F2B441 100%)',
        'glow-orange': 'radial-gradient(circle, rgba(242, 106, 46, 0.1) 0%, transparent 70%)'
      },
      boxShadow: {
        'glow-orange': '0 0 20px rgba(242, 106, 46, 0.3)',
        'glow-gold': '0 0 20px rgba(242, 180, 65, 0.2)'
      }
    }
  },
  plugins: []
};
