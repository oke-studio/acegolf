'use client';

import { Box, Button, useTheme } from '@mui/material';
import * as React from 'react';
import { TabCard } from '../components/tabCard/tabCard.component';

export const PricesTab = () => {
  const { typography, palette } = useTheme();

  return (
    <TabCard>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          color: 'black',
        }}
      >
        <Box component="h1" sx={{ ...typography.hero_super, fontSize: '48px' }}>
          Prices & Rates
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            flexDirection: 'row',
            textWrap: 'nowrap',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ...typography.hero_semibold,
              fontSize: '24px',
            }}
          >
            <Box>MONDAY &rarr; FRIDAY</Box>
            <Box>MONDAY &rarr; FRIDAY</Box>
            <Box>FRIDAY &rarr; SUNDAY</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ...typography.hero_regular,
              fontSize: '24px',
            }}
          >
            <Box>9am - Noon</Box>
            <Box>Noon - 12am</Box>
            <Box>5pm - 12am</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              color: palette.aceGreen,
              ...typography.hero_semibold,
              fontSize: '24px',
            }}
          >
            <Box>$20/hr/person</Box>
            <Box>$20/hr/person</Box>
            <Box>$40/hr/person</Box>
          </Box>
        </Box>

        <Box>
          <Button variant="secondary">How it works &rarr;</Button>
        </Box>
        <Box>All bays use TRACKMAN performance simulators</Box>
        <Box sx={{ display: 'flex' }}></Box>
        <Box>
          <Button
            variant="primary"
            disableElevation
            disableFocusRipple
            disableRipple
            disableTouchRipple
          >
            <a
              href="https://www.sevenrooms.com/reservations/acegolf?duration-picker=True"
              target="_blank"
            >
              {' '}
              Reserve a bay &rarr;
            </a>
          </Button>
        </Box>
      </Box>
    </TabCard>
  );
};
