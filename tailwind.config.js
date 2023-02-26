/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat']
      },
      backgroundImage: (theme) => ({
        'linear-blue-dark': `linear-gradient(270deg, #0B101A 0%, #1B2D51 100%);`,
      }),
    },
  },
}
