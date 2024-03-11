/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md':'768',
      'mx':'990',
      'lg': '1024px',
      'xl': '1280px',
      '2xl':'1536'
    },
    extend: {
      'heropaatern':
      "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8))"
    },
  },
  plugins: [require("daisyui")],
}