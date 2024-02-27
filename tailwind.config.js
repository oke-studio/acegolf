/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    data: {},
    container: {
      center: true,
    },
    fontSize: {
      xs: ['0.75rem', '17px'], // #0 <-miniscule->

      sm: ['0.875rem', '20px'], // #1 <-small->

      base: ['1rem', '22px'], // #2 <-base->

      lg: ['1.125rem', '24px'], // #3 <-large->

      xl: ['1.25rem', '28px'], // #4 <-extralarge->

      '2xl': ['1.5rem', '32px'], // #5 <-headingFour->

      '3xl': ['1.875rem', '1.875rem'], // #6 <-headingThree->

      '4xl': ['2.5rem', '2.5rem'], // #7 <-headingTwo->

      '5xl': ['3.5rem', '3.5rem'], // #8 <-headingOne->

      '6xl': ['4rem', '4rem'], // #9 <-largeH1->

      '7xl': ['5rem', '5rem'], // #10 <-poster->
    },
    extend: {
      fontFamily: {
        HNHairline: 'HNHairline, sans',
        HNThin: 'HNThin, sans',
        HNUltraLight: 'HNUltraLight, sans',
        HNLight: 'HNLight, sans',
        HNRegular: 'HNRegular, sans',
        HNMedium: 'HNMedium, sans',
        HNSemiBold: 'HNSemiBold, sans',
        HNBold: 'HNBold, sans',
        HNExtraBold: 'HNExtraBold, sans',
        HNSuper: 'HNSuper, sans',
      },
      colors: {
        coolBlue: 'rgb(var(--color-coolBlue) / <alpha-value>)',
        darkBlack: 'rgb(var(--color-darkBlack) / <alpha-value>)',
        lightBlack: 'rgb(var(--color-lightBlack) / <alpha-value>)',
        white: 'rgb(var(--color-white) / <alpha-value>)',
        yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
        orange: 'rgb(var(--color-orange) / <alpha-value>)',
        green: 'rgb(var(--color-green) / <alpha-value>)',
        sharpTeal: 'rgb(var(--color-sharpTeal) / <alpha-value>)',
        red: 'rgb(var(--color-red) / <alpha-value>)',
        lightRed: 'rgb(var(--color-lightRed) / <alpha-value>)',
        purple: 'rgb(var(--color-purple) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
