'use client';

import * as React from 'react';
import { useTheme, Box, useMediaQuery, Button } from '@mui/material';

export const LandingVideo = () => {
  const { typography, palette } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');
  const isSmallDesktop = useMediaQuery('(max-width:950px)');
  const isLargeDesktop = useMediaQuery('(min-width:1440px)');
  return (
    <Box
    sx={{
      width:'100%',
      height:'680px',
      
          borderRadius: '25px',
          backgroundColor: 'grey',
          marginBottom: '80px',
  }}
    >
      
    </Box>
  );
};
