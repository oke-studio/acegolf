const typeScale: { fontSize: string; lineHeight: string }[] = [
  {
    // #0 <-miniscule->
    fontSize: '12px',
    lineHeight: '17px',
  },
  // #1 <-small->
  {
    fontSize: '14px',
    lineHeight: '20px',
  },
  // #2 <-base->
  {
    fontSize: '16px',
    lineHeight: '22px',
  },
  // #3 <-large->
  {
    fontSize: '18px',
    lineHeight: '24px',
  },
  // #4 <-extralarge->
  {
    fontSize: '20px',
    lineHeight: '28px',
  },
  // #5 <-headingFour->
  {
    fontSize: '24px',
    lineHeight: '32px',
  },
  // #6 <-headingThree->
  {
    fontSize: '30px',
    lineHeight: '36px',
  },
  // #7 <-headingTwo->
  {
    fontSize: '36px',
    lineHeight: '42px',
  },
  // #8 <-headingOne->
  {
    fontSize: '56px',
    lineHeight: '60px',
  },
  // #9 <-largeH1->
  {
    fontSize: '72px',
    lineHeight: '72px',
  },
  // #10 <-poster->
  { fontSize: '96px', lineHeight: '68px' },
];

export const fontUses = {
  miniscule: {
    fontSize: typeScale[0].fontSize,
    lineHeight: typeScale[0].lineHeight,
    fontFamily: 'new-hero',

  },

  small: {
    fontSize: typeScale[1].fontSize,
    lineHeight: typeScale[1].lineHeight,
    fontFamily: 'new-hero',

  },

  base: {
    fontSize: typeScale[2].fontSize,
    lineHeight: typeScale[2].lineHeight,
    fontFamily: 'new-hero',

  },

  large: {
    fontSize: typeScale[3].fontSize,
    lineHeight: typeScale[3].lineHeight,
    fontFamily: 'new-hero',

  },

  extralarge: {
    fontSize: typeScale[4].fontSize,
    lineHeight: typeScale[4].lineHeight,
    fontFamily: 'new-hero',

  },

  headingFour: {
    fontSize: typeScale[5].fontSize,
    lineHeight: typeScale[5].lineHeight,
    fontFamily: 'new-hero',

  },

  headingThree: {
    fontSize: typeScale[6].fontSize,
    lineHeight: typeScale[6].lineHeight,
    fontFamily: 'new-hero',

  },

  headingTwo: {
    fontSize: typeScale[7].fontSize,
    lineHeight: typeScale[7].lineHeight,
    fontFamily: 'new-hero',

  },

  headingOne: {
    fontSize: typeScale[8].fontSize,
    lineHeight: typeScale[8].lineHeight,
    fontFamily: 'new-hero',

  },

  largeH1: {
    fontSize: typeScale[9].fontSize,
    lineHeight: typeScale[9].lineHeight,
    fontFamily: 'new-hero',

  },

  poster: {
    fontSize: typeScale[10].fontSize,
    lineHeight: typeScale[10].lineHeight,
    fontFamily: 'new-hero',

  },
};

export const fontWeight = { '200': 200,  '300': 300, '400':  400, '500':  500, '600': 600, '700': 700, '800': 800, '900': 900 };
