'use client';
import * as React from 'react';
import {
  Typography as T,
  TypographyProps as TypograhpyOriginalProps,
} from '@mui/material';
import { fontUses, fontWeight } from '@/components/Theme-Context/fontValues';

interface TypographyProps extends TypograhpyOriginalProps {
  weight?: keyof typeof fontWeight;
  fontStyle?: 'normal' | 'italic';
  variant: keyof typeof fontUses;
}

export const Typography = ({
  variant,
  weight = '300',
  fontStyle = 'normal',
  sx,
  children,
  ...props
}: TypographyProps) => {
  return (
    <T
      variant={variant}
      sx={{ fontWeight: weight, fontStyle: fontStyle, ...sx }}
      {...props}
    >
      {children}
    </T>
  );
};
