'use client';
import * as React from 'react';
import {
  Typography as T,
  TypographyProps as TypograhpyOriginalProps,
} from '@mui/material';
import { fontUses, fontWeight } from '@/components/Theme-Context/fontValues';

const SemanticComponentMapping: {
  [key in keyof typeof fontUses]: React.ElementType<any>;
} = {
  headingOne: 'h1',
  headingTwo: 'h2',
  headingThree: 'h3',
  headingFour: 'h4',
  base: 'span',
  miniscule: 'span',
  extralarge: 'span',
  large: 'span',
  largeH1: 'h1',
  poster: 'span',
  small: 'span',
};

interface TypographyProps extends Omit<TypograhpyOriginalProps, 'variant'> {
  weight?: keyof typeof fontWeight;
  fontStyle?: 'normal' | 'italic';
  variant: keyof typeof fontUses;
  as?: React.ElementType<any>;
}

export const Typography = ({
  variant,
  weight = '300',
  fontStyle = 'normal',
  sx,
  children,
  as,
  ...props
}: TypographyProps) => {
  const semanticMapping = SemanticComponentMapping[variant];
  return (
    <T
      {...props}
      component={as ? as : semanticMapping}
      variant={variant}
      sx={{ fontWeight: weight, fontStyle: fontStyle, ...sx }}
    >
      {children}
    </T>
  );
};
