'use client';

import * as React from 'react';
import { styled, Box } from '@mui/material';
import GolfLogo from '../../../../../public/images/ace-golf-golf-logo2.svg';

import { AnimatedLogo } from './components/bottomLogo/bottomLogo.component';

const RelativePositionWrapper = styled(Box)({
  position: 'relative',
});

export const LogoMap = () => {
  let logoStack = [];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        height: 'max-content',
      }}
    >
      {[...Array(10)].map((_, index) => (
        <RelativePositionWrapper key={index}>
          <AnimatedLogo />
        </RelativePositionWrapper>
      ))}
    </Box>
  );
};
