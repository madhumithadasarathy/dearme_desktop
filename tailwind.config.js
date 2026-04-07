/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blush-pink': '#FCE7F3',
        'soft-rose': '#FBCFE8',
      }
    },
  },
  plugins: [],
}
