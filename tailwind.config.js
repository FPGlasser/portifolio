/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      "ui":{
        "bg": "#040633",
        "primary": "#172D67",
        "secondary": "#2E73EA",
        "text": {
          "primary": "#D9D9D9",
          "secondary": "#F9D9C9",
          "tertiary": "#BCBCBC"
        },

        "other": {
          "1": "#FF3233",
          "2": "#FEBE0B",
          "3": "#8C15E9",
          "4": "#25d366",
          "5": "rgba(4, 6, 51, 0.44)"
        }
      }
      
    },
    extend: {
      mw: '1100px'
    },
  },
  plugins: [],
}
