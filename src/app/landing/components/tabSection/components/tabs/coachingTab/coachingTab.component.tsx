'use client';

import * as React from 'react';
import { TabCard } from '../components/tabCard/tabCard.component';
import { Box } from '@mui/material';

export const CoachingTab = () => {
  return (
    <TabCard buttonOne={{ buttonLabel: 'Coaching' }} title="Coaching">
      <Box>Hi</Box>
    </TabCard>
  );
};
