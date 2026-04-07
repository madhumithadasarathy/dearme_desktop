/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blush-pink': '#ffc4c4',
        'soft-rose': '#ffc4c4',
        'cream': '#fff5e4',
        'dusty-rose': '#ee6983',
        'burgundy': '#850e35',
        'muted-rose': '#850e35', // Will use with opacity
        'soft-green': '#A7F3D0',
        'soft-yellow': '#FDE68A',
        'soft-red': '#FECDD3',
        'theme-dark': '#850e35',
        'theme-pink': '#ee6983',
        'theme-light': '#ffc4c4',
        'theme-cream': '#fff5e4',
      },
      fontFamily: {
        'serif': ['"Megalin"', 'cursive', '"Playfair Display"'],
        'sans': ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'planner': '0 4px 14px 0 rgba(217, 119, 141, 0.1), 0 1px 4px 0 rgba(217, 119, 141, 0.05)',
      },
      borderRadius: {
        'planner': '1.5rem',
      },
      backgroundImage: {
        'wallpaper': "url('/bg.jpg')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
