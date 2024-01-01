'use client';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { fontUses } from './fontValues';
declare module '@mui/material/styles' {
  interface TypographyVariants {
    miniscule: React.CSSProperties;
    base: React.CSSProperties;
    small: React.CSSProperties;
    poster: React.CSSProperties;
    large: React.CSSProperties;
    extralarge: React.CSSProperties;
    largeH1: React.CSSProperties;

    headingOne: React.CSSProperties;
    headingTwo: React.CSSProperties;
    headingThree: React.CSSProperties;
    headingFour: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    miniscule?: React.CSSProperties;
    base?: React.CSSProperties;
    small?: React.CSSProperties;
    poster?: React.CSSProperties;
    large?: React.CSSProperties;
    extralarge?: React.CSSProperties;
    largeH1?: React.CSSProperties;

    headingOne?: React.CSSProperties;
    headingTwo?: React.CSSProperties;
    headingThree?: React.CSSProperties;
    headingFour?: React.CSSProperties;
  }

  interface Palette {
    aceOrange: string;
    aceTeal: string;
    aceGreen: string;
    aceGrey: string;
  }

  interface PaletteOptions {
    aceOrange?: string;
    aceTeal?: string;
    aceGreen?: string;
    aceGrey?: string;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    miniscule: true;
    small: true;
    base: true;
    large: true;
    extralarge: true;
    headingFour: true;
    headingThree: true;
    headingTwo: true;
    headingOne: true;
    largeH1: true;
    poster: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    navButton: true;
  }
}

const theme = createTheme({
  typography: {
    ...fontUses,
  },
  palette: {
    primary: { main: '#EB8B32' },
    aceOrange: '#EB8B32',
    aceTeal: '#36DAD5',
    aceGreen: '#39775E',
    aceGrey: '#AFAFAF',
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'primary',
          },
          style: {
            textTransform: 'none',
            border: '3px solid transparent',
            backgroundColor: '#EB8B32',
            borderRadius: '20px',
            padding: '5px 20px',
            fontSize: '18px',
            color: 'white',
            width: 'max-content',
            fontWeight: 400,
            ':hover': {
              color: 'black',
              backgroundColor: 'rgba(235, 139, 50, 0.49)',
            },
          },
        },
        {
          props: {
            variant: 'secondary',
          },
          style: {
            textTransform: 'none',
            border: '3px solid black',
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '5px 20px',
            fontSize: '18px',
            color: 'black',
            width: 'max-content',
            fontWeight: 400,
          },
        },
        {
          props: {
            variant: 'navButton',
          },
          style: {
            textTransform: 'none',
            border: '3px solid #EB8B32',
            backgroundColor: 'transparent',
            borderRadius: '20px',
            padding: '5px 20px',
            fontSize: '18px',
            color: 'white',
            width: 'max-content',
            fontWeight: 400,
          },
        },
      ],
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
