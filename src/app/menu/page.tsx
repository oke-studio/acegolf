'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import { MenuCarousel } from './components/menu-carousel/menuCarousel.component';

export default function Home() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
    >
      <MenuCarousel />
    </Box>
  );
}
