'use client';

import * as React from 'react';
import {
  Box,
  styled,
  Button,
  ButtonProps,
  SxProps,
  Theme,
  useTheme,
  Typography,
} from '@mui/material';

type SectionWidthOptionsTypes = 'fullViewport' | 'normal' | 'small';
const SectionWidthOptions = {
  fullViewport: {
    //width: '100%',
    margin: '8px 0% 8px',
  },
  normal: {
    //width: '100%',
    //margin: isLargeDesktop ? '8px 3% 8px' : '15px 3% 8px',
    margin: '8px 3% 8px',
  },
  small: {
    //width: '100%',
    //margin: isLargeDesktop ? '8px 3% 8px' : '15px 3% 8px',
    margin: '8px 30% 8px',
  },
};

type CornerRadiusOptionsTypes = 'on' | 'off';
const CornerRadiusOptions = {
  on: { borderRadius: '25px' },
  off: { borderRadius: '0px' },
};

interface SectionProps {
  SectionName: string;
  SectionWidth: SectionWidthOptionsTypes;
  SectionHeight?: string;
  SectionColor: string;
  CornerRadius: CornerRadiusOptionsTypes;
  children?: React.ReactNode;
  sx?: SxProps;
}

export const Section = ({
  SectionName,
  SectionWidth,
  SectionHeight = 'fit-content',
  SectionColor,
  CornerRadius,
  sx,
  children,
}: SectionProps) => {
  const SECTION = SectionWidthOptions[SectionWidth];
  const CORNER = CornerRadiusOptions[CornerRadius];

  return (
    <Box
      sx={{
        ...sx,
        ...SECTION,
        ...CORNER,
        backgroundColor: `${SectionColor}`,
        padding: '5% 5%',
        minHeight: `${SectionHeight}`,

        //work on container query after
        //containerType: "inline-size",
      }}
      component="section"
    >
      {children}
    </Box>
  );
};

//   @container (min-width:900){

//     .section{

//     }
//   }
