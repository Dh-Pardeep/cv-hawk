const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '12px',
        lg: '30px',
        xl: '50px',
        xxl: '130px',
      },
    },
    screens: {
      'xs': '390px',
      'sm': '575.9px',
      'md': '767.9px',
      'lg': '991.9px',
      'xl': '1200px',
      'xxl': '1400px',
    },
    fontFamily: {
      'Rubik': ['Rubik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}


