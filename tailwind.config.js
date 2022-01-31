module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx,ts}'],
  theme: {
    fontFamily: {
      heading: ['Oswald', 'sans-serif'],
      display: ['WindSong', 'cursive'],
      navigation: ['Nunito-sans', 'sans-serif'],
      body: ['Cormorant', 'serif'],
    },
    colors: {
      primary: {
        50: '#E0E0DA',
        100: '#C8CBC1',
        200: '#B0B7A8',
        300: '#96A290',
        400: '#7B8D77',
        500: '#5F7760',
        600: '#47624D',
        700: '#3E5648',
        800: '#2C3E3C',
        900: '#233132',
      },
      secondary: {
        50: '#F1E6EA',
        100: '#E7D5D9',
        200: '#DDC4C6',
        300: '#C8AFA4',
        400: '#BDA894',
        500: '#B2A384',
        600: '#9D9873',
        700: '#838762',
        800: '#677151',
        900: '#4D5B40',
      },
      bgcolors: {
        light: {
          1: '#FFFFFF',
          2: '#E4E5DF',
          3: '#D3CAC0',
        },
        dark: {
          1: '#000000',
          2: '#47624D',
        },
      },
      txtcolors: {
        light: {
          1: '#FFFFFF',
          2: '#E8E3DA',
          3: '#D3CAC0',
          4: '#F8CDC3',
        },
        dark: {
          1: '#000000',
          2: '#47624C',
          3: '#7D9081',
          4: '#ABB3A4',
        },
      },
    },
    extend: {},
  },
  plugins: [require('tailwindcss-rtl')],
};
