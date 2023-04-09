/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['League Spartan', 'sans-serif'],
      }
    },
    colors: {
      'Dark-Gray': ' hsl(0, 0%, 63%)',
      'Black': ' hsl(0, 0%, 0%)',
      'White': ' hsl(0, 0%, 100%)',
      'Very-Dark-Gray': ' hsl(0, 0%, 27%)',
    }

  },
  plugins: [],
}

