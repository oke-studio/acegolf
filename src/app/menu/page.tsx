'use client';

import * as React from 'react';
import { Box, useTheme } from '@mui/material';
import { MenuCarousel } from './components/menu-carousel/menuCarousel.component';
import { Header } from '@/components/Header/header.component';
import { MenuBackground } from './components/menu-background/menuBackground.component';

export default function Home() {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: palette.primary.main,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <MenuBackground />
      <Header
        navOptions={[
          { label: 'Food + Drink', to: '/menu' },
          { label: 'Events', to: '/events' },
          { label: 'Pricing', to: '/pricing' },
          { label: 'About', to: '/about' },
        ]}
      />
      <MenuCarousel />
    </Box>
  );
}
