'use client';

import * as React from 'react';
import { TabCard } from '../components/tabCard/tabCard.component';
import { Box } from '@mui/material';

export const ParkingTab = () => {
  return (
    <TabCard buttonOne={{ buttonLabel: 'Parking' }} title="Parking">
      <Box sx={{ display: 'flex' }}></Box>
    </TabCard>
  );
};
