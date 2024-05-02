/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        "Josefin": ["Josefin Sans", "sans-serif"]
      },
      keyframes: {
        spin: {
          '0%': {transform: "rotate(0deg)"},
          '100%': {transform: "rotate(360deg)"},
        }
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '6/7':'6 / 7'
      }
    },
  },
  plugins: [],
}

