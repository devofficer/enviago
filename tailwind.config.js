const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/parts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
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
          trans: '#ebebeb',
          pale: '#f7f8fb',
          steel: '#797f89',
        },
        green: '#0ccdd2',
        red: '#ff769f',
        navy: '#022150',
        white: '#fff',
        orange: '#ffb900',
        dark: '#192638',
      },
      fontFamily: {
        manrope: ['Manrope-Regular', 'sans-serif'],
        'manrope-bold': ['Manrope-Bold', 'sans-serif'],
        'manrope-semibold': ['Manrope-SemiBold', 'sans-serif'],
        'manrope-medium': ['Manrope-Medium', 'sans-serif'],
        'manrope-extrabold': ['Manrope-ExtraBold', 'sans-serif'],
        'montserrat-semibold': ['Montserrat-SemiBold', 'sans-serif'],
        'sf-ui-display': ['SFUIDisplay-SemiBold', 'sans-serif'],
      },
      container: {
        center: true,
      },
      zIndex: {
        base: '0',
        header: '50',
        sidebar: '51',
        wizard: '60',
        backdrop: '100',
        dialog: '101',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    plugin(function ({ addVariant }) {
      addVariant('main-content', '.main-content:has(&)');
    }),
  ],
};
