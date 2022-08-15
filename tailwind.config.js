/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        wiggle: 'wiggle .5s ease-in both',
      },
    }
  },
  plugins: [],
}
