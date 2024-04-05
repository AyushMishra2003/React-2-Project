/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md':'768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl':'1536'
    },
    extend: {
      fontFamily:{
        a:["Poppins","sans serif"],
        cursive: ["Dancing Script", "cursive"],
        curve: ["Just Me Again Down Here", "cursive"],
        fonts: ["Just Me Again Down Here", "cursive"],
        lobster:["lobster","sans-serif"]
      },
      'heropaatern':
      "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8))"
    },
  },
  plugins: [require("daisyui")],
}