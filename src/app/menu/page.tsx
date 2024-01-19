'use client';

import React from 'react';
import { Box } from '@mui/material';
import { Menu } from './components/menu-carousel/menu.component';

export default async function Home() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
    >
      <Menu />
    </Box>
  );
}
