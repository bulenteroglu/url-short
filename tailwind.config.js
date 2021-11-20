module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        cyan: 'hsl(180, 66%, 49%)',
        violet: 'hsl(257, 27%, 26%)',
        white: '#ffffff'
      },
      secondary: {
        DEFAULT: 'hsl(0, 87%, 67%)',
      },
      neutral: {
        darkest: 'hsl(260, 8%, 14%)',
        dark: 'hsl(255, 11%, 22%)',
        light: 'hsl(257, 7%, 63%)',
        lightest: 'hsl(0, 0%, 75%)',
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

