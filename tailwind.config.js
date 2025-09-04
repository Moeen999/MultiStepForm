/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Ubuntu-Bold":["Ubuntu-Bold","sans-serif"],
        "Ubuntu-Medium":["Ubuntu-Medium","sans-serif"],
        "Ubuntu-Regular":["Ubuntu-Regular","sans-serif"]
      }
    },
  },
  plugins: [],
}

