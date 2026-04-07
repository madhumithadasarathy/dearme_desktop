/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blush-pink': '#FCE7F3',
        'soft-rose': '#FBCFE8',
        'cream': '#FEFCE8',
        'dusty-rose': '#D9778D',
        'burgundy': '#632034',
        'muted-rose': '#A17A85',
        'soft-green': '#A7F3D0',
        'soft-yellow': '#FDE68A',
        'soft-red': '#FECDD3',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Nunito"', 'sans-serif'],
      },
      boxShadow: {
        'planner': '0 4px 14px 0 rgba(217, 119, 141, 0.1), 0 1px 4px 0 rgba(217, 119, 141, 0.05)',
      },
      borderRadius: {
        'planner': '1.5rem',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
