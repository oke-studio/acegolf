const typeScale: { fontSize: string; lineHeight: string }[] = [
  {
    // #1
    fontSize: '12px',
    lineHeight: '17px',
  },
  // #2
  {
    fontSize: '14px',
    lineHeight: '20px',
  },
  // #3
  {
    fontSize: '16px',
    lineHeight: '22px',
  },
  // #4
  {
    fontSize: '18px',
    lineHeight: '24px',
  },
  // #5
  {
    fontSize: '20px',
    lineHeight: '28px',
  },
  // #6
  {
    fontSize: '24px',
    lineHeight: '32px',
  },
  // #7
  {
    fontSize: '30px',
    lineHeight: '36px',
  },
  // #8
  {
    fontSize: '36px',
    lineHeight: '42px',
  },
  // #9
  {
    fontSize: '56px',
    lineHeight: '60px',
  },
  // #10
  {
    fontSize: '72px',
    lineHeight: '72px',
  },
  // #11
  { fontSize: '96px', lineHeight: '96px' },
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

  h4: {
    fontSize: typeScale[5].fontSize,
    lineHeight: typeScale[5].lineHeight,
  },

  h3: {
    fontSize: typeScale[6].fontSize,
    lineHeight: typeScale[6].lineHeight,
  },

  h2: {
    fontSize: typeScale[7].fontSize,
    lineHeight: typeScale[7].lineHeight,
  },

  h1: {
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
