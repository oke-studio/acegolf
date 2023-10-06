'use client';

import * as React from 'react';
import { Box, useTheme, Button, useMediaQuery } from '@mui/material';

export const SimRooms = () => {
  const { typography, palette } = useTheme();
  const isMobile = useMediaQuery('(max-width:640px)');

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '26px',
        width: '100%',
        padding: '24px 24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '52px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <Box
            component="span"
            sx={{
              lineHeight: '70%',
              ...typography.hero_super_italic,
              fontSize: isMobile ? '82px' : '100px',
            }}
          >
            SIM ROOMS
          </Box>
          <Box
            component="span"
            sx={{ ...typography.hero_medium, fontSize: '16px' }}
          >
            Our Sim Rooms all have a special story behind their name and powered
            by Trackman TM Take a swing at any of our sim rooms for a great
            time!
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '52px' }}>
          <Box
            sx={{
              lineHeight: '70%',
              ...typography.hero_super_italic,
              fontSize: '60px',
            }}
          >
            <Box>SIM#1</Box>
            <Box>THE XXXXXX</Box>
          </Box>
          <Box
            component="span"
            sx={{ ...typography.hero_medium, fontSize: '16px' }}
          >
            This sim is named after the XXXXXXXXX. Feel the vibes from the golf
            legends and hit those birdies! From solo golfers up to groups of 3.
          </Box>
        </Box>

        <Box>
          <Button
            sx={{
              backgroundColor: palette.primary.main,
              textTransform: 'none',
              color: 'white',
              borderRadius: '33px',
              padding: '14px 14px',
              ...typography.hero_bold,
              fontSize: isMobile ? '20px' : '24px',
              ':hover': {
                backgroundColor: '#529DC8',
              },
            }}
            fullWidth
            disableRipple
          >
            Check Availability &rarr;
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
