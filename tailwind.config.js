/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      purple: '#313381',
      blue: {
        DEFAULT: '#2961ff',
        ice: '#eef3ff',
        warm: '#515fd7',
        gray: '#2e3a59',
      },
      gray: {
        DEFAULT: '#8f9bb3',
        light: '#edf1f7',
        dark: '#737276',
        cool: '#a2a8b0',
        trans: 'rgba(0, 0, 0, 0.08)',
        pale: '#f7f8fb',
      },
      green: '#0ccdd2',
      red: '#ff769f',
      navy: '#022150',
      white: '#fff',
      orange: '#ffb900',
    },
    extend: {},
  },
  plugins: [],
}
