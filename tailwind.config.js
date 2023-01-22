/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: "#52D386"
        },
        blue: {
          100: "#ECEFFB",
          400: "#536FD3",
          900: "#191B22"
        },
        yellow: {
          400: "#D0D352"
        },
        gray: {
          200: "#BFC1CA",
          700: "#3D404D"
        },
        purple: {
          400: "#8B52D3"
        },
        gold: "#D3B752"
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem"
      },
      dropShadow: {
        'blue': '0px 0px 48px rgba(82, 111, 211, 0.25)',
        'gray': '0px 4px 16px rgba(51, 55, 70, 0.25);'
      }
    },
  },
  plugins: [],
}