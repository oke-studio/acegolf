'use client';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    hero_thin: React.CSSProperties;
    hero_ultralight: React.CSSProperties;
    hero_light: React.CSSProperties;
    hero_regular: React.CSSProperties;
    hero_medium: React.CSSProperties;
    hero_semibold: React.CSSProperties;
    hero_bold: React.CSSProperties;
    hero_extrabold: React.CSSProperties;
    hero_super: React.CSSProperties;
    hero_hairline: React.CSSProperties;
    hero_thin_italic: React.CSSProperties;
    hero_ultralight_italic: React.CSSProperties;
    hero_light_italic: React.CSSProperties;
    hero_regular_italic: React.CSSProperties;
    hero_medium_italic: React.CSSProperties;
    hero_semibold_italic: React.CSSProperties;
    hero_bold_italic: React.CSSProperties;
    hero_extrabold_italic: React.CSSProperties;
    hero_super_italic: React.CSSProperties;
    hero_hairline_italic: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    hero_thin?: React.CSSProperties;
    hero_ultralight?: React.CSSProperties;
    hero_light?: React.CSSProperties;
    hero_regular?: React.CSSProperties;
    hero_medium?: React.CSSProperties;
    hero_semibold?: React.CSSProperties;
    hero_bold?: React.CSSProperties;
    hero_extrabold?: React.CSSProperties;
    hero_super?: React.CSSProperties;
    hero_hairline?: React.CSSProperties;
    hero_thin_italic?: React.CSSProperties;
    hero_ultralight_italic?: React.CSSProperties;
    hero_light_italic?: React.CSSProperties;
    hero_regular_italic?: React.CSSProperties;
    hero_medium_italic?: React.CSSProperties;
    hero_semibold_italic?: React.CSSProperties;
    hero_bold_italic?: React.CSSProperties;
    hero_extrabold_italic?: React.CSSProperties;
    hero_super_italic?: React.CSSProperties;
    hero_hairline_italic?: React.CSSProperties;
  }

  interface Palette {
    aceOrange: string;
    aceTeal: string;
    aceGreen: string;
  }

  interface PaletteOptions {
    aceOrange?: string;
    aceTeal?: string;
    aceGreen?: string;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    hero_thin: true;
    hero_ultralight: true;
    hero_light: true;
    hero_regular: true;
    hero_medium: true;
    hero_semibold: true;
    hero_bold: true;
    hero_extrabold: true;
    hero_super: true;
    hero_hairline: true;
    hero_thin_italic: true;
    hero_ultralight_italic: true;
    hero_light_italic: true;
    hero_regular_italic: true;
    hero_medium_italic: true;
    hero_semibold_italic: true;
    hero_bold_italic: true;
    hero_extrabold_italic: true;
    hero_super_italic: true;
    hero_hairline_italic: true;
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
    fontFamily: 'new-hero',
    hero_thin: {
      fontStyle: 'normal',
      fontWeight: '100',
      fontSize: '36px',
    },
    hero_thin_italic: {
      fontStyle: 'italic',
      fontWeight: '100',
      fontSize: '36px',
    },
    hero_bold: { fontStyle: 'normal', fontWeight: '700', fontSize: '36px' },
    hero_bold_italic: {
      fontStyle: 'italic',
      fontWeight: '700',
      fontSize: '36px',
    },
    hero_ultralight: {
      fontStyle: 'normal',
      fontWeight: '200',
      fontSize: '36px',
    },
    hero_ultralight_italic: {
      fontStyle: 'italic',
      fontWeight: '200',
      fontSize: '36px',
    },
    hero_light: {
      fontStyle: 'normal',
      fontWeight: '300',
      fontSize: '36px',
    },
    hero_light_italic: {
      fontStyle: 'italic',
      fontWeight: '300',
      fontSize: '36px',
    },
    hero_medium: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '36px',
    },
    hero_medium_italic: {
      fontStyle: 'italic',
      fontWeight: '500',
      fontSize: '36px',
    },
    hero_regular: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '36px',
    },
    hero_regular_italic: {
      fontStyle: 'italic',
      fontWeight: '400',
      fontSize: '36px',
    },
    hero_super: {
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: '36px',
    },
    hero_super_italic: {
      fontStyle: 'italic',
      fontWeight: '900',
      fontSize: '36px',
    },
    hero_extrabold: {
      fontStyle: 'normal',
      fontWeight: '800',
      fontSize: '36px',
    },
    hero_extrabold_italic: {
      fontStyle: 'italic',
      fontWeight: '800',
      fontSize: '36px',
    },
    hero_semibold: {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '36px',
    },
    hero_semibold_italic: {
      fontStyle: 'italic',
      fontWeight: '600',
      fontSize: '36px',
    },
    hero_hairline: {
      fontStyle: 'normal',
      fontWeight: '100',
      fontSize: '36px',
    },
    hero_hairline_italic: {
      fontStyle: 'italic',
      fontWeight: '100',
      fontSize: '36px',
    },
  },
  palette: {
    primary: { main: '#EB8B32' },
    aceOrange: '#EB8B32',
    aceTeal: '#36DAD5',
    aceGreen: '#39775E',
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
  },
});

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
