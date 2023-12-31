const typeScale: { fontSize: string; lineHeight: string }[] = [
  {
    // #0 <-miniscule->
    fontSize: '0.75rem',
    lineHeight: '17px',
  },
  // #1 <-small->
  {
    fontSize: '0.875rem',
    lineHeight: '20px',
  },
  // #2 <-base->
  {
    fontSize: '1rem',
    lineHeight: '22px',
  },
  // #3 <-large->
  {
    fontSize: '1.125rem',
    lineHeight: '24px',
  },
  // #4 <-extralarge->
  {
    fontSize: '1.25rem',
    lineHeight: '28px',
  },
  // #5 <-headingFour->
  {
    fontSize: '1.5rem',
    lineHeight: '32px',
  },
  // #6 <-headingThree->
  {
    fontSize: '1.875rem',
    lineHeight: '36px',
  },
  // #7 <-headingTwo->
  {
    fontSize: '2.25rem',
    lineHeight: '42px',
  },
  // #8 <-headingOne->
  {
    fontSize: '3.5rem',
    lineHeight: '60px',
  },
  // #9 <-largeH1->
  {
    fontSize: '4.5rem',
    lineHeight: '72px',
  },
  // #10 <-poster->
  { fontSize: '6rem', lineHeight: '68px' },
];

export const fontUses = {
  miniscule: {
    fontSize: typeScale[0].fontSize,
    lineHeight: typeScale[0].lineHeight,
  },

  small: {
    fontSize: typeScale[1].fontSize,
    lineHeight: typeScale[1].lineHeight,
  },

  base: {
    fontSize: typeScale[2].fontSize,
    lineHeight: typeScale[2].lineHeight,
  },

  large: {
    fontSize: typeScale[3].fontSize,
    lineHeight: typeScale[3].lineHeight,
  },

  extralarge: {
    fontSize: typeScale[4].fontSize,
    lineHeight: typeScale[4].lineHeight,
  },

  headingFour: {
    fontSize: typeScale[5].fontSize,
    lineHeight: typeScale[5].lineHeight,
  },

  headingThree: {
    fontSize: typeScale[6].fontSize,
    lineHeight: typeScale[6].lineHeight,
  },

  headingTwo: {
    fontSize: typeScale[7].fontSize,
    lineHeight: typeScale[7].lineHeight,
  },

  headingOne: {
    fontSize: typeScale[8].fontSize,
    lineHeight: typeScale[8].lineHeight,
  },

  largeH1: {
    fontSize: typeScale[9].fontSize,
    lineHeight: typeScale[9].lineHeight,
  },

  poster: {
    fontSize: typeScale[10].fontSize,
    lineHeight: typeScale[10].lineHeight,
  },
};

export const fontWeight = { '200': 200,  '300': 300, '400':  400, '500':  500, '600': 600, '700': 700, '800': 800, '900': 900 };
