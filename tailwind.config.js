// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#902ba9',
        blackDeep: '#040404',
        grayLight: '#d9d9d9',
        violetRoyal: '#6b22a4',
        warmGray: '#57415e',
        graySoft: '#7c7c7c',
        plumDeep: '#350f4e',
        maroonCharcoal: '#2b1f2f',
        grayMid: '#3c3c3c',
        purpleMidnight: '#180428',
      },
    },
  },
  plugins: [],
};
