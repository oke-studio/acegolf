'use client';

import { Box, Button, useTheme } from '@mui/material';
import * as React from 'react';
import { TabCard } from '../components/tabCard/tabCard.component';

interface PriceTableValueProps {
  week: string;
  abrv: string;
  prices: number[];
}

const PricesTableValues: PriceTableValueProps[] = [
  {
    week: 'WEEKDAY',
    abrv: 'MON - THUR',
    prices: [40, 75, 110, 135],
  },
  {
    week: 'WEEKEND',
    abrv: 'FRI - SUN',
    prices: [40, 75, 110, 135],
  },
];

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

        <Box sx={{ display: 'flex', gap: '48px' }}>
          {/* TABLE GOES HERE */}
          {PricesTableValues.map((items, index) => {
            const { week, abrv, prices } = items;

            return (
              <Box
                sx={{ display: 'flex', flexDirection: 'column' }}
                key={index}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    ...typography.hero_regular,
                    fontSize: '24px',
                    alignItems: 'center',
                  }}
                >
                  <Box component="span">{week} RATES</Box>
                  <Box component="span">{abrv}</Box>
                </Box>
                <Box></Box>
              </Box>
            );
          })}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                ...typography.hero_regular,
                fontSize: '24px',
                alignItems: 'center',
              }}
            >
              <Box component="span">WEEKEND RATES</Box>
              <Box component="span">(FRI - SUN)</Box>
            </Box>
            <Box></Box>
          </Box>
        </Box>
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
