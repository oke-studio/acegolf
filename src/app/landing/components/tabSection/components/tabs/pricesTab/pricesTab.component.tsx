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
        <Box sx={{ ...typography.hero_regular, fontSize: '24px' }}>
          BAYS BY TRACKMAN
        </Box>
        <Box>{/* TABLE GOES HERE */}</Box>
        <Box>See all the sim rooms</Box>
        <Box>Prices & Rates</Box>
        <Box>Prices & Rates</Box>
        <Box>
          <Button
            variant="primary"
            disableElevation
            disableFocusRipple
            disableRipple
            disableTouchRipple
          >
            Reserve a bay &rarr;
          </Button>
        </Box>
      </Box>
    </TabCard>
  );
};
