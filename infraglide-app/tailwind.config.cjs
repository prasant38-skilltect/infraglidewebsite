module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2196F3',
        secondary: '#764ba2',
        accent: '#4CAF50',
        orange: '#FF9800',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'md-custom': '0 2px 10px rgba(0,0,0,0.1)',
        'lg-custom': '0 10px 30px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
