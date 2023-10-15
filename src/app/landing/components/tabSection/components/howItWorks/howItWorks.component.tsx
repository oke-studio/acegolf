'use client';

import * as React from 'react';
import { useTheme, Box } from '@mui/material';

export const LandingHowItWorks = () => {
  const { typography, palette } = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'colum', color: 'white' }}>
      {/* How it works heading */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          component="h1"
          sx={{ ...typography.hero_super_italic, fontSize: '48px' }}
        >
          HOW IT WORKS
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            ...typography.hero_medium,
            fontSize: '18px',
          }}
        >
          <Box component="span">
            We&apos;ve revolutionized the game by bringing the excitement of
            indoor golf to the heart of the city.
          </Box>
          <Box component="span">
            Rain or shine, day or night, our state-of-the-art simulators
            transport you to world-class courses, allowing you to swing your
            clubs without any weather limitations.
          </Box>
          <Box component="span">
            Say goodbye to soggy fairways and hello to an immersive golfing
            experience that will keep you entertained for hours.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
