/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  content: [],
  theme: {
    extend: {
      boxShadow: {
        bottom: '0 6px 13px 0px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        'main-blue': '#305aa9',
        'main-skyblue': '#64bfe8',
      },
      keyframes: {
        searchBarOpen: {
          '0%': { padding: '0px 0px 0px 60%' },
          '100%': { padding: '0px' },
        },
      },
      animation: {
        'search-bar-open': 'searchBarOpen 1s cubic-bezier(0.23, 1, 0.32, 1);',
      },
    },
  },
  plugins: [],
  extend: {
    display: ['group-hover'],
  },
};
