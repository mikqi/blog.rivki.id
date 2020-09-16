module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        brand: '#3D99E8',
      },
    },
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/typography'),
  ],
}
